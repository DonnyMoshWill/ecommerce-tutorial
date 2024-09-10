import Image from "next/image";

export function CenteredImage({
  src,
  alt,
  width = 720,
  height = 360,
  priority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority: boolean;
}) {
  return (
    <div className="relative z-[-1] snap-always snap-center">
      <Image
        className="relative"
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
    </div>
  );
}
