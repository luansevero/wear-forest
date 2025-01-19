import ProductCard from "@/components/cards/ProductCard";
import Grid from "@/@core/components/ui/Grid";
import React from "react";
import { ListProductOutput } from "@/types/product";
import { PaginationWithLinks } from "@/components/pagination/PaginationWithLink";
// import { useSearch } from "@tanstack/react-router";

// TODO => Add filters

type Props = {
  productList: ListProductOutput;
};

export default function StoreProductsContent({ productList }: Props) {
  // const {} = useSearch({
  //   from: "/_store",
  //   select(state) {
  //     const {} = state
  //   },
  // })

  return (
    <React.Fragment>
      <Grid
        data={productList?.items ?? []}
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
      {productList?.total_items && (
        <PaginationWithLinks
          pageSize={24}
          totalCount={productList?.total_items}
        />
      )}
    </React.Fragment>
  );
}
