import { cn } from "@/utils/cn";

type Props =  {
  src: string,
  alt: string,
  className?: string
  wrapperClassName?: string;
};

export default function Image({ wrapperClassName, className, ...rest }: Props) {
  return (
    <div
      className={cn(
        "relative w-full h-auto overflow-hidden",
        wrapperClassName,
      )}
    >
      <img
        {...rest}
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
      />
    </div>
  );
}
