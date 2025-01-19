import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/@core/components/ui/Card";
import { AddToWhishlistButton } from "../buttons/AddToWhishlist";
import { RemoveProductCard } from "../buttons/RemoveProductButton";
import { StoreCartItem } from "@/stores/cartStore";
import Image from "@/@core/components/ui/Image";
import Typography from "@/@core/components/ui/Typography";
import CartAmountController from "../forms/CartAmountController";

type Props = StoreCartItem;
export default function ProductOrderCard({
  pid,
  product_name,
  image,
  discounted_price,
  amount,
}: Props) {
  return (
    <Card className="flex flex-col sm:flex-row">
      <CardHeader className="w-full max-w-32 pb-2 sm:pb-4">
        <Image
          src={image}
          alt="product_image"
          wrapperClassName={"aspect-square rounded-xl border bg-white"}
        />
      </CardHeader>
      <div className="flex w-full flex-col sm:flex-row-reverse">
        <div className="flex flex-row-reverse justify-between px-4 sm:px-0">
          <CardContent className="flex flex-shrink-0 items-center justify-center p-0 sm:p-4">
            <Typography variant="large">
              $ {String((discounted_price * amount).toFixed(2))}
            </Typography>
          </CardContent>
          <CardContent className="flex flex-shrink-0 items-center justify-center p-0 max-w-24 w-full sm:w-auto sm:p-4">
            <CartAmountController
              amount={amount}
              pid={pid}
              product_name={product_name}
            />
          </CardContent>
        </div>
        <CardFooter className="flex w-full flex-col items-start justify-center gap-2 p-4">
          <CardTitle className="my-auto text-sm line-clamp-3">{product_name}</CardTitle>
          <div className="flex items-center gap-2">
            <AddToWhishlistButton />
            <RemoveProductCard pid={pid} product_name={product_name} />
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
