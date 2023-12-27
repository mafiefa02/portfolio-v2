'use client';

import AnimatedDiv from '-/components/ui/animated/div';
import { useMounted } from '-/hooks/useMounted';
import React from 'react';

export default function ProfileColor() {
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <>
      <AnimatedDiv
        initial={{ top: 288, left: 156 }}
        animate={{ top: 64, left: 56 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className='absolute z-50 h-48 w-48 rounded-full bg-indigo-800 mix-blend-color blur-3xl'
      />
      <AnimatedDiv
        initial={{ top: 88, left: 80 }}
        animate={{ top: 288, left: 48 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        className='absolute z-50 h-60 w-60 rounded-full bg-primary/60 mix-blend-color blur-3xl'
      />
    </>
  );
}
