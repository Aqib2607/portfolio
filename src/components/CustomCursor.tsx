import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if pointer is fine (desktop mouse) and no reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        cursor.style.opacity = "1";
        isVisible = true;
      }

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      isVisible = false;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
      isVisible = true;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], [role="tab"], [role="dialog"], label, .interactive-hover'
      );

      if (isInteractive) {
        cursor.classList.add("cursor-hover");
      } else {
        cursor.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      aria-hidden="true"
      style={{ opacity: 0 }}
    />
  );
};

export default CustomCursor;
