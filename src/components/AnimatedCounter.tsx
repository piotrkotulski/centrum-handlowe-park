"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
  delay?: number;
}

export function AnimatedCounter({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  label,
  decimals = 0,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (endTime - startTime), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = eased * end;
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center md:text-left"
    >
      <div className="flex items-start justify-center md:justify-start gap-1">
        <span className="font-heading font-light leading-[0.85] text-gold text-6xl md:text-7xl lg:text-8xl">
          {prefix}
          {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
        </span>
        {suffix.trim() && (
          <span className="font-heading italic text-gold/60 text-xl md:text-2xl lg:text-3xl mt-2">
            {suffix.trim()}
          </span>
        )}
      </div>
      <div className="mt-4 text-[0.7rem] tracking-[0.25em] text-muted uppercase">
        {label}
      </div>
    </motion.div>
  );
}
