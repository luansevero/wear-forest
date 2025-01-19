import SelectField from ".";
import { SelectItem } from "@/@core/components/ui/Select";
import { ArrowDownUp } from "lucide-react";
import orderDirection from "@/constants/order_by/direction";
import { handleSelectFilterChange } from "@/utils/filters";
import { useNavigate, useSearch } from "@tanstack/react-router";

export default function OrderByDirectionSelect() {
  const navigate = useNavigate();
  const value = useSearch({
    from: "/_store/",
    select(state) {
      return state?.order_by_direction ?? "none";
    },
  });

  return (
    <SelectField
      triggerProps={{
        className: "md:w-fit",
      }}
      value={value}
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

        return <SelectItem value={option.id}>{option.label}</SelectItem>;
      }}
      icon={<ArrowDownUp size={16} />}
      onValueChange={(value) =>
        handleSelectFilterChange("order_by_direction", value, navigate)
      }
    />
  );
}
