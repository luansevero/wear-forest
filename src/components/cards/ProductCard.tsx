import { Badge } from "@/@core/components/ui/Badge";
import { Button } from "@/@core/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/@core/components/ui/Card";
import Image from "@/@core/components/ui/Image";
import { CommentRatings } from "@/@core/components/ui/Rating";
import Typography from "@/@core/components/ui/Typography";
import { Product } from "@/types/product";
import { cn } from "@/utils/cn";
import { calculateDiscount } from "@/utils/price";
import { useMemo } from "react";
import { AddToWhishlistButton } from "../buttons/AddToWhishlist";
import ProductDetailsDrawer from "../drawers/ProductDetailsDrawer";

type ProductCardProps = Product;

export default function ProductCard(product: ProductCardProps) {
  const {
    product_name,
    retail_price,
    discounted_price,
    product_rating,
    images,
  } = product;

  const discount = useMemo(
    () => calculateDiscount(retail_price, discounted_price),
    [retail_price, discounted_price],
  );

  const price = "$" + String(retail_price.toFixed(2));
  const actualPrice = "$" + String(discounted_price.toFixed(2));

  const image = images?.[0];

  return (
    <ProductDetailsDrawer product={product} discount={discount}>
      <Card className="hover:bg-accent/70 cursor-pointer border transition-colors flex flex-col">
        <CardHeader className="relative p-0">
          <Image
            src={image ?? "/status/emptyImage.png"}
            alt={"product_main_image"}
            wrapperClassName={cn(
              "aspect-[4/3] rounded-t-xl",
              !image && "bg-white",
            )}
          />
        </CardHeader>
        <CardContent className="flex flex-col gap-2 pb-2 pt-4 h-full">
          <div className="-mt-2 flex items-center justify-between ">
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
              rating={product_rating}
              size={14}
              disabled
              className="ms-auto"
            />
          </div>
          <Typography variant="h4">{product_name}</Typography>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex flex-col justify-between">
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
        </CardContent>
        <CardFooter className="w-full justify-between gap-4 border-t pt-4">
          <AddToWhishlistButton />
          <Button variant={"default"} className="w-full">
            + Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </ProductDetailsDrawer>
  );
}
