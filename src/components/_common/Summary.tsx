import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

type SummaryWrapperProps = React.HTMLAttributes<HTMLElement> & {
  asChild?: boolean;
};

function SummaryWrapper({ asChild, className, ...rest }: SummaryWrapperProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn("flex items-center justify-between gap-2", className)}
      {...rest}
    />
  );
}

const SummaryLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-muted-foreground leading-none tracking-tight text-sm", className)}
    {...props}
  />
));

const SummaryValue = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm", className)}
    {...props}
  />
));

const Summary = {
  Wrapper: SummaryWrapper,
  Label: SummaryLabel,
  Value: SummaryValue,
};

export default Summary