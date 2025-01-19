import { Button } from "@/@core/components/ui/Button";
import Image from "@/@core/components/ui/Image";
import Section from "@/@core/components/ui/Section";
import Typography from "@/@core/components/ui/Typography";
import { Link, useSearch } from "@tanstack/react-router";
import { FilterX } from "lucide-react";

export default function EmptyProductsSection() {
  const filters = useSearch({
    from: "/_store/",
  });

  return (
    <Section className="flex flex-col items-center justify-center text-center sm:col-span-3">
      <Image
        src="status/emptyImage.png"
        alt="EmptyImage"
        wrapperClassName="aspect-square max-w-96 p-6"
      />
      <Typography variant="h2">No products found</Typography>
      <Typography variant="h4" className="text-muted-foreground max-w-4xl">
        It looks like we couldn't find any products matching your filters. Try
        removing some filters or broadening your search to discover more
        options.
      </Typography>
      <div className="pt-6">
        {Object.values(filters)?.length > 0 && (
          <Button asChild variant={"outline"}>
            <Link to="/" search={undefined}>
              <FilterX />
              Remove filters
            </Link>
          </Button>
        )}
      </div>
    </Section>
  );
}
