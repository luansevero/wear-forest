import Section from "@/@core/components/ui/Section";
import Typography from "@/@core/components/ui/Typography";
import OrderByDirectionSelect from "@/components/fields/select/OrderByDirection";
import ProductsOrderBySelect from "@/components/fields/select/ProductsOrderBySelect";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProductsSectionHeader() {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((progress) => {
      setIsScrolled(progress > 1);
    });
  }, [scrollYProgress]);

  return (
    <Section
      className={`sticky top-8 z-20 mt-0 backdrop-blur-lg justify-between py-4 md:top-[69px] md:flex-row w-full ${isScrolled ? "border-b shadow-md" : ""}`}
    >
      <div className=" mx-auto max-w-7xl w-full flex flex-col md:flex-row justify-between gap-2 px-4 z-30">
        <Typography variant="h4">Products</Typography>
        <div className="flex gap-2">
          <OrderByDirectionSelect />
          <ProductsOrderBySelect />
        </div>
      </div>
    </Section>
  );
}
