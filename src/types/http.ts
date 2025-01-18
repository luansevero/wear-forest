import type { DataDeepKeys } from "./shared"

export type GetOrderDirection = "asc" | "desc"

export type GetPayload<TOrderBy extends object> = {
  order_by?: DataDeepKeys<TOrderBy>
  order_by_direction?: GetOrderDirection
  query?: string
  skip?: number
  take?: number
}