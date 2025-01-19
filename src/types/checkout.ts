import { Product } from "./product"
import { BaseSchemaModuleT } from "./shared"

export type CartItem = Pick<Product, "product_name" | "pid"> & {
  amount: number
}

export type CheckoutInput = BaseSchemaModuleT & {
  Cart: Array<CartItem> | null
  EmailContact: string
}

export type CheckoutOutput = BaseSchemaModuleT & {
  order_number: string
  test_email_app_url: string
}