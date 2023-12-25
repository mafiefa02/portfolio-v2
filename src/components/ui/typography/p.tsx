import { cn } from '-/lib/utils';
import React, { type PropsWithChildren } from 'react';

export default function TextP(
  props: PropsWithChildren<React.HTMLAttributes<HTMLParagraphElement>>,
) {
  return (
    <p
      {...props}
      className={cn('leading-7 [&:not(:first-child)]:mt-6', props.className)}
    >
      {props.children}
    </p>
  );
}
