import { Input } from "@/@core/components/ui/Input";
import { cn } from "@/utils/cn";
import { Search } from "lucide-react";
import React from "react";

const SearchInput = React.forwardRef<
  HTMLInputElement,
  Omit<React.ComponentProps<"input">, "type">
>(({ className, ...props }, ref) => {
  return (
    <fieldset className="relative">
      <Input
        placeholder="Search"
        type="search"
        className={cn("pl-8 md:max-w-sm", className)}
        ref={ref}
        {...props}
      />
      <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
    </fieldset>
  );
});

export default SearchInput