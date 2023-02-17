import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse">
      <div
        style={{
          flex: "2 1 0%",
        }}
      >
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 lg:px-28 lg:py-[140px] py-[72px] bg-[#1C2121] text-white">
          <div className="col-span-3 grid sm:grid-cols-3 grid-cols-2 lg:place-items-start place-items-center gap-5">
            <span>Contact us</span>
            <span>Careers</span>
            <span>Blog</span>
            <span>Help + FAQ</span>
            <span>For stylists</span>
            <span>Privacy policy</span>
            <span>Partner program</span>
            <span>Terms of use</span>
            <span>Accessibility</span>
          </div>
          <div className="lg:col-span-1 col-span-3 justify-items-center flex justify-center align-top gap-5 lg:mt-0 mt-12">
            <Image
              src="/image/icon/footer-1.png"
              alt=""
              width={70}
              height={115}
              className="w-auto h-[115px]"
            />
            <Image
              src="/image/icon/footer-2.png"
              alt=""
              width={70}
              height={115}
              className="w-auto h-[115px]"
            />
          </div>
          <div className="lg:col-span-4 col-span-3 space-y-5 lg:text-left text-center mt-12">
            <div className="flex lg:justify-start justify-center gap-10">
              <Image
                src="/image/icon/facebook.png"
                alt="facebook"
                width={20}
                height={20}
                className="invert w-6 h-6"
              />
              <Image
                src="/image/icon/instagram.png"
                alt="instagram"
                width={20}
                height={20}
                className="invert w-6 h-6"
              />
              <Image
                src="/image/icon/pinterest.png"
                alt="pinterest"
                width={20}
                height={20}
                className="invert w-6 h-6"
              />
              <Image
                src="/image/icon/twitter.png"
                alt="twitter"
                width={20}
                height={20}
                className="invert w-6 h-6"
              />
            </div>
            <p className="text-label text-bbb">© 2023 PERSÉ BEAUTY INC</p>
            <p className="text-label text-bbb">SITE MAP</p>
            <p className="text-label text-bbb">
              DO NOT SELL MY PERSONAL INFORMATION
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 px-16 lg:py-0 py-14 bg-black flex-center flex-col gap-5">
        <p className="text-heading text-2xl text-white text-center">
          10 Years of Elite Hair Care <br /> as Unique as You
        </p>
        <button className="btn btn-white">SHOP ALL BEST SELLERS</button>
      </div>
    </div>
  );
};

export default Footer;
