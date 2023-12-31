import { cn } from "-/lib/utils";
import React, { type PropsWithChildren } from "react";

export default function TextH2(
  props: PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>,
) {
  return (
    <h2
      {...props}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        props.className,
      )}
    >
      {props.children}
    </h2>
  );
}
