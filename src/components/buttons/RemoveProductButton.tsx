import { Button, ButtonProps } from "@/@core/components/ui/Button";
import { useCartStore } from "@/stores/cartStore";
import { Product } from "@/types/product";
import { X } from "lucide-react";
import { MouseEvent, useCallback } from "react";
import { toast } from "sonner";

type Props = ButtonProps & Pick<Product, "pid" | "product_name">;

export function RemoveProductCard({
  product_name,
  pid
}: Props) {
  const {removeFromCart} = useCartStore()

  const handleRemoveProductFromCart = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      removeFromCart(pid)
      toast.success(`"${product_name}" removed from cart`, {
        description: "The product has been successfully removed.",
      });
    },
    [],
  );

  return (
    <Button
      size={"sm"}
      variant={"ghost"}
      onClick={handleRemoveProductFromCart}
      className={"text-destructive hover:bg-destructive/90 hover:text-destructive-foreground"}
    >
      <X size={14} />
      Remove
    </Button>
  );
}
