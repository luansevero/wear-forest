import Image from "@/@core/components/ui/Image";
import Section from "@/@core/components/ui/Section";
import Typography from "@/@core/components/ui/Typography";
import RedirectToStoreButton from "@/components/buttons/RedirectToStoreButton";

export default function EmptyCart() {
  return (
    <Section className="flex flex-col items-center justify-center sm:col-span-3 text-center">
      <Image
        src="status/emptyImage.png"
        alt="EmptyImage"
        wrapperClassName="aspect-square max-w-96 p-6"
      />
      <Typography variant="h2">Your cart looks empty</Typography>
      <Typography variant="h4" className="text-muted-foreground">
        Let's start filling our cart so we don't miss out on opportunities
      </Typography>
      <div className="pt-6">
        <RedirectToStoreButton label="Find products" />
      </div>
    </Section>
  );
}
