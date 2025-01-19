import ToogleThemeButton from "@/components/buttons/ToggleThemeButton";
import LogoHomeButton from "@/components/buttons/LogoHomeButton";
import RedirectToStoreButton from "@/components/buttons/RedirectToStoreButton";

export default function CartHeaderNav() {
  return (
    <header className="sticky top-0 flex border-b p-4">
      <LogoHomeButton />
      <div className="flex w-full justify-end gap-2">
        <ToogleThemeButton />
        <RedirectToStoreButton />
      </div>
    </header>
  );
}
