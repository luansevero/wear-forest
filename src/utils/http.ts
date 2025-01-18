import type { GetPayload } from "@/types/http";

export function buildUrlWithParams<TOrderBy extends GetPayload<any>>(
  baseUrl: string,
  payload: TOrderBy
): string {
  let url = baseUrl;

  Object.entries(payload).forEach(([key, value], index) => {
    if (value !== undefined) {
      const separator = index === 0 && url.includes('?') ? '&' : (url.includes('?') ? '&' : '?');
      url += `${separator}${key}=${encodeURIComponent(value as string)}`;
    }
  });

  return url;
}
