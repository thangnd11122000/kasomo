import HeroSection from "@/components/HeroSection";
import ImageSection from "@/components/ImageSection";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <HeroSection
        image={"/image/banner/10.png"}
        placement="right"
        content={
          <div className="w-full h-full flex justify-center lg:items-center items-start lg:px-6 sm:p-16 pt-16 px-6">
            <div className="w-full sm:w-[500px] flex-center flex-col gap-9">
              <h3 className="text-heading text-center">
                You’re a queen, your hair is your crown
              </h3>
            </div>
          </div>
        }
      />
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-heading text-5xl">A new standard in beauty</h3>
        <div>
          <svg
            height="100"
            viewBox="0 0 8 100"
            width="8"
            xmlns="http://www.w3.org/2000/svg"
            class="css-hx1s1z-I-path css-27-I-inView-ref"
          >
            <path
              d="m1 100c0-3.845 6-3.845 6-7.69s-6-3.845-6-7.691c0-3.845 6-3.845 6-7.69 0-3.847-6-3.847-6-7.693 0-3.843 6-3.843 6-7.687 0-3.845-6-3.845-6-7.691 0-3.845 6-3.845 6-7.69 0-3.846-6-3.846-6-7.69 0-3.847 6-3.847 6-7.694s-6-3.847-6-7.695c0-3.846 6-3.846 6-7.693 0-3.849-6-3.849-6-7.698s6-3.849 6-7.698"
              fill="none"
              stroke="#daa855"
              stroke-width="2"
            ></path>
          </svg>
        </div>
        <p>
          <span className="font-bold">
            Mass haircare is designed for “the masses”
          </span>{" "}
          with a few narrow products intended for as many people as possible.
          Your results may vary, but your options stay the same.
        </p>
        <p>
          <span className="font-bold">
            We believe everyone deserves extraordinary care
          </span>{" "}
          and that making things custom is the only way to give everyone their
          best individual results.
        </p>
      </div>
      <ImageSection
        placement="right"
        content={
          <>
            <h3 className="text-heading mb-5">
              Start with our innovative consultation
            </h3>
            <p className="text-primary leading-6">
              Over 80 factors are synthesized to create your custom formula. We
              start with micro details like hair thickness, condition, and
              texture, then move to the macro: the weather in your ZIP code,
              your workout routine, stress level, diet, and more. If you’re
              vegan or gluten-free, your KASOMO can be, too.
            </p>
            <br />
            <br />
            <p className="text-primary leading-6">
              By learning about your hair in its true context, we can give you
              products that fit—and work—better than anything before.
            </p>
            <div className="mt-10 md:mt-14">
              <button className="btn btn-primary-outline w-fit">
                SHOP ALL BEST SELLERS
              </button>
            </div>
          </>
        }
        image={
          <Image
            src="/image/carousel/6.jpg"
            alt="KASOMO"
            width={1440}
            height={1440}
            className="block w-full h-full object-cover object-center"
          />
        }
      />
      <ImageSection
        placement="left"
        content={
          <div className="lg:space-y-14 space-y-10">
            <h3 className="mb-5 text-3xl text-heading">
              What goes into your KASOMO is just as good as what you get out of
              it.
            </h3>
            <div>
              <span className="text-label">CERTIFIED CLEAN INGREDIENTS</span>
              <p className="mt-2 text-primary leading-6">
                Free of sulfates, parabens, phlathates check our green and safe
                ingredients here.
              </p>
            </div>
            <div>
              <span className="text-label">SUSTAINABLY SOURCED</span>
              <p className="mt-2 text-primary leading-6">
                We source the best ingredients gathered in the most ethical way.
                When we find better ways forward, we take them.
              </p>
            </div>
            <div>
              <span className="text-label">CONSCIOUS IMPACT</span>
              <p className="mt-2 text-primary leading-6">
                As a B Corp-certified company, we keep our impact on your hair,
                not the planet. We are the first and only carbon-neutral custom
                beauty brand.
              </p>
            </div>
          </div>
        }
        image={
          <Image
            src="/image/carousel/6.jpg"
            alt="KASOMO"
            width={1440}
            height={1440}
            className="block w-full h-full object-cover object-center"
          />
        }
      />
      <ImageSection
        placement="right"
        content={
          <div className="lg:space-y-14 space-y-10">
            <h3 className="mb-5 text-3xl text-heading">
              What goes into your KASOMO is just as good as what you get out of
              it.
            </h3>
            <div>
              <span className="text-label">CERTIFIED CLEAN INGREDIENTS</span>
              <p className="mt-2 text-primary leading-6">
                Free of sulfates, parabens, phlathates check our green and safe
                ingredients here.
              </p>
            </div>
            <div>
              <span className="text-label">SUSTAINABLY SOURCED</span>
              <p className="mt-2 text-primary leading-6">
                We source the best ingredients gathered in the most ethical way.
                When we find better ways forward, we take them.
              </p>
            </div>
            <div>
              <span className="text-label">CONSCIOUS IMPACT</span>
              <p className="mt-2 text-primary leading-6">
                As a B Corp-certified company, we keep our impact on your hair,
                not the planet. We are the first and only carbon-neutral custom
                beauty brand.
              </p>
            </div>
          </div>
        }
        image={
          <Image
            src="/image/carousel/6.jpg"
            alt="KASOMO"
            width={1440}
            height={1440}
            className="block w-full h-full object-cover object-center"
          />
        }
      />
    </>
  );
};

export default About;
