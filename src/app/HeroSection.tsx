import React from "react";
import HeroImage from "@/assets/HeroImage2.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex md:flex-row-reverse  md:py-20 py-4 px-4 md:px-0 md:pl-6 flex-col-reverse">
      <div className="w-full p-2 md:p-0 ">
        <Image src={HeroImage} alt="hero" className="w-full md:pl-20" />
      </div>
      {/*  */}
      <div className="">
        <div className=" md:pl-20 md:py-32 md:pr-4">
          <p className="space-y-4 leading-tight font-bold text-6xl ">
            Supporting Children and Doctors in Gaza
            <span className="underline underline-offset-1 decoration-8 decoration-yellow-500 ">
            </span>
          </p>
          <button className="flex gap-6 bg-yellow-500 px-6 py-2 text-black font-semibold">
            Support Them Now
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
