import { GetPayload } from "@/types/http";
import { Product } from "@/types/product";
import { useForm } from "@tanstack/react-form";
import SelectField from "../fields/select";
import orderDirection from "@/constants/order_by/direction";
import { SelectItem } from "@/@core/components/ui/Select";
import { ArrowDownUp } from "lucide-react";

type Filters = Pick<GetPayload<Product>, "order_by" | "order_by_direction">;
type FormPayload = {
  [K in keyof Filters]: Filters[K] | "none";
};

export default function ProductsFiltersForm() {
  // const { order_by, order_by_direction } = useSearch({
  //   from: "/_store/",
  //   select(state) {
  //     return {
  //       order_by: "none",
  //       order_by_direction: "none",
  //     };
  //   },
  // });

  const form = useForm<FormPayload>({
    defaultValues: {
      order_by: "none",
      order_by_direction: "none",
    },
  });

  return (
    <form>
      <form.Field
        name="order_by"
        children={(field) => {
          return (
            <SelectField
              triggerProps={{
                className: "md:w-fit",
              }}
              defaultValue={field.state.value}
              options={["none", ...orderDirection.ids]}
              Content={(order_by) => {
                if (order_by === "none") {
                  return (
                    <SelectItem customItemText="" value={"none"}>
                      Sort
                    </SelectItem>
                  );
                }
                const option = orderDirection.entities[order_by];

                return (
                  <SelectItem value={option.id}>{option.label}</SelectItem>
                );
              }}
              icon={<ArrowDownUp size={16} />}
            />
          );
        }}
      />
    </form>
  );
}
