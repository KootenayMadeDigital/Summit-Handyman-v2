"use client";

import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  once?: boolean;
  as?: keyof typeof motion;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  className,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: reduce ? 0.01 : 0.48,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  staggerDelay = 0.05,
  ...rest
}: HTMLMotionProps<"div"> & { staggerDelay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduce ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 20,
  ...rest
}: HTMLMotionProps<"div"> & { y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: reduce ? { opacity: 1 } : { opacity: 0, y },
        visible: reduce
          ? { opacity: 1, transition: { duration: 0.01 } }
          : {
              opacity: 1,
              y: 0,
              transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] },
            },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
