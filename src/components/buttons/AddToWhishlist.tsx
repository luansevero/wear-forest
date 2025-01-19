import { Button, ButtonProps } from "@/@core/components/ui/Button";
import { Heart } from "lucide-react";
import { MouseEvent, useCallback } from "react";
import { toast } from "sonner";

type Props = ButtonProps;

export function AddToWhishlistButton({
  size,
  variant = "outline",
  className = "aspect-square px-2",
}: Props) {
  const handleAddToWishlist = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      toast("That feature is not available yet", {
        description: "You will soon be able to see your wishlist",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    },
    [],
  );

  return (
    <Button
      size={size}
      variant={variant}
      onClick={handleAddToWishlist}
      className={className}
    >
      <Heart size={14} />
    </Button>
  );
}
