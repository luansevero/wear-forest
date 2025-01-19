import { cn } from "@/utils/cn";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const Section = forwardRef<HTMLElement, ComponentPropsWithoutRef<"section">>(
  function Section({ className = "", children, ...rest }, ref) {
    return (
      <section
        ref={ref}
        className={cn("flex flex-col w-full gap-2 mt-4 px-4", className)}
        {...rest}
      >
        {children}
      </section>
    );
  }
);

export default Section;