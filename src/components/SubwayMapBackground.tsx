import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SubwayMapBackgroundProps {
  hovered: boolean;
  mouse?: { x: number; y: number } | null;
}

// ViewBox constants
const VIEW_W = 300;
const VIEW_H = 200;
const MARGIN = 10;

// Color palette: restrict to primary NYC-style subway colors (red, green, blue, yellow)
const COLORS = ["#EE352E", "#00933C", "#0039A6", "#FCCC0A"];

type Point = { x: number; y: number };
type Dir = "h" | "v" | "d";
interface Route { id: number; color: string; points: Point[]; animEnd: Point | null; lastDir: Dir | null; target: Point; archiveAfterCommit?: boolean }
interface FadingRoute { id: number; color: string; points: Point[] }

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
const screenToSvg = (m: { x: number; y: number }) => ({ x: (m.x / window.innerWidth) * VIEW_W, y: (m.y / window.innerHeight) * VIEW_H });

function buildPath(points: Point[]): string {
  if (!points.length) return "";
  let d = `M${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const p = points[i];
    const prev = points[i - 1];
    if (p.y === prev.y) d += ` H${p.x}`;        // horizontal
    else if (p.x === prev.x) d += ` V${p.y}`;   // vertical
    else d += ` L${p.x},${p.y}`;                // diagonal
  }
  return d;
}

function nextSegmentPoint(last: Point, target: Point, prevDir: Dir | null): { p: Point; dir: Dir } {
  const lenMin = 24;
  const lenMax = 80;
  const length = lenMin + Math.random() * (lenMax - lenMin);
  const dx = target.x - last.x;
  const dy = target.y - last.y;
  const preferH = Math.abs(dx) >= Math.abs(dy);
  const wantDiagonal = Math.random() < 0.25; // diagonals probability

  const tryH = () => ({ p: { x: clamp(last.x + (dx >= 0 ? 1 : -1) * length, MARGIN, VIEW_W - MARGIN), y: last.y }, dir: "h" as const });
  const tryV = () => ({ p: { x: last.x, y: clamp(last.y + (dy >= 0 ? 1 : -1) * length, MARGIN, VIEW_H - MARGIN) }, dir: "v" as const });
  const tryD = () => {
    const step = length / Math.SQRT2;
    return { p: { x: clamp(last.x + (dx >= 0 ? 1 : -1) * step, MARGIN, VIEW_W - MARGIN), y: clamp(last.y + (dy >= 0 ? 1 : -1) * step, MARGIN, VIEW_H - MARGIN) }, dir: "d" as const };
  };

  let candidates: Array<{ p: Point; dir: Dir }> = [];
  if (wantDiagonal) candidates.push(tryD());
  if (preferH) candidates.push(tryH(), tryV()); else candidates.push(tryV(), tryH());
  if (prevDir && Math.random() < 0.5) {
    candidates = [...candidates.filter(c => c.dir !== prevDir), ...candidates.filter(c => c.dir === prevDir)];
  }
  return candidates[0];
}

export default function SubwayMapBackground({ hovered, mouse }: SubwayMapBackgroundProps) {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [history, setHistory] = useState<FadingRoute[]>([]);

  const lastMoveRef = useRef<Point | null>(null);
  const lastMoveTsRef = useRef(0);

  // Tuning constants
  const NUM_ROUTES = 3;
  const MOVE_THROTTLE_MS = 120;
  const MIN_MOVE_DIST = 8;
  const GROW_INTERVAL_MS = 240;
  const SEG_ANIM_MS = 300;
  const HISTORY_FADE_MS = 8000;
  const MAX_HISTORY = 4;

  // Start new set of routes on meaningful mouse move
  useEffect(() => {
    if (!hovered || !mouse) return;
    const now = performance.now();
    if (now - lastMoveTsRef.current < MOVE_THROTTLE_MS) return;
    const pos = screenToSvg(mouse);
    if (lastMoveRef.current) {
      const dx = pos.x - lastMoveRef.current.x;
      const dy = pos.y - lastMoveRef.current.y;
      if (Math.hypot(dx, dy) < MIN_MOVE_DIST) return;
    }
    lastMoveTsRef.current = now;
    lastMoveRef.current = pos;

    // Create new routes around cursor
    const newRoutes: Route[] = Array.from({ length: NUM_ROUTES }).map((_, i) => {
      const angle = (i / NUM_ROUTES) * Math.PI * 2;
      const radius = 6;
      const start: Point = { x: clamp(pos.x + Math.cos(angle) * radius, MARGIN, VIEW_W - MARGIN), y: clamp(pos.y + Math.sin(angle) * radius, MARGIN, VIEW_H - MARGIN) };
      const color = COLORS[(Math.floor(Math.random() * COLORS.length) + i) % COLORS.length];
      const target: Point = {
        x: Math.random() < 0.5 ? clamp(start.x + (Math.random() * 140 - 70), MARGIN, VIEW_W - MARGIN) : (Math.random() < 0.5 ? MARGIN * 2 : VIEW_W - MARGIN * 2),
        y: Math.random() < 0.5 ? clamp(start.y + (Math.random() * 100 - 50), MARGIN, VIEW_H - MARGIN) : (Math.random() < 0.5 ? MARGIN * 2 : VIEW_H - MARGIN * 2),
      };
      const { p, dir } = nextSegmentPoint(start, target, null);
      return { id: now + i + Math.random(), color, points: [start], animEnd: p, lastDir: dir, target };
    });

    // Append new routes and mark existing ones for archiving
    setRoutes(prev => [
      ...prev.map(r => ({ ...r, archiveAfterCommit: true })),
      ...newRoutes
    ]);
  }, [mouse, hovered, routes.length]);

  // Grow routes over time
  useEffect(() => {
    if (!hovered) return;
    const interval = setInterval(() => {
      setRoutes(prev => prev.map(r => {
        if (r.animEnd) return r; // segment still animating
        if (r.archiveAfterCommit) return r; // don't grow archived routes further
        const last = r.points[r.points.length - 1];
        let target = r.target;
        if (Math.random() < 0.18) {
          target = {
            x: Math.random() < 0.5 ? clamp(last.x + (Math.random() * 120 - 60), MARGIN, VIEW_W - MARGIN) : (Math.random() < 0.5 ? MARGIN * 2 : VIEW_W - MARGIN * 2),
            y: Math.random() < 0.5 ? clamp(last.y + (Math.random() * 90 - 45), MARGIN, VIEW_H - MARGIN) : (Math.random() < 0.5 ? MARGIN * 2 : VIEW_H - MARGIN * 2),
          };
        }
        const { p, dir } = nextSegmentPoint(last, target, r.lastDir);
        return { ...r, animEnd: p, lastDir: dir, target };
      }));
    }, GROW_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [hovered]);

  // Commit segment after animation
  const commitSegment = (id: number) => {
    setRoutes(prev => {
      const updated: Route[] = [];
      const toArchive: FadingRoute[] = [];
      for (const r of prev) {
        if (r.id === id && r.animEnd) {
          const newPoints = [...r.points, r.animEnd];
          const finished: Route = { ...r, points: newPoints, animEnd: null };
          if (finished.archiveAfterCommit) {
            // Mark as archived by removing, will be picked up by the effect
            continue;
          }
          updated.push(finished);
        } else {
          updated.push(r);
        }
      }
      return updated;
    });
  };

  // If a route is marked for archiving and has no active segment, move it to history immediately
  useEffect(() => {
    const toArchive = routes.filter(r => r.archiveAfterCommit && !r.animEnd && r.points.length > 1);
    if (!toArchive.length) return;
    const ids = new Set(toArchive.map(r => r.id));
    setHistory(prev => {
      const next = [...prev, ...toArchive.map(r => ({ id: r.id, color: r.color, points: r.points }))].slice(-MAX_HISTORY);
      setTimeout(() => setHistory(h => h.filter(hr => !ids.has(hr.id))), HISTORY_FADE_MS + 250);
      return next;
    });
    setRoutes(prev => prev.filter(r => !ids.has(r.id)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routes.filter(r => r.archiveAfterCommit && !r.animEnd).length]); // Only trigger when archived-ready count changes

  const renderRoute = (r: Route) => {
    const basePath = buildPath(r.points);
    const animPath = r.animEnd && r.points.length ? (() => {
      const last = r.points[r.points.length - 1];
      if (r.animEnd!.y === last.y) return `M${last.x},${last.y} H${r.animEnd!.x}`;
      if (r.animEnd!.x === last.x) return `M${last.x},${last.y} V${r.animEnd!.y}`;
      return `M${last.x},${last.y} L${r.animEnd!.x},${r.animEnd!.y}`;
    })() : null;
    return (
      <g key={r.id}>
        {r.points.length > 1 && <path d={basePath} stroke={r.color} strokeWidth={0.8} fill="none" strokeLinecap="round" strokeLinejoin="round" />}
        {r.points.map((pt, i) => (
          (i % 2 === 0 || i === r.points.length - 1) ? (
            <motion.circle
              key={`${r.id}-pt-${i}`}
              cx={pt.x}
              cy={pt.y}
              r={1.8}
              fill={r.color}
              stroke="#fff"
              strokeWidth={0.7}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          ) : null
        ))}
        {animPath && (
          <motion.path
            key={`${r.id}-seg-${r.points.length}`}
            d={animPath}
            stroke={r.color}
            strokeWidth={0.8}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: SEG_ANIM_MS / 1000, ease: "easeOut" }}
            onAnimationComplete={() => commitSegment(r.id)}
          />
        )}
      </g>
    );
  };

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0, pointerEvents: "none", opacity: 0.2 }}
    >
      {history.map(h => (
        <motion.g key={`hist-${h.id}`} initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: HISTORY_FADE_MS / 1000, ease: "easeOut" }}>
          <path d={buildPath(h.points)} stroke={h.color} strokeWidth={0.8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {h.points.map((pt, i) => (
            (i % 2 === 0 || i === h.points.length - 1) ? (
              <circle key={`hist-${h.id}-pt-${i}`} cx={pt.x} cy={pt.y} r={1.8} fill={h.color} stroke="#fff" strokeWidth={0.7} />
            ) : null
          ))}
        </motion.g>
      ))}
      {routes.map(renderRoute)}
    </svg>
  );
}
