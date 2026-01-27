"use client";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const BackgroundDots = ({ children }: { children: React.ReactNode }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const dotPattern = (color: string) => ({
    backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
    backgroundSize: '16px 16px',
  });

  return (
    <div
      className="relative min-h-screen w-full group"
      onMouseMove={handleMouseMove}
    >
      <div
        className="fixed inset-0 pointer-events-none opacity-70 z-0"
        style={dotPattern('rgb(212 212 212)')}
      />
      <div
        className="fixed inset-0 dark:opacity-70 opacity-0 pointer-events-none z-0"
        style={dotPattern('rgb(38 38 38)')}
      />
      <motion.div
        className="pointer-events-none fixed inset-0 opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          ...dotPattern('rgb(132 204 22)'),
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
