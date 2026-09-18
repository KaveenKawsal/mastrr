import { useEffect, useRef } from "react";
import { Mag } from "../lib/Mag.es.js";

export default function MagBackground({
  theme = "dark",
  density = 220,
  particlesScale = 0.75,
  className = "",
  style = {},
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Initialize Mag WebGL particle background
    const instance = Mag.init(el, {
      theme,
      density,
      particlesScale,
      interactive: true,
    });

    return () => {
      if (instance) {
        try {
          instance.destroy();
        } catch (err) {
          console.error("[MagBackground] Cleanup error:", err);
        }
      }
    };
  }, [theme, density, particlesScale]);

  return (
    <div
      ref={containerRef}
      className={`mag-bg-container ${className}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        ...style,
      }}
    />
  );
}
