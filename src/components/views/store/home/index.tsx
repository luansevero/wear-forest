import Typography from "@/@core/components/ui/Typography";
import ProductCard from "@/components/cards/ProductCard";
import OrderByDirectionSelect from "@/components/fields/select/OrderByDirection";
import ProductsOrderBySelect from "@/components/fields/select/ProductsOrderBySelect";
import Grid from "@/@core/components/ui/Grid";
import Section from "@/@core/components/ui/Section";
import { useScroll } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import useGetProductsQueryOptions from "@/hooks/useService/products/useGetProducts";
import EmptyProductsSection from "../EmptyProductsSection";
// import { useSearch } from "@tanstack/react-router";

export default function StoreHomePage() {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // const {} = useSearch({
  //   from: "/_store",
  //   select(state) {
  //     const {} = state
  //   },
  // })

  const { data } = useQuery(
    useGetProductsQueryOptions({
      params: {},
    }),
  );

  const haveProducts = (data?.items?.length ?? 0) > 0;

  useEffect(() => {
    return scrollYProgress.onChange((progress) => {
      setIsScrolled(progress > 1);
    });
  }, [scrollYProgress]);
  return (
    <React.Fragment>
      <main className="relative pb-6">
        <Section
          className={`sticky top-8 z-20 mt-0 justify-between py-4 backdrop-blur-lg md:top-[69px] md:flex-row ${isScrolled ? "border-b shadow-md" : ""}`}
        >
          <Typography variant="h4">Products</Typography>
          <div className="flex gap-2">
            <OrderByDirectionSelect />
            <ProductsOrderBySelect />
          </div>
        </Section>
        <Section className="mt-4">
          {haveProducts && (
            <Grid
              data={data?.items ?? []}
              className="gap-4 px-0"
              children={(product) => (
                <ProductCard
                  {...{
                    // pid: "1234567891234567",
                    // product_name: "109f Checkered Women's Regular Skirt",
                    // product_category_tree: [
                    //   "Clothing",
                    //   "Women's Clothing",
                    //   "Western Wear",
                    //   "Dresses & Skirts",
                    //   "Skirts",
                    //   "109f Skirts",
                    // ],
                    // retail_price: 14.99,
                    // discounted_price: 7.5,
                    // product_rating: 1.2,
                    // images: [
                    //   "https://www.lockhatters.com/cdn/shop/files/fairbanks-brown_trilby_1515x.jpg?v=1734429183",
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNB2YaCz-9UC0dqWETAh5yagRmJJlbyH-Aw&s",
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLSC81SyeJua9stbtg7GSGEMQH0DXPaOuczbWiN9oC9CENUrbiu5E35S6umwMG3GvUbk&usqp=CAU",
                    // ],
                    ...product,
                  }}
                />
              )}
            />
          )}
          {!haveProducts && <EmptyProductsSection />}
        </Section>
      </main>
    </React.Fragment>
  );
}
