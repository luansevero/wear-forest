import type { GetPayload } from "@/types/http";

export function buildUrlWithParams<TOrderBy extends GetPayload<any>>(
  baseUrl: string,
  payload: TOrderBy
): string {
  let url = baseUrl;

  const params = updateParamsWithPagination(payload, payload?.take ?? 1)

  Object.entries(params).forEach(([key, value], index) => {
    if (value !== undefined) {
      const separator = index === 0 && url.includes('?') ? '&' : (url.includes('?') ? '&' : '?');
      url += `${separator}${key}=${encodeURIComponent(value as string)}`;
    }
  });

  return url;
}

export function updateParamsWithPagination(params: Record<string, any>, pageSize: number) {
  const { skip = 1 } = params;
  
  const updatedParams = { ...params };

  if (skip) {
    updatedParams.skip = (skip - 1) * pageSize;
  }

  return updatedParams;
}