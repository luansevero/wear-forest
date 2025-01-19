import { Button } from "@/@core/components/ui/Button";
import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";

type Props = {
  label?: string;
};

export default function RedirectToStoreButton({ label = "Back to store" }: Props) {
  return (
    <Button asChild variant={"outline"}>
      <Link to="/">
        <ShoppingBag />
        {label}
      </Link>
    </Button>
  );
}
