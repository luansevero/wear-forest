import StoreHeaderNav from "@/@core/components/theme/StoreHeaderNav";
import { useCartStore } from "@/stores/cartStore";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_store")({
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
      <StoreHeaderNav />
      <div className="relative flex w-full flex-1 flex-col">
        <Outlet />
      </div>
    </React.Fragment>
  );
}
