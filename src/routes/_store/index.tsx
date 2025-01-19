import { ProductsOrderBy } from "@/constants/order_by/productsOrderby";
import useGetProductsQueryOptions from "@/hooks/useService/products/useGetProducts";
import { GetPayload } from "@/types/http";
import { Product } from "@/types/product";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

type ProductFilters = Pick<GetPayload<Product>, "order_by" | "order_by_direction">

// export const productsFiltersSchema = z.object<ProductFilters>({
//   order_by: 
// })

export const Route = createFileRoute("/_store/")({
  // validateSearch:
});