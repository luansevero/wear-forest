import SearchInput from "@/@core/components/ui/SearchInput";
import useDebounce from "@/hooks/useDebounce";
import { handleSearchFilterChange } from "@/utils/filters";
import { useNavigate, useSearch } from "@tanstack/react-router";

export default function ProductSearchField() {
  const key = "query";
  const navigate = useNavigate();

  const query = useSearch({
    from: "/_store/",
    select(state) {
      return state?.query ?? ""
    },
  })

  const [debouncedSearch] = useDebounce((value: string) => {
    handleSearchFilterChange(key, value, navigate);
  }, 500, []);

  return (
    <SearchInput
      name={key}
      onChange={(e) => {
        debouncedSearch(e.currentTarget.value)
      }}
      defaultValue={query}
    />
  );
}
