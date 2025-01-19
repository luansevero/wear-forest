import productsOrderBy from "@/constants/order_by/productsOrderby";
import SelectField from ".";
import { SelectItem } from "@/@core/components/ui/Select";
import { ArrowUpZA } from "lucide-react";

export default function ProductsOrderBySelect() {
  return (
    <SelectField
      triggerProps={{
        className: "md:w-fit",
      }}
      defaultValue="none"
      options={["none", ...productsOrderBy.ids]}
      Content={(order_by) => {
        if (order_by === "none") {
          return (
            <SelectItem customItemText="" value={"none"}>
              Order by
            </SelectItem>
          );
        }
        const option = productsOrderBy.entities[order_by];

        return <SelectItem value={option.id}>{option.label}</SelectItem>;
      }}
      icon={<ArrowUpZA size={16} />}
    />
  );
}
