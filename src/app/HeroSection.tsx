import React from "react";
import HeroImage from "@/assets/HeroImage2.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "./container";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <Container>
        <div className="flex md:flex-row-reverse  md:py-20 py-4 px-4 md:px-0 md:pl-6 flex-col-reverse justify-center">
          <div className=" md:p-0 w-full flex justify-center md:h-[70vh] h-[50vh] ">
            <Image src={HeroImage} alt="hero" className="md:ml-20 w-full rounded-lg" />
          </div>
          <div className=" md:pl-20 md:py-32 md:pr-4">
            <p className="space-y-4 leading-tight font-bold text-2xl md:text-4xl lg:text-6xl">
              Supporting Families and<span className="text-[#FFBB00] px-1">Children </span>
              with Doctors With Hope
            </p>
            <p className="py-2">
              Join us in making a difference by donating to support families in Gaza.
            </p>
            <div className="pb-2">
              <Link href="/campaign1">
                <div className="bg-yellow-500 text-black flex  px-4 py-2 font-semibold items-center md:w-1/4 w-1/2">
                  <span>Read More</span>
                  <span className="flex justify-center">
                    <ArrowRight />
                  </span>
                </div>
              </Link>
            </div>
            {/* <button>
              <a
                href="#goals"
                className="flex my-2 bg-yellow-500 px-6 py-2 text-black font-semibold"
              >
                Support Them Now
                <ArrowRight />
              </a>
            </button> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
