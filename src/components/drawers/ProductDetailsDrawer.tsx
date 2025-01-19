import * as React from "react";
import { ShoppingCart } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/@core/components/ui/Drawer";
import { Product } from "@/types/product";
import AddProductToCartForm from "../forms/AddProductToCartForm";
import ProductImagesGallery from "../layout/ProductImagesGallery";
import { AddToWhishlistButton } from "../buttons/AddToWhishlist";
import { Badge } from "@/@core/components/ui/Badge";
import { CommentRatings } from "@/@core/components/ui/Rating";
import Typography from "@/@core/components/ui/Typography";
import { useCartStore } from "@/stores/cartStore";

type Props = {
  product: Product;
  discount: number;
  children: React.ReactNode;
};

export default function ProductDetailsDrawer({
  children,
  product,
  discount,
}: Props) {
  const { cart = {} } = useCartStore();
  const price = "$" + String(product.retail_price.toFixed(2));
  const actualPrice = "$" + String(product.discounted_price.toFixed(2));

  const productAtCart = cart?.[product.pid];

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md items-center">
          <DrawerHeader className="flex justify-center gap-4">
            <ProductImagesGallery images={product.images} />
          </DrawerHeader>
          <div className="flex flex-col justify-between p-4 pt-0">
            <div className="flex flex-col gap-2">
              <DrawerTitle className="line-clamp-2 text-start">
                {product.product_name}
              </DrawerTitle>
              <DrawerDescription>{product?.description}</DrawerDescription>

              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-between text-start">
                  <Typography
                    variant="muted"
                    className="text-primary/40 text-xs line-through"
                  >
                    {price}
                  </Typography>
                  <Typography
                    variant="large"
                    className="text-primary -mt-1.5 text-3xl font-bold"
                  >
                    {actualPrice}
                  </Typography>
                </div>
                <Badge shape={"pill"} className="px-2">
                  In Stock
                </Badge>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center justify-end gap-1">
              <AddToWhishlistButton className="h-6 w-6 px-0" />
              {discount > 0 && (
                <Badge
                  shape={"pill"}
                  className="w-fit px-2"
                  variant={"secondary"}
                >
                  Up to {discount}% off
                </Badge>
              )}
              <CommentRatings
                variant="yellow"
                rating={product.product_rating}
                size={14}
                disabled
              />
            </div>
          </div>
          <DrawerFooter className="sticky bottom-0 border-t">
            {productAtCart && (
              <div className="text-muted-foreground flex items-center justify-end gap-2">
                <ShoppingCart className="size-3" />
                <Typography variant="muted">
                  On cart: {productAtCart.amount}
                </Typography>
              </div>
            )}
            <AddProductToCartForm
              pid={product.pid}
              product_name={product.product_name}
              discounted_price={product.discounted_price}
              image={product.images?.[0] ?? "status/emptyImage.png"}
              retail_price={product.retail_price}
            />
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
