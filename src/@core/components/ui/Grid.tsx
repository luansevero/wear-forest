import React, { ComponentProps } from "react";
import { cn } from "@/utils/cn";

type GridItem = object | number | string | never

interface GridProps<T extends GridItem>
  extends Omit<ComponentProps<"ul">, "children"> {
  data: T[];
  children: (item: T) => JSX.Element;
}

export default function Grid<T extends GridItem>({
  data,
  children,
  className,
}: GridProps<T>) {
  return (
    <ul
      className={cn(
        "grid w-full px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {data.map((item) => {
        const child = children(item);

        const shouldAddKey = typeof item === "string" || typeof item === "number"

        return React.cloneElement(child, {
          ...(shouldAddKey && {
            key: item
          }),
          className: cn("", {
            [child?.props?.className]: child?.props?.className,
          }),
          Tag: "li",
        });
      })}
    </ul>
  );
}
