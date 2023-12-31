import TextH1 from "-/components/ui/typography/h1";
import { cn } from "-/lib/utils";
import Image, { type StaticImageData } from "next/image";
import React from "react";

export default function WorkThumbnail({
  itemNumber,
  totalItem,
  image,
  imageAlt,
}: {
  itemNumber: number;
  totalItem: number;
  image: StaticImageData;
  imageAlt: string;
}) {
  return (
    <>
      <TextH1 className="absolute -top-5 -z-50 opacity-20 contrast-50 xs:-top-8 xs:text-6xl lg:hidden">
        {itemNumber} of {totalItem}
      </TextH1>

      <div
        className={cn(
          "absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-60 sm:w-60 md:h-64 md:w-64 lg:hidden dark:md:h-72 dark:md:w-72",
          (itemNumber + 1) % 2 === 0 ? "bg-primary" : "bg-indigo-500",
        )}
      />

      <Image
        className={cn(
          "z-10 w-full max-w-[32rem] transition-all ease-in-out hover:scale-105 lg:max-w-[28rem] lg:hover:translate-x-0 lg:hover:translate-y-0 lg:hover:rotate-0 lg:hover:skew-x-0 lg:hover:skew-y-0 lg:hover:scale-100 xl:max-w-[32rem]",
          (itemNumber + 1) % 2 === 0
            ? "lg:-translate-x-2 lg:translate-y-1 lg:-rotate-2 lg:-skew-x-2 lg:-skew-y-2 lg:drop-shadow-subtleGlowPrimary"
            : "lg:-translate-y-1 lg:translate-x-2 lg:rotate-2 lg:skew-x-2 lg:skew-y-2 lg:drop-shadow-subtleGlowIndigo",
        )}
        src={image}
        alt={imageAlt}
      />
    </>
  );
}
