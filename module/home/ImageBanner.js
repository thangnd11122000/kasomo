import Image from "next/image";
import React from "react";

const ImageBanner = () => {
  return (
    <div className="relative w-full h-fit">
      <Image
        src="/image/banner/6.jpg"
        alt="Kasomo banner"
        width={1900}
        height={355}
        className="w-full h-[355px]"
      />
      <div className="absolute inset-0 flex-center">
        <h3 className="text-heading lg:text-4xl text-2xl">
          Luxury comes in one size. Yours.
        </h3>
      </div>
    </div>
  );
};

export default ImageBanner;
