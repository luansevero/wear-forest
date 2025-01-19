import Image from "@/@core/components/ui/Image";
import { Link } from "@tanstack/react-router";

export default function LogoHomeButton() {
  return (
    <Link to="/" className="max-w-24 w-full">
      <Image
        src="wearForest.png"
        alt="logo"
        wrapperClassName="aspect-[16/4] w-full h-full"
      />
    </Link>
  );
}
