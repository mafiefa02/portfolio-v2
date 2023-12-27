import { cn } from '-/lib/utils';
import React, { PropsWithChildren } from 'react';

export default function TextBlockquote(
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
