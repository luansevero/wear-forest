import { BaseModuleT } from "./shared"

export type ErrorDetail = {
  location: string
  message: string
  value: unknown
}

export type ApiErrorResponse = BaseModuleT & {
  detail: string
  errors: Array<ErrorDetail> | null
  instance: string
  status: number
  title: string
  type: string
}