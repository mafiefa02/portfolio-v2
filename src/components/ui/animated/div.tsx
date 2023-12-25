'use client';

import React from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { cn } from '-/lib/utils';

type AnimatedElementProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;

export default function AnimatedDiv(props: AnimatedElementProps) {
  return (
    <motion.div
      {...props}
      className={cn(props.className)}
    >
      {props.children}
    </motion.div>
  );
}
