import { api } from "../axiosApi"
import type { GetPayload } from "@/types/http"
import type { ListProductOutput, Product } from "@/types/product"
import { buildUrlWithParams } from "@/utils/http"

const controller = "/products"

const checkoutRouter = {
  base: controller
}

type GetProductsPayload= GetPayload<Product>

async function postCheckout(params: GetProductsPayload): Promise<ListProductOutput> {
  const url = buildUrlWithParams(checkoutRouter.base, params)
  return api.post(url).then(response => response.data)
}

export {
  postCheckout
}
export type {
  GetProductsPayload
}