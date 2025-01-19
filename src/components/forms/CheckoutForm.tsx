import { Button } from "@/@core/components/ui/Button";
import { Spinner } from "@/@core/components/ui/Spinner";
import Typography from "@/@core/components/ui/Typography";
import usePostCheckoutQueryOptions from "@/hooks/useService/checkouts/usePostCheckout";
import { PostCheckoutPayload } from "@/services/checkout/service";
import { StoreCartItem, useCartStore } from "@/stores/cartStore";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import toastSupport from "@/utils/toast";

type FormPayload = {
  products: StoreCartItem[];
};

export default function CheckoutForm() {
  const { cart = {}, setOrderNumber } = useCartStore();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation(usePostCheckoutQueryOptions());

  const form = useForm<FormPayload>({
    defaultValues: {
      products: Object.values(cart),
    },
    onSubmit: async ({ value }) => {
      try {
        const { products } = value;

        const checkoutCart = products.map((product) => ({
          pid: product.pid,
          product_name: product.product_name,
          amount: product.amount,
        }));

        const postPayload: PostCheckoutPayload = {
          Cart: checkoutCart,
        };

        const response = await mutateAsync(postPayload);

        setOrderNumber(response.order_number);
        navigate({
          to: "/cart/order",
          search: {
            number: response.order_number,
          },
        });
      } catch {
        toastSupport();
      }
    },
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex w-full flex-col items-center"
      >
        <form.Subscribe
          selector={(state) => [state.isSubmitting]}
          children={([isSubmitting]) => {
            return (
              <>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full"
                >
                  {isSubmitting && (
                    <Spinner className="text-primary-foreground p-1" />
                  )}
                  {!isSubmitting && "Confirm Purchase"}
                </Button>
                <div className="flex items-center gap-2">
                  <Typography variant="muted" className="text-sm">
                    our
                  </Typography>
                  <Button
                    disabled={isSubmitting}
                    asChild
                    variant={"link"}
                    className="px-0"
                  >
                    <Link to="/">Continue shopping</Link>
                  </Button>
                </div>
              </>
            );
          }}
        />
      </form>
    </>
  );
}
