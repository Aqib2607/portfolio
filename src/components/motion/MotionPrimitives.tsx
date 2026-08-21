import React, { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

// 1. Text Scramble / Cypher Component for Hero Headline
export function TextScramble({
  phrases,
  interval = 3500,
  className = "",
}: {
  phrases: string[];
  interval?: number;
  className?: string;
}) {
  const [currentText, setCurrentText] = useState(phrases[0]);
  const [index, setIndex] = useState(0);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || phrases.length <= 1) return;

    const timer = setInterval(() => {
      const nextIndex = (index + 1) % phrases.length;
      setIndex(nextIndex);
      const targetPhrase = phrases[nextIndex];

      let iteration = 0;
      const scrambleTimer = setInterval(() => {
        setCurrentText(
          targetPhrase
            .split("")
            .map((char, idx) => {
              if (char === " ") return " ";
              if (idx < iteration) {
                return targetPhrase[idx];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= targetPhrase.length) {
          clearInterval(scrambleTimer);
        }
        iteration += 1 / 2;
      }, 30);
    }, interval);

    return () => clearInterval(timer);
  }, [index, phrases, interval, prefersReducedMotion]);

  return <span className={className}>{currentText}</span>;
}

// 2. Viewport Scroll Reveal Wrapper
export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 3. Staggered Container for Lists & Grids
export function StaggerContainer({
  children,
  staggerChildren = 0.08,
  delayChildren = 0.1,
  className = "",
}: {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 4. Stagger Item
export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 5. Magnetic Button wrapper for desktop pointer
export function Magnetic({
  children,
  strength = 0.25,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
