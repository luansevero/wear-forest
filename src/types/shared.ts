import type { ZodTypeAny } from "zod";
import type { ZodValidator } from "@tanstack/zod-form-adapter";
import type { DeepKeys, FieldApi, FormApi, ReactFormApi } from "@tanstack/react-form";
import type {
  InvalidateOptions,
  InvalidateQueryFilters,
} from "@tanstack/react-query";

export type BaseModuleT = {
  pid: number;
};

export type BaseSchemaModuleT = {
  readonly $schema: string
}

export type ZodSchemaFor<T> = {
  [K in keyof T]: ZodTypeAny;
};

export type TanstackFieldApi = FieldApi<any, any, any, any>;

export type TanstackFormApi<TFormData extends object> = FormApi<
  TFormData,
  ZodValidator
> &
  ReactFormApi<TFormData, ZodValidator>;

export type TanstackInvalidateQuery = {
  filters?: Omit<InvalidateQueryFilters, "queryKey">;
  options?: InvalidateOptions;
};

export type DataDeepKeys<T> = DeepKeys<T>