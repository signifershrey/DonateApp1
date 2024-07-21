import React from "react";
import HeroImage from "@/assets/HeroImage2.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "./container";

const HeroSection = () => {
  return (
    <>
      <Container>
        <div className="flex md:flex-row-reverse  md:py-20 py-4 px-4 md:px-0 md:pl-6 flex-col-reverse justify-center">
          <div className=" md:p-0 w-full flex justify-center ">
            <Image src={HeroImage} alt="hero" className="md:pl-20 w-full" />
          </div>
          <div className=" md:pl-20 md:py-32 md:pr-4">
            <p className="space-y-4 leading-tight font-bold text-2xl md:text-4xl lg:text-6xl">
              Supporting <span className="text-[#FFBB00] px-1">Children </span>
              and Doctors in Gaza
            </p>
            <p className="py-2">
              Join us in making a difference through our donation campaigns.
            </p>
            <button>
              <a
                href="#goals"
                className="flex my-2 bg-yellow-500 px-6 py-2 text-black font-semibold"
              >
                Support Them Now
                <ArrowRight />
              </a>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
