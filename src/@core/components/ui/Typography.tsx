import { cn } from "@/utils/cn";
import { ComponentPropsWithoutRef, createElement, forwardRef } from "react";

declare module "react" {
  function forwardRef<T, P = object>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactNode | null;
}

type TypographyTypes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "caption";

export type TypographyProps<T extends TypographyTypes = "p"> = {
  variant?: T | "lead" | "blockquote" | "large" | "muted";
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

const variantStyles: Record<
  TypographyTypes | "lead" | "blockquote" | "large" | "muted",
  string
> = {
  h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "text-3xl font-semibold tracking-tight first:mt-0",
  h3: "text-2xl font-semibold tracking-tight",
  h4: "text-xl font-semibold tracking-tight",
  h5: "text-lg font-semibold tracking-tight",
  h6: "text-md font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  muted: "text-sm text-muted-foreground",
  span: "text-base",
  caption: "text-sm",
};

function InnerTypography<T extends TypographyTypes = "p">(
  { variant, className, children, ...props }: TypographyProps<T>,
  ref: React.Ref<HTMLElement> | null,
) {
  const elementVariant = variant as keyof typeof variantStyles;

  const element =
    elementVariant === "lead" ||
    elementVariant === "large" ||
    elementVariant === "muted" ||
    elementVariant === "blockquote"
      ? "p"
      : (elementVariant ?? "p");

  return createElement(
    element,
    {
      ...props,
      className: cn(variantStyles[elementVariant ?? "p"], className),
      ref,
    },
    children,
  );
}

const Typography = forwardRef(InnerTypography);

export default Typography;
