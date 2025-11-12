"use client";
import React, { useEffect, useRef } from "react";

/**
 * CornerP5
 * - Dynamically imports p5 (so server-side import is avoided)
 * - Creates four small sketches anchored to each corner of the page
 * - Each corner is interactive: hover over that corner's box to trigger a brighter / animated state
 *
 * Notes for the developer:
 * - This component depends on the `p5` package. Install with:
 *     npm install p5
 * - The sketch purposely keeps canvases small (120x120) and non-blocking so they won't interfere
 *   with page interactions. Hover is handled on the wrapper and forwarded to the sketch instance.
 */

type Corner = "tl" | "tr" | "bl" | "br";

const SIZE = 140; // px - size of each corner canvas

export default function CornerP5() {
  const tlRef = useRef<HTMLDivElement | null>(null);
  const trRef = useRef<HTMLDivElement | null>(null);
  const blRef = useRef<HTMLDivElement | null>(null);
  const brRef = useRef<HTMLDivElement | null>(null);
  const instancesRef = useRef<Record<Corner, any> | null>(null);

  useEffect(() => {
    let mounted = true;
    instancesRef.current = { tl: null, tr: null, bl: null, br: null };

    (async () => {
      try {
        // p5 is dynamically imported at runtime. If the package isn't installed,
        // this will throw — we catch that and simply don't render the decorative canvases.
        // @ts-ignore: allow dynamic import even if @types/p5 is not installed
        const mod = await import("p5");
        const P5 = mod.default;
        if (!mounted) return;

        const makeSketch = (corner: Corner) => (p: any) => {
          let w = SIZE;
          let h = SIZE;
          let pulse = 0;
          let hover = false;

          // expose a small API so outer component can toggle hover
          (p as any)._setHover = (v: boolean) => {
            hover = v;
          };

          p.setup = () => {
            p.createCanvas(w, h);
            p.pixelDensity(1);
            p.noStroke();
            p.ellipseMode(p.CENTER);
          };

          p.windowResized = () => {
            // size is fixed for corner boxes; keep canvas consistent
            p.resizeCanvas(w, h);
          };

          p.draw = () => {
            p.clear();
            const t = p.millis() / 1000;
            pulse = p.lerp(pulse, hover ? 1 : 0, 0.08);

            // subtle background radial
            const baseAlpha = 120 * (0.4 + 0.6 * pulse);
            if (corner === "tl" || corner === "bl") {
              p.fill(0, 80, 160, baseAlpha * 0.6);
            } else {
              p.fill(220, 30, 40, baseAlpha * 0.6);
            }
            p.ellipse(w * 0.25, h * 0.25, 90 + 30 * pulse, 90 + 30 * pulse);

            // subway-style circular stop(s)
            const stops = 3;
            for (let i = 0; i < stops; i++) {
              const cx = w * (0.2 + (i / (stops - 1)) * 0.6);
              const cy = h * (0.7 + 0.04 * Math.sin(t * 2 + i));
              const r = 8 + 6 * Math.sin(t * 3 + i * 1.3) * pulse;
              p.fill(255, 255, 255, 230);
              p.ellipse(cx, cy, r + 2, r + 2);
              p.fill(0, 0, 0, 200);
              p.ellipse(cx, cy, r - 2, r - 2);
            }

            // animated line that lights up when hovered
            p.strokeWeight(2 + 2 * pulse);
            p.noFill();
            p.stroke(255, 255, 255, 160 + 95 * pulse);
            p.beginShape();
            for (let i = 0; i <= 20; i++) {
              const x = (i / 20) * w * 0.9 + w * 0.05;
              const y = h * (0.45 + 0.06 * Math.sin(i * 0.6 + t * 3) * (0.3 + pulse));
              p.vertex(x, y);
            }
            p.endShape();
            p.noStroke();

            // small 'train' dot that moves along the path when hovered
            const trainProgress = (t * (0.2 + 0.8 * pulse)) % 1;
            const tx = w * (0.05 + trainProgress * 0.9);
            const ty = h * (0.45 + 0.06 * Math.sin(trainProgress * 20 + t * 3));
            p.fill(250, 220, 0, 230 * pulse);
            p.ellipse(tx, ty, 12 + 6 * pulse, 12 + 6 * pulse);
          };
        };

        const createFor = (
          corner: Corner,
          ref: React.RefObject<HTMLDivElement | null> | null
        ) => {
          if (!ref || !ref.current) return null;
          const instance = new P5(makeSketch(corner), ref.current);
          return instance;
        };

        instancesRef.current!.tl = createFor("tl", tlRef);
        instancesRef.current!.tr = createFor("tr", trRef);
        instancesRef.current!.bl = createFor("bl", blRef);
        instancesRef.current!.br = createFor("br", brRef);
      } catch (err) {
        // If p5 is not installed, we silently fail (no decorative canvases).
        // Developer should run `npm install p5` to enable these.
        // console.warn("p5 not available", err);
      }
    })();

    return () => {
      mounted = false;
      if (instancesRef.current) {
        (Object.keys(instancesRef.current) as Corner[]).forEach((c) => {
          const inst = instancesRef.current![c];
          if (inst && typeof inst.remove === "function") inst.remove();
        });
      }
    };
  }, []);

  const setHover = (corner: Corner, v: boolean) => {
    const inst = instancesRef.current ? instancesRef.current[corner] : null;
    if (inst && (inst as any)._setHover) {
      try {
        (inst as any)._setHover(v);
      } catch (e) {
        // ignore
      }
    }
  };

  return (
    <>
      {/* Top-left */}
      <div
        ref={tlRef}
        onMouseEnter={() => setHover("tl", true)}
        onMouseLeave={() => setHover("tl", false)}
        className="fixed top-6 left-6 w-[140px] h-[140px] z-40 pointer-events-auto"
        style={{ touchAction: "manipulation" }}
        aria-hidden
      />

      {/* Top-right */}
      <div
        ref={trRef}
        onMouseEnter={() => setHover("tr", true)}
        onMouseLeave={() => setHover("tr", false)}
        className="fixed top-6 right-6 w-[140px] h-[140px] z-40 pointer-events-auto"
        style={{ touchAction: "manipulation" }}
        aria-hidden
      />

      {/* Bottom-left */}
      <div
        ref={blRef}
        onMouseEnter={() => setHover("bl", true)}
        onMouseLeave={() => setHover("bl", false)}
        className="fixed bottom-6 left-6 w-[140px] h-[140px] z-40 pointer-events-auto"
        style={{ touchAction: "manipulation" }}
        aria-hidden
      />

      {/* Bottom-right */}
      <div
        ref={brRef}
        onMouseEnter={() => setHover("br", true)}
        onMouseLeave={() => setHover("br", false)}
        className="fixed bottom-6 right-6 w-[140px] h-[140px] z-40 pointer-events-auto"
        style={{ touchAction: "manipulation" }}
        aria-hidden
      />
    </>
  );
}
