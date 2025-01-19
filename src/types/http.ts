import type { DataDeepKeys } from "./shared"

export type OrderDirection = "asc" | "desc"

export type GetPayload<TOrderBy extends object> = {
  order_by?: DataDeepKeys<TOrderBy>
  order_by_direction?: OrderDirection
  query?: string
  skip?: number
  take?: number
}