import productsOrderBy from "@/constants/order_by/productsOrderby";
import SelectField from ".";
import { SelectItem } from "@/@core/components/ui/Select";
import { ArrowUpZA } from "lucide-react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { handleSelectFilterChange } from "@/utils/filters";

export default function ProductsOrderBySelect() {
  const navigate = useNavigate();
  const value = useSearch({
    from: "/_store/",
    select(state) {
      return state?.order_by ?? "none";
    },
  });
  
  return (
    <SelectField
      triggerProps={{
        className: "md:w-fit",
      }}
      value={value}
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
      onValueChange={(value) =>
        handleSelectFilterChange("order_by", value, navigate)
      }
    />
  );
}
