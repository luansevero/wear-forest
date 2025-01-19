import CartHeaderNav from "@/@core/components/theme/CartHeaderNav";
import { useCartStore } from "@/stores/cartStore";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/cart/_layout")({
  component: RouteComponent,
  loader: () => {
    const { lastOrderNumber, clearCart } = useCartStore.getState();

    if (lastOrderNumber) {
      clearCart();
    }
  },
});

function RouteComponent() {
  return (
    <React.Fragment>
      <CartHeaderNav />
      <Outlet />
    </React.Fragment>
  );
}
