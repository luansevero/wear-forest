import {
  type QueryClient,
  type UseQueryOptions,
} from "@tanstack/react-query";
import type { ListProductOutput } from "@/types/product";
import { getProducts, type GetProductsPayload } from "@/services/products/service";
import type { TanstackInvalidateQuery } from "@/types/shared";

type QueryOptions<TReturn extends object = ListProductOutput> = UseQueryOptions<
  ListProductOutput,
  Error,
  TReturn
>;

interface Props<TReturn extends object = ListProductOutput>
  extends Omit<
    QueryOptions<TReturn>,
    "queryKey" | "queryFn" | "retry" | "enabled"
  > {
  params?: GetProductsPayload,
  isEnabled?: boolean;
}

export default function useGetProductsQueryOptions<
  TReturn extends object = ListProductOutput,
>({
  params = {},
  isEnabled = true,
  ...options
}: Props<TReturn>): QueryOptions<TReturn> {
  return {
    queryKey: ["products", params],
    queryFn: () =>
      getProducts(params),
    enabled: isEnabled,
    refetchOnMount: "always",
    ...options,
  };
}

export async function useInvalidateChallengeCache(
  queryClient: QueryClient,
  params: GetProductsPayload,
  { filters, options }: TanstackInvalidateQuery = {}
) {
  const queryKey = useGetProductsQueryOptions({
    params
  }).queryKey;

  queryClient.invalidateQueries(
    {
      queryKey,
      ...filters,
    },
    options
  );
}
