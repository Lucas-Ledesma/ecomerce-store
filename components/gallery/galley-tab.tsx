import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/type";
import { Tab } from "@headlessui/react";
import Image from "next/image";

type GalleryTabPorps = {
  image: ImageType;
};

const GalleryTab: React.FC<GalleryTabPorps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square items-center justify-center rounded-md cursor-pointer bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black " : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
