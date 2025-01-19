import { create } from "zustand";
import { CartItem, CheckoutOutput } from "@/types/checkout";
import { persist } from "zustand/middleware";
import { Product } from "@/types/product";

export type StoreCartItem = CartItem &
  Pick<Product, "retail_price" | "discounted_price"> & {
    image: string;
  };

export type CartStore = {
  cart?: Record<string, StoreCartItem>;
  lastOrderNumber?: string;
  setOrderNumber: (order_number: CheckoutOutput["order_number"]) => void;
  reduceAmountOfProduct: (pid: CartItem["pid"]) => void;
  increaseAmountOfProduct: (pid: CartItem["pid"]) => void;
  addToCart: (product: StoreCartItem) => void;
  removeFromCart: (pid: CartItem["pid"]) => void;
  clearCart: () => void;
};

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      addToCart(product) {
        const { cart } = get();
        const existingProduct = cart?.[product.pid];

        set({
          cart: {
            ...cart,
            [product.pid]: existingProduct
              ? {
                  ...existingProduct,
                  amount: existingProduct.amount + product.amount,
                }
              : product,
          },
        });
      },
      reduceAmountOfProduct: (pid) => {
        const { cart } = get();
        const existingProduct = cart?.[pid];

        if (!existingProduct) return;

        if (existingProduct.amount > 1) {
          set({
            cart: {
              ...cart,
              [pid]: {
                ...existingProduct,
                amount: existingProduct.amount - 1,
              },
            },
          });
        } else {
          const { [pid]: _, ...remainingCart } = cart;
          set({ cart: remainingCart });
        }
      },
      increaseAmountOfProduct(pid) {
        const { cart } = get();
        const existingProduct = cart?.[pid];

        if (!existingProduct) return;

        set({
          cart: {
            ...cart,
            [pid]: {
              ...existingProduct,
              amount: existingProduct.amount + 1,
            },
          },
        });
      },
      removeFromCart(pid) {
        const { cart } = get();
        if (cart?.[pid]) {
          const { [pid]: _, ...remainingCart } = cart;
          set({ cart: remainingCart });
        }
      },
      clearCart() {
        set({ cart: undefined, lastOrderNumber: undefined });
      },
      setOrderNumber(order_number) {
        set({ lastOrderNumber: order_number });
      },
    }),
    {
      name: "wear-forest-cart",
    },
  ),
);
