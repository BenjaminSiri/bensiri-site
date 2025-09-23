import { useEffect, useState } from "react";

const getWidth = () => (typeof window === "undefined" ? 0 : window.innerWidth);

export function useWindowWidth() {
  const [width, setWidth] = useState<number>(getWidth());

  useEffect(() => {
    let frame: number | null = null;

    const onResize = () => {
      if (frame != null) return;              // throttle to one per frame
      frame = requestAnimationFrame(() => {
        frame = null;
        setWidth(getWidth());
      });
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    onResize(); // initialize

    return () => {
      if (frame != null) cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  return width;
}
