import { cn } from '-/lib/utils';
import React, { type PropsWithChildren } from 'react';

export default function TextH1(
  props: PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>,
) {
  return (
    <h1
      {...props}
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        props.className,
      )}
    >
      {props.children}
    </h1>
  );
}
