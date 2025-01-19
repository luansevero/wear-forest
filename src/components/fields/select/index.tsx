import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/@core/components/ui/Select";
import { SelectTriggerProps } from "@radix-ui/react-select";

type SelectOption = string | number | object;

type SelectProps<T extends SelectOption> = {
  options: T[] | undefined;
  value?: string;
  placeholder?: string;
  Content: (option: T) => JSX.Element;
  icon?: JSX.Element; // Novo ícone opcional
  triggerProps?: SelectTriggerProps;
  onValueChange?: (value: string) => void;
};

export default function SelectField<T extends SelectOption>({
  options,
  Content,
  value,
  placeholder,
  icon,
  triggerProps,
  onValueChange = () => {},
}: SelectProps<T>) {
  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger {...triggerProps}>
        <div className="flex w-full items-center gap-2 overflow-hidden truncate">
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <div className="truncate">
            <SelectValue placeholder={placeholder} />
          </div>
        </div>
      </SelectTrigger>
      <SelectContent>{options?.map((option) => Content(option))}</SelectContent>
    </Select>
  );
}
