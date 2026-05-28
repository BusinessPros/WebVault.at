"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
  const Component = motion[as];

  return (
    <Component
      initial={false}
      whileInView={{
        opacity: [0.86, 1],
        y: [24, 0],
        filter: ["blur(8px)", "blur(0px)"],
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
