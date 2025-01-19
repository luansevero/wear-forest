import { api } from "../axiosApi"
import type { GetPayload } from "@/types/http"
import type { ListProductOutput, Product } from "@/types/product"
import { buildUrlWithFilterParams } from "@/utils/filters"

const controller = "/products"

const checkoutRouter = {
  base: controller
}

type GetProductsPayload= GetPayload<Product>

async function getProducts(params: GetProductsPayload): Promise<ListProductOutput> {
  const url = buildUrlWithFilterParams(checkoutRouter.base, params)
  return api.get(url).then(response => response.data)
}

export {
  getProducts
}
export type {
  GetProductsPayload
}