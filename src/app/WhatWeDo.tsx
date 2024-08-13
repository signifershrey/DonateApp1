import React from "react";
import Container from "./container";
import Task from "@/assets/Task.png";
import ChildIcon from "@/assets/childIcon.png";
import DoctorIcon from "@/assets/DoctorIcon.png";
import FamilyIcon from "@/assets/FamilyIcon.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const WhatWeDo = () => {
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="flex md:py-16 flex-col md:flex-row py-8 ">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-semibold pb-8">What We Do?</h1>
            <p className="pr-6 pb-6">
              At our organization, we are committed to supporting the courageous
              doctors of Gaza by providing them with much-needed financial aid
              and resources. Beyond helping healthcare professionals, we also
              extend our assistance to vulnerable families and children affected
              by the ongoing conflict. Your donations help ensure that these
              dedicated doctors can continue their vital work, while also
              providing relief and hope to those in desperate need. Together, we
              can make a significant difference in the lives of many in Gaza.
            </p>

            <div className="flex">
              <div className="pr-2">
                <Image src={DoctorIcon} alt="DoctorIcon " />
              </div>
              <div>
                <h1 className="font-semibold pb-2">Doctors</h1>
                <p className="pb-2">
                  Supporting Gaza’s dedicated doctors with essential resources
                  and financial aid.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="pr-2">
                <Image src={FamilyIcon} alt="DoctorIcon " />
              </div>
              <div>
                <h1 className="font-semibold pb-2">Families</h1>
                <p className="pb-2">
                  Providing vital assistance to needy families during
                  challenging times.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="pr-2">
                <Image src={ChildIcon} alt="DoctorIcon " />
              </div>
              <div>
                <h1 className="font-semibold pb-2">Children</h1>
                <p className="pb-2">
                  Offering hope and aid to children affected by the conflict.
                </p>
              </div>
            </div>
            <button>
              <a
                className="flex my-2  bg-yellow-500 px-6 py-2 text-black font-semibold"
                href="https://www.paypal.com/donate?campaign_id=EP5T3GJRHCAZ4"
                target="_blank"
              >
                Support Them Now
                <ArrowRight />
              </a>
            </button>
          </div>
          <div className="md:w-1/2 ">
            <Image src={Task} alt="Task" className="w-full h-full my-6 rounded-lg" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;
