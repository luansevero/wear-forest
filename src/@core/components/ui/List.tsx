import React, { ComponentProps } from "react";
import { cn } from "@/utils/cn";

type ListItem = object | number | string;

interface ListProps<T extends ListItem>
  extends Omit<ComponentProps<"ul">, "children"> {
  data: T[];
  children: (item: T) => JSX.Element;
}

export default function List<T extends ListItem>({
  data,
  children,
  className,
}: ListProps<T>) {
  return (
    <ul className={cn("w-full", className)}>
      {data.map((item) => {
        const child = children(item);

        const shouldAddKey = typeof item === "string" || typeof item === "number";

        return React.cloneElement(child, {
          ...(shouldAddKey && {
            key: item,
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