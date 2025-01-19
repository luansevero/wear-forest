import type { CheckoutInput, CheckoutOutput } from "@/types/checkout"
import { api } from "../axiosApi"
const controller = "/checkout"

const checkoutRouter = {
  base: controller
}

type PostCheckoutPayload = Omit<CheckoutInput, "$schema" | "EmailContact">
async function postCheckout(payload: PostCheckoutPayload): Promise<CheckoutOutput> {
  const url = checkoutRouter.base
  return api.post(url, {
    ...payload,
    EmailContact: import.meta.env.EMAIL_CONTACT
  }).then(response => response.data)
}

export {
  postCheckout
}
export type {
  PostCheckoutPayload
}