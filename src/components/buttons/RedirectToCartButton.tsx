import { Badge } from "@/@core/components/ui/Badge";
import { Button } from "@/@core/components/ui/Button";
import { useCartStore } from "@/stores/cartStore";
import { cn } from "@/utils/cn";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";

export default function RedirectToCartButton() {
  const { cart } = useCartStore();

  const productsInCart = Object.values(cart ?? {}).length ?? 0;

  return (
    <Button variant={"outline"} asChild className="relative w-fit aspect-square">
      <Link to="/cart">
        <ShoppingCart className="size-4"/>
        {productsInCart > 0 && (
          <Badge className={cn("absolute -right-2 -top-2")} shape={"pill"}>
            {productsInCart > 99 ? "99+" : productsInCart}
          </Badge>
        )}
      </Link>
    </Button>
  );
}
