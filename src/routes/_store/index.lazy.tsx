import { createLazyFileRoute, useSearch } from "@tanstack/react-router";
import useGetProductsQueryOptions from "@/hooks/useService/products/useGetProducts";
import { useQuery } from "@tanstack/react-query";
import ProductsSectionHeader from "@/components/views/store/home/ProductsSectionHeader";
import React from "react";
import DynamicRenderer from "@/components/layout/DynamicRenderer";
import EmptyProductsSection from "@/components/views/store/EmptyProductsSection";
import StoreProductsContent from "@/components/views/store/home/StoreProductsContent";
import { ListProductOutput } from "@/types/product";

export const Route = createLazyFileRoute("/_store/")({
  component: RouteComponent,
});

function RouteComponent() {
  const page = useSearch({
    from: "/_store/",
    select(state) {
      return Number(state?.page) ?? 0
    },
  })

  const { data, isPending, isLoading, isFetching } = useQuery(
    useGetProductsQueryOptions({
      params: {
        take: 24,
        skip: page ?? 0
      },
    }),
  );

  const haveProducts = (data?.items?.length ?? 0) > 0;
  const isProductsLoading = isPending || isLoading || isFetching;

  return (
    <React.Fragment>
      <ProductsSectionHeader />
      <DynamicRenderer
        isLoading={isProductsLoading}
        hasContent={haveProducts}
        ContentComponent={
          <StoreProductsContent productList={data as ListProductOutput} />
        }
        EmptyComponent={<EmptyProductsSection />}
      />
    </React.Fragment>
  );
}
