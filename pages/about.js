import HeroSection from "@/components/HeroSection";
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
    </>
  );
};

export default About;
