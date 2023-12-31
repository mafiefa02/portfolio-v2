import { cn } from "-/lib/utils";
import React, { type PropsWithChildren } from "react";

export default function TextH3(
  props: PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>,
) {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className,
      )}
    >
      {props.children}
    </h3>
  );
}
