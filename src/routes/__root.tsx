import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Toaster } from "@/@core/components/ui/Toast";
import { ThemeProvider } from "@/contexts/theme-provider";
import { QueryClient } from "@tanstack/query-core";

type RouteContext = {
  queryClient: QueryClient;
};
export const Route = createRootRouteWithContext<RouteContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <ThemeProvider defaultTheme="dark">
        <Outlet />
        <Toaster />
      </ThemeProvider>
    </React.Fragment>
  );
}
