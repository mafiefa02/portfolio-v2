import { cn } from "-/lib/utils";
import React, { type PropsWithChildren } from "react";

export default function TextUl(
  props: PropsWithChildren<React.HTMLAttributes<HTMLUListElement>>,
) {
  return (
    <ul
      {...props}
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", props.className)}
    >
      {props.children}
    </ul>
  );
}
