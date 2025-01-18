import { Product } from "./product"
import { BaseSchemaModuleT } from "./shared"

export type CartItem = BaseSchemaModuleT & Pick<Product, "product_name"> & {
  amount: number
}