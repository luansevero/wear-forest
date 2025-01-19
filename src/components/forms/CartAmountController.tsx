import { Button } from "@/@core/components/ui/Button";
import { Minus, Plus } from "lucide-react";
import { StoreCartItem, useCartStore } from "@/stores/cartStore";
import { useCallback } from "react";
import { toast } from "sonner";
import Typography from "@/@core/components/ui/Typography";

type Props = Pick<StoreCartItem, "amount" | "product_name" | "pid">;

export default function CartAmountController({
  amount,
  product_name,
  pid,
}: Props) {
  const { increaseAmountOfProduct, reduceAmountOfProduct } = useCartStore();

  const handleAmountIncrease = useCallback(() => {
    increaseAmountOfProduct(pid);
    toast("Product quantity increased", {
      description: `One more unity of ${product_name}`,
    });
  }, []);

  const handleAmountDecrease = useCallback(() => {
    reduceAmountOfProduct(pid);
    toast("Product quantity decrease", {
      description: `One lest unity of ${product_name}`,
    });
  }, []);

  return (
    <div className="flex items-center gap-3">
      <Button
        onClick={handleAmountDecrease}
        className="aspect-square h-fit w-fit p-1"
        disabled={amount === 1}
      >
        <Minus className="size-3" />
      </Button>
      <Typography variant="large" className="text-sm">
        {amount}
      </Typography>
      <Button
        onClick={handleAmountIncrease}
        className="aspect-square h-fit w-fit p-1"
      >
        <Plus className="size-3" />
      </Button>
    </div>
  );
}
