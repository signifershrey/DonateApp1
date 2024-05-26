import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CTASection = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl lg:p-0 md:py-8">
        <div className=" bg-yellow-500 p-8 relative md:-top-16">
          <div className=" flex justify-between lg:flex-row flex-col gap-4">
            <div className="font-semibold text-4xl  leading-normal text-start text-black lg:w-2/3">
              Join hands with us today to make a difference in the lives of
              those in need.
            </div>
            <div className="lg:py-8">
              <button className="bg-white text-black flex gap-4 px-8 py-3 font-semibold text-xl">
                <Link href="https://www.zeffy.com/en-US/donation-form/7f897d42-d3e5-4a81-890e-aa81fd32b40c">
                  <span>
                    Donate now
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTASection;
