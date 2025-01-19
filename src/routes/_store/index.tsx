import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const productsFiltersSchema = z.object({
  page: z.optional(z.number()),
  order_by: z.optional(z.union([
    z.literal("brand"),
    z.literal("discounted_price"),
    z.literal("overall_rating"),
    z.literal("product_name"),
    z.literal("product_rating"),
    z.literal("retail_price"),
  ])),
  order_by_direction: z.optional(z.union([
    z.literal("asc"),
    z.literal("desc")
  ])),
  query: z.optional(z.string())
});

export const Route = createFileRoute("/_store/")({
  validateSearch: productsFiltersSchema,
});
