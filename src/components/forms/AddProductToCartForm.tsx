import { NumberInput } from "@/@core/components/ui/NumberInput";
import { CartItem } from "@/types/checkout";
import { useForm } from "@tanstack/react-form";
import { ZodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import { ZodSchemaFor } from "@/types/shared";
import { Button } from "@/@core/components/ui/Button";
import { ShoppingCart } from "lucide-react";
import { StoreCartItem, useCartStore } from "@/stores/cartStore";
import { useCallback } from "react";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";
import toastSupport from "@/utils/toast";

type Props = Omit<StoreCartItem, "amount">;
type FormPayload = StoreCartItem;

const schema = z.object<ZodSchemaFor<FormPayload>>({
  amount: z.number().int("Number must be positive"),
  product_name: z.string().min(1, "Product name can't be empty"),
  pid: z.string().length(16, "That product keys is invalid"),
  discounted_price: z.number(),
  image: z.string(),
  retail_price: z.number(),
});

export default function AddProductToCartForm({
  product_name,
  pid,
  discounted_price,
  image,
  retail_price,
}: Props) {
  const { addToCart } = useCartStore();

  const form = useForm<FormPayload, ZodValidator>({
    defaultValues: {
      amount: 1,
      product_name,
      pid,
      discounted_price,
      image,
      retail_price,
    },
    validators: {
      onSubmit: schema,
    },
    onSubmit: ({ value: product }) => {
      try {
        addToCart(product);
        handleSuccess(product);

        form.reset();
      } catch {
        toastSupport()
      }
    },
  });

  const handleSuccess = useCallback((product: CartItem) => {
    toast("Product added to the cart", {
      description: `${product.amount} ${product.product_name}`,
      action: {
        label: "Undo",
        onClick: () => handleRemoveFromCart(product),
      },
    });
  }, []);

  const handleRemoveFromCart = useCallback((product: CartItem) => {
    toast("The product was removed from cart", {
      description: `${product.amount} ${product.product_name}`,
      action: {
        label: "Close",
        onClick: () => {},
      },
    });
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="flex items-center gap-2"
    >
      <form.Field
        name="amount"
        children={(field) => {
          return (
            <NumberInput
              min={1}
              value={field.state.value}
              onValueChange={(value) => field.handleChange(value ?? 1)}
              className="max-w-24"
            />
          );
        }}
      />
      <DialogClose className="w-full">
        <Button type="submit" className="h-full w-full">
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </DialogClose>
    </form>
  );
}
