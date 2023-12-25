import { cn } from '-/lib/utils';
import React, { type PropsWithChildren } from 'react';

export default function TextP(
  props: PropsWithChildren<React.HTMLAttributes<HTMLQuoteElement>>,
) {
  return (
    <blockquote
      {...props}
      className={cn('mt-6 border-l-2 pl-6 italic', props.className)}
    >
      {props.children}
    </blockquote>
  );
}