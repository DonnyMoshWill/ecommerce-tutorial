import Image from "next/image";

export function CarouselLarge({
  src,
  alt,
  index,
  width = 3000,
  height = 3000,
  selected = false,
}: {
  src: string;
  alt: string;
  index: number;
  width?: number;
  height?: number;
  selected?: boolean;
}) {
  return (
    <Image
      className={`carousel-image-large absolute top-0 h-full w-auto ${
        !selected
          ? "carousel-image-hidden animate-fade-out-1"
          : "animate-fade-in-2"
      }`}
      src={src}
      alt={alt}
      width={width}
      height={height}
      key={index}
    />
  );
}
