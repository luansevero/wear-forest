import ToogleThemeButton from "@/components/buttons/ToggleThemeButton";
import LogoHomeButton from "@/components/buttons/LogoHomeButton";
import RedirectToCartButton from "@/components/buttons/RedirectToCartButton";

export default function StoreHeaderNav() {
  return (
    <header className="sticky z-40 top-0 left-0 right-0 flex border-b p-4 bg-background">
      <LogoHomeButton />
      <div className="flex justify-end w-full gap-2">
        <ToogleThemeButton />
        <RedirectToCartButton />
      </div>
    </header>
  );
}
