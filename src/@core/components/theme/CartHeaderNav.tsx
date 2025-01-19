import ToogleThemeButton from "@/components/buttons/ToggleThemeButton";
import LogoHomeButton from "@/components/buttons/LogoHomeButton";
import RedirectToStoreButton from "@/components/buttons/RedirectToStoreButton";
import { Button } from "../ui/Button";
import { Link } from "@tanstack/react-router";
import { Receipt } from "lucide-react";

export default function CartHeaderNav() {
  return (
    <header className="sticky top-0 flex border-b p-4">
      <LogoHomeButton />
      <div className="flex w-full justify-end gap-2">
        <Button className="aspect-square px-2" variant={"ghost"}>
          <Link to="/cart/order">
            <Receipt className="size-4"/>
          </Link>
        </Button>
        <ToogleThemeButton />
        <RedirectToStoreButton />
      </div>
    </header>
  );
}
