import React from "react";
import DoctorImage from "@/assets/DoctorImage.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export const Card1 = () => {
    return (
      <div className="bg-white p-10">
        <Image src={DoctorImage} alt="image1" className="md:w-[35rem]" />

        <h1 className="text-black  text-4xl pt-8 pb-6 font-bold ">
          Aid for Gaza&apos;s Underpaid but Dedicated Doctors.
        </h1>

        <div className="flex items-center gap-10">
          <div className="flex gap-1">
            <button className="bg-yellow-500 text-black flex gap-1 px-4 py-2 font-semibold">
              <Link href="https://www.zeffy.com/en-US/donation-form/7f897d42-d3e5-4a81-890e-aa81fd32b40c" >
              Donate Now <ArrowRight />
              </Link>
            </button>
          </div>
          <p className="text-6xl w-2 text-gray-300"> | </p>
          <div className=" flex flex-col pt-4 items-start text-start">
            <p className="text-[#0B8D00] text-3xl font-semibold">$100,257</p>
            <p className="text-gray-700 leading-7 text-md">
              Donation received Till Date
            </p>
          </div>
        </div>
      </div>
    );
}


const OurGoalsSection = () => {
    return (
        <>
        <div className="">  
            <div className="md:px-20 bg-gray-100 md:pb-16">
                <div className="">
                        <div className="flex flex-col  items-center text-center py-12">
                            <h1 className="font-semibold text-4xl py-4">
                                Our Goals
                            </h1>
                            <p>Join us in making a difference through our donation campaigns.</p>
                        </div>
                        <div className="md:space-x-12 flex justify-around flex-col md:flex-row">  
                            <Card1/>
                            <Card1/>
                        </div>
                </div>
            </div>
            </div>
        </>
    )
};

export default OurGoalsSection;