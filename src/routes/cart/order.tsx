import { useCartStore } from "@/stores/cartStore";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cart/order")({
  beforeLoad: () => {
    const { lastOrderNumber } = useCartStore.getState();

    if (!lastOrderNumber) {
      throw redirect({ to: "/cart" });
    }
  },
});
