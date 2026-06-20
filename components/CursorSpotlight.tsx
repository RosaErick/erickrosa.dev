import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

// A soft "flashlight" glow that follows the cursor across the whole app.
// Pointer events are disabled so it never blocks interaction; on touch devices
// (no hover) it's skipped entirely. Position updates are batched with
// requestAnimationFrame to stay cheap.
export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(hover: none)").matches
    ) {
      return;
    }

    let frame = 0;
    let x = 0;
    let y = 0;

    const render = () => {
      frame = 0;
      const el = ref.current;
      if (el) {
        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
        el.style.opacity = "1";
      }
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Box
      ref={ref}
      aria-hidden
      position="fixed"
      inset={0}
      zIndex={40}
      opacity={0}
      pointerEvents="none"
      transition="opacity .3s ease"
      sx={{
        background:
          "radial-gradient(500px circle at var(--x, 50%) var(--y, -100%), var(--spotlight), transparent 65%)",
      }}
    />
  );
}
