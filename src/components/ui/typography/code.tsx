import { cn } from '-/lib/utils';
import React, { type PropsWithChildren } from 'react';

export default function TextP(
  props: PropsWithChildren<React.HTMLAttributes<HTMLElement>>,
) {
  return (
    <code
      {...props}
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        props.className,
      )}
    >
      {props.children}
    </code>
  );
}
