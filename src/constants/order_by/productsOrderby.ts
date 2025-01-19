import type { Product } from "@/types/product";
import type { DataDeepKeys } from "@/types/shared";

export type ProductsOrderBy = Extract<
  DataDeepKeys<Product>,
  | "product_name"
  | "retail_price"
  | "discounted_price"
  | "product_rating"
  | "overall_rating"
  | "brand"
>;

type ProductsSortMap = {
  [K in ProductsOrderBy]: {
    id: K;
    label: string;
  };
};

export const productsOrderBy: {
  ids: ProductsOrderBy[];
  entities: ProductsSortMap;
} = {
  ids: [
    "product_name",
    "retail_price",
    "discounted_price",
    "product_rating",
    "overall_rating",
    "brand",
  ],
  entities: {
    product_name: {
      id: "product_name",
      label: "Product Name",
    },
    retail_price: {
      id: "retail_price",
      label: "Retail Price",
    },
    discounted_price: {
      id: "discounted_price",
      label: "Discounted Price",
    },
    product_rating: {
      id: "product_rating",
      label: "Product Rating",
    },
    overall_rating: {
      id: "overall_rating",
      label: "Overall Rating",
    },
    brand: {
      id: "brand",
      label: "Brand",
    },
  },
};

export default productsOrderBy;