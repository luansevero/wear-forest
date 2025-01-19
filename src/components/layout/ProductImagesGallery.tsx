import Image from "@/@core/components/ui/Image";
import { Product } from "@/types/product";
import { cn } from "@/utils/cn";
import { Card, CardContent } from "@/@core/components/ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/@core/components/ui/Carousel";

type Props = Pick<Product, "images">;

export default function ProductImagesGallery({ images }: Props) {
  return <MainImage src={images?.[0]} />

  const galleryLength = images?.length ?? 0;
  if (galleryLength === 0 || galleryLength === 1) {
    return <MainImage src={images?.[0]} />;
  }

  return <></>;
}

type MainImageProps = {
  src?: string;
};
function MainImage({ src }: MainImageProps) {
  return (
    <Image
      src={src ?? "/status/emptyImage.png"}
      alt="product_image"
      wrapperClassName={cn(
        "aspect-square max-w-[240px] rounded-xl border",
        !src && "bg-white",
      )}
    />
  );
}

export function Gallery() {
  return (
    <Carousel
      opts={{
        duration: 200,
        loop: true
      }}
    className="w-fit mx-12">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="max-w-40">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
