"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  as?: "div" | "section" | "article" | "li";
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const Component = motion[as] as typeof motion.div;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "end 14%"],
  });
  const y = useTransform(scrollYProgress, [0, 0.55, 1], [30, 0, -12]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.985, 1, 0.995]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.92, 1], [0.72, 1, 1, 0.9]);

  return (
    <Component
      ref={ref}
      style={{ y, scale, opacity }}
      initial={{ filter: "blur(8px)" }}
      whileInView={{
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.75, ease, delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
