import type { GetPayload } from "@/types/http";
import { UseNavigateResult } from "@tanstack/react-router";

export function buildUrlWithFilterParams<TOrderBy extends GetPayload<any>>(
  baseUrl: string,
  payload: TOrderBy,
): string {
  let url = baseUrl;

  const params = updateParamsWithPaginationFilter(payload, payload?.take ?? 1);

  Object.entries(params).forEach(([key, value], index) => {
    if (value !== undefined) {
      const separator =
        index === 0 && url.includes("?") ? "&" : url.includes("?") ? "&" : "?";
      url += `${separator}${key}=${encodeURIComponent(value as string)}`;
    }
  });

  return url;
}

export function updateParamsWithPaginationFilter(
  params: Record<string, any>,
  pageSize: number,
) {
  const { skip = 1 } = params;

  const updatedParams = { ...params };

  if (skip) {
    updatedParams.skip = (skip - 1) * pageSize;
  }

  return updatedParams;
}

export function handleSelectFilterChange(
  key: string,
  value: string,
  navigate: UseNavigateResult<string>,
) {
  navigate({
    from: "/",
    replace: true,
    search: (prev: any) => {
      if (value === "none") {
        const { [key]: _, ...remainingSearch } = prev;
        return remainingSearch;
      } else {
        return {
          ...prev,
          [key]: value,
        };
      }
    },
  });
}
