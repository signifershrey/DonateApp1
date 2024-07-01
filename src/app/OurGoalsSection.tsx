"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import DoctorImage1 from "@/assets/DoctorImage.png";
import DoctorImage2 from "@/assets/DoctorImage.png";
import Container from "./container";

interface Campaign {
  amountCollected: number;
  amountSpent: number;
}

const Card1 = ({
  imageSrc,
  title,
  donationLink,
  donationAmount,
  donationText,
}: any) => {
  return (
    <div className="bg-white md:p-10 p-2" id="goals">
      <Image
        src={imageSrc}
        alt="image"
        className="md:max-w-[35rem] md:max-h-[35rem]"
      />

      <h1 className="text-black md:text-4xl text-2xl pt-8 md:pb-6 font-bold">
        {title}
      </h1>

      <div className="flex items-center md:gap-10 gap-6">
        <div className="flex gap-1">
          <Link href={donationLink}>
            <div className="bg-yellow-500 text-black flex gap-1 px-4 py-2 font-semibold items-center whitespace-nowrap">
              <span>Read More</span>
              <span className="flex justify-center">
                <ArrowRight />
              </span>
            </div>
          </Link>
        </div>
        <p className="text-6xl w-2 text-gray-300"> | </p>
        <div className="flex flex-col pt-4 items-start text-start">
          <p className="text-[#0B8D00] text-3xl font-semibold">
            $ {donationAmount}
          </p>
          <p className="text-gray-700 md:leading-7 md:text-md text-sm py-2">
            {donationText}
          </p>
        </div>
      </div>
    </div>
  );
};

const OurGoalsSection = () => {
  const [donation1, setDonation1] = useState<Campaign>({
    amountCollected: 0,
    amountSpent: 0,
  });
  const [donation2, setDonation2] = useState<Campaign>({
    amountCollected: 0,
    amountSpent: 0,
  });
  const fetchdonations = async () => {
    try {
      const response = await axios.get("/api/campaign");
      const donationresponse1 = response.data.allCampaigns[0];
      const donationresponse2 = response.data.allCampaigns[1];

      setDonation1(donationresponse1);
      setDonation2(donationresponse2);
    } catch (error) {
      console.error("Error fetching the  donation detail:", error);
    }
  };

  useEffect(() => {
    fetchdonations();
  }, []);
  return (
    <>
      <div>
        <div className=" bg-gray-100 md:pb-16 w-full pb-4">
          <Container>
            <div className="">
              <div className="flex flex-col items-center text-center py-12">
                <h1 className="font-semibold text-4xl py-4">Our Goals</h1>
                <p className="p-2">
                  Join us in making a difference through our donation campaigns.
                </p>
              </div>
              <div className="md:space-x-12 space-y-4 md:space-y-0 rounded-md flex justify-around flex-col md:flex-row">
                <Card1
                  imageSrc={DoctorImage1}
                  title="Aid for Gaza's Underpaid but Dedicated Doctors."
                  donationLink="/campaign1"
                  donationAmount={donation1.amountCollected}
                  donationText="Donation received Till Date"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default OurGoalsSection;
