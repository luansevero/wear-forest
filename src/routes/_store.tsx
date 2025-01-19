import StoreHeaderNav from "@/@core/components/theme/StoreHeaderNav";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_store")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <React.Fragment>
      <StoreHeaderNav />
      <div className="relative flex-1 w-full flex flex-col">
        <Outlet />
      </div>
    </React.Fragment>
  );
}
