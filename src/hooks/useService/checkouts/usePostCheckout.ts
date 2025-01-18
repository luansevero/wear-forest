import { postCheckout, type PostCheckoutPayload } from "@/services/checkout/service";
import type { CheckoutOutput } from "@/types/checkout";
import { type UseMutationOptions } from "@tanstack/react-query";

type MutationType = UseMutationOptions<CheckoutOutput, Error, PostCheckoutPayload>;

interface Props extends Omit<MutationType, "mutationFn" | "retry"> {}

export default function usePostCheckoutQueryOptions({
  ...options
}: Partial<Props> = {}): MutationType {
  return {
    mutationFn: (payload: PostCheckoutPayload) => postCheckout(payload),
    ...options,
  };
}
