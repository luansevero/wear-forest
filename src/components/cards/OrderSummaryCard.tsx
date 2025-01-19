import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/@core/components/ui/Card";
import Summary from "../_common/Summary";
import { useCartStore } from "@/stores/cartStore";
import { useCallback } from "react";
import { Button } from "@/@core/components/ui/Button";
import { Link } from "@tanstack/react-router";
import Typography from "@/@core/components/ui/Typography";
import CheckoutForm from "../forms/CheckoutForm";

const SHIP_PRICE = 25;

export default function OrderSummaryCard() {
  const { cart = {} } = useCartStore();

  const { originalPrice, savings, total } = useCallback(() => {
    let originalPrice = 0;
    let savings = 0;
    let total = 0;

    for (const product of Object.values(cart)) {
      const { retail_price, discounted_price, amount } = product;

      const oPrice = retail_price * amount;
      const dPrice = discounted_price * amount;

      originalPrice += oPrice;
      savings += oPrice - dPrice;

      total += dPrice;
    }

    return {
      originalPrice: originalPrice.toFixed(2),
      savings: savings.toFixed(2),
      total: (total + 25).toFixed(2),
    };
  }, [cart])();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order summary</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <Summary.Wrapper>
          <Summary.Label>Original price</Summary.Label>
          <Summary.Value>${originalPrice}</Summary.Value>
        </Summary.Wrapper>
        <Summary.Wrapper>
          <Summary.Label>Savings</Summary.Label>
          <Summary.Value className="text-green-500">-${savings}</Summary.Value>
        </Summary.Wrapper>
        <Summary.Wrapper>
          <Summary.Label>Shipping</Summary.Label>
          <Summary.Value>${SHIP_PRICE.toFixed(2)}</Summary.Value>
        </Summary.Wrapper>
        <Summary.Wrapper className="mt-2 border-t pt-2 font-bold">
          <Summary.Value>Total</Summary.Value>
          <Summary.Value>${total}</Summary.Value>
        </Summary.Wrapper>
      </CardContent>
      <CardFooter className="flex flex-col">
        <CheckoutForm />
      </CardFooter>
    </Card>
  );
}
