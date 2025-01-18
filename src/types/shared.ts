import { ZodTypeAny } from "zod";
import { ZodValidator } from "@tanstack/zod-form-adapter";
import type { FieldApi, FormApi, ReactFormApi } from "@tanstack/react-form";
import {
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