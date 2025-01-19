import Section from "@/@core/components/ui/Section";
import Typography from "@/@core/components/ui/Typography";
import OrderByDirectionSelect from "@/components/fields/select/OrderByDirection";
import ProductsOrderBySelect from "@/components/fields/select/ProductsOrderBySelect";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import ProductSearchField from "@/components/fields/search/ProductSearchField";

export default function ProductsSectionHeader() {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((progress) => {
      setIsScrolled(progress > 0);
    });
  }, [scrollYProgress]);

  return (
    <Section
      className={`bg-background sticky top-8 z-20 mt-0 w-full justify-between py-4 md:top-[69px] md:flex-row ${isScrolled ? "border-b shadow-md" : ""}`}
    >
      <div className=" z-30 mx-auto flex w-full max-w-7xl flex-col justify-between gap-2 px-4 md:flex-row">
        <div className="md:flex-1">
          <Typography variant="h4">Products</Typography>
        </div>
        <div className="md:flex-1">
          <ProductSearchField />
        </div>
        <div className="flex md:flex-1 gap-2 justify-end">
          <OrderByDirectionSelect />
          <ProductsOrderBySelect />
        </div>
      </div>
    </Section>
  );
}
