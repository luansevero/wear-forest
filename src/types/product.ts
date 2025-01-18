import { BaseModuleT, BaseSchemaModuleT } from "./shared"

export type Product = BaseModuleT & {
  brand: string
  description: string
  discounted_price: number
  images: Array<string> | null
  overall_rating: number,
  product_category_tree: Array<string> | null
  product_name: string
  product_rating: number
  retail_price: number
}

export type ListProductOutput = BaseSchemaModuleT & {
  items: Array<Product> | null
  total_items: number
}