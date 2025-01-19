import SelectField from ".";
import { SelectItem } from "@/@core/components/ui/Select";
import { ArrowDownUp } from "lucide-react";
import orderDirection from "@/constants/order_by/direction";

export default function OrderByDirectionSelect() {
  return (
    <SelectField
      triggerProps={{
        className: "md:w-fit"
      }}
      defaultValue="none"
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
      icon={<ArrowDownUp size={16} 
      />}
    />
  );
}
