"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CampaignImage from "@/assets/CampaignImage.png";
import CTASection from "../CTASection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import Container from "../container";

interface Campaign {
  amountCollected: number;
  amountSpent: number;
}

const Campaignpage = () => {
  const [donation1, setDonation1] = useState<Campaign>({
    amountCollected: 0,
    amountSpent: 0,
  });
  const fetchdonations = async () => {
    try {
      const response = await axios.get("/api/campaign");
      const donationresponse1 = response.data.allCampaigns[0];
      console.log("1", donationresponse1);

      setDonation1(donationresponse1);
    } catch (error) {
      console.error("Error fetching the  donation detail:", error);
    }
  };

  useEffect(() => {
    fetchdonations();
  }, []);

  return (
    <>
      <Container>
        <div>
          <Image
            src={CampaignImage}
            alt="campaign-IMG"
            className="w-full h-72"
          />
        </div>

        <div id="main" className="w-full flex flex-col-reverse md:flex-row ">
          <div id="left" className="md:w-1/2 p-4  md:px-16">
            <h1 className="text-4xl font-bold py-2">
              Aid for Gaza&apos;s Underpaid but Dedicated Doctors.
            </h1>
            <p className="py-4">
              Help us support families in Gaza Since December 2023, we have been
              committed to support 10 families with the help of 2 doctors as
              well as several local community volunteers. If we get more
              donations we can increase the number of families that we are
              committing to support.
            </p>
            <p className="py-4">
              Each $1,000 will be for 1 family, so we&apos;re raising $10,000 for the
              10 families. 20% of the donations will be given to the doctors,
              volunteers, and helpers and 80% of the donations will be spent and
              given to the families. We&apos;ve been able to purchase tents, food,
              blankets, and of course medicine for those that needed it.
            </p>
            <p className="py-4">
              We raised those funds in the past few months without any clear
              plan or method of giving those funds to the locals in Gaza, but
              with determination and a lot of blessings- we now have a process
              of getting the donation funds transferred to the doctors directly
              and the donations being distributed by local volunteers to the
              families we&apos;ve chosen to support.
            </p>
            <p className="py-4">
              With your help, DoctorsWithHope can reach our goal and
              continue the work we’ve set out to do in this campaign. Please
              help if you can. Every donation makes a difference.
            </p>
          </div>

          <div
            id="right"
            className="md:w-1/2 items-center flex flex-col  md:px-16 md:py-6"
          >
            <div className="md:border-4  md:w-full">
              <div className="flex flex-col md:flex-row w-full justify-between">
                <div className=" flex items-center w-full md:gap-10 gap-3">
                  <div className="flex md:gap-1 flex-col md:flex-row w-full">
                    <div className="flex flex-col pt-4 items-start text-start w-full md:w-1/2 px-4">
                      <p className="text-[#0B8D00] text-3xl font-semibold">
                        $ {donation1.amountCollected}
                      </p>
                      <p className="text-gray-700 leading-7 text-md">
                        Donation Received Till Date
                      </p>
                    </div>
                    <p className="text-6xl my-3 hidden sm:block text-gray-200">
                      |
                    </p>
                    <div className="flex flex-col pt-4 items-start text-start w-full md:w-1/2 px-4">
                      <p className="text-[#fa5d5d] text-3xl font-semibold">
                        $ {donation1.amountSpent}
                      </p>
                      <p className="text-gray-700 leading-7 text-md">
                        Donation Spend Till Date
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4  mx-4 ">
                <Link
                  href="payment"
                >
                  <button className="bg-yellow-500 text-black flex justify-center w-full py-2 font-semibold my-2 px-4 whitespace-nowrap">
                    <span className="px-2">Donate Now</span>
                    <ArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Campaignpage;
