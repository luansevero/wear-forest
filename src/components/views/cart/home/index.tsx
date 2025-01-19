import Section from "@/@core/components/ui/Section";
import OrderProductsCard from "@/components/cards/ProductOrderCard";
import OrderSummaryCard from "@/components/cards/OrderSummaryCard";
import List from "@/@core/components/ui/List";
import { useCartStore } from "@/stores/cartStore";
import { cn } from "@/utils/cn";
import EmptyCart from "../EmptyCart";

export default function CartHomePage() {
  const { cart = {} } = useCartStore();

  const cartArray = Object.values?.(cart) ?? [];
  const haveProductsOnCart = cartArray?.length > 0;

  return (
    <>
      {!haveProductsOnCart && <EmptyCart />}

      {haveProductsOnCart && (
        <Section className={cn("sm:col-span-2")}>
          <List
            data={cartArray}
            children={(product) => <OrderProductsCard {...product} />}
          />
        </Section>
      )}

      {haveProductsOnCart && (
        <Section>
          <OrderSummaryCard />
        </Section>
      )}
    </>
  );
}
