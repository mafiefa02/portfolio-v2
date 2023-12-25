import { cn } from '-/lib/utils';
import React, { type PropsWithChildren } from 'react';

export default function TextH4(
  props: PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>,
) {
  return (
    <h4
      {...props}
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        props.className,
      )}
    >
      {props.children}
    </h4>
  );
}
