import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/cn"

const badgeVariants = cva(
  "inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow",
        outline: "text-foreground",
        text: "border-none text-foreground",
      },
      shape: {
        default: "rounded-md",
        pill: "rounded-full"
      },
      size: {
        sm: "px-0.5 rounded-sm text-[0.65rem]",
        default: "px-1.5 py-0.5",
        lg: "px-2.5 py-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      shape: "default",
      size: "default"
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, shape, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, shape, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
