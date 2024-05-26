"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CampaignImage from "@/assets/CampaignImage.png";
import CTASection from "../CTASection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import Container from "../container";

interface Campaign{
  amountCollected : number,
  amountSpent : number,
}

const Campaignpage = () => {
  const [donation1, setDonation1] = useState<Campaign>({amountCollected: 0 , amountSpent: 0});
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

        <div id="main" className="w-full flex flex-col md:flex-row ">
          <div id="left" className="md:w-1/2 p-4 bg-slate-200 md:px-16">
            <h1 className="text-4xl font-bold py-2">
              Aid for Gaza's Underpaid but Dedicated Doctors.
            </h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet. Eos minus dicta ut delectus voluptas
              rem dolorem animi et veritatis quis. Vel veniam voluptas non
              tempora eaque qui voluptate rerum? In explicabo blanditiis ut
              laudantium aliquam qui voluptates quae. Ut ullam vero est
              veritatis obcaecati est corporis sapiente et officia deserunt.
            </p>
            <p className="py-4">
              Lorem ipsum dolor sit amet. Eos minus dicta ut delectus voluptas
              rem dolorem animi et veritatis quis. Vel veniam voluptas non
              tempora eaque qui voluptate rerum? In explicabo blanditiis ut
              laudantium aliquam qui voluptates quae. Ut ullam vero est
              veritatis obcaecati est corporis sapiente et officia deserunt.
            </p>
            <p className="py-4">
              Lorem ipsum dolor sit amet. Eos minus dicta ut delectus voluptas
              rem dolorem animi et veritatis quis. Vel veniam voluptas non
              tempora eaque qui voluptate rerum? In explicabo blanditiis ut
              laudantium aliquam qui voluptates quae. Ut ullam vero est
              veritatis obcaecati est corporis sapiente et officia deserunt.
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
                <button className="bg-yellow-500 text-black flex justify-center md:px-48 py-2 font-semibold my-2 px-4 ">
                  <Link href="https://www.zeffy.com/en-US/donation-form/7f897d42-d3e5-4a81-890e-aa81fd32b40c">
                    <span>Donate Now</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Campaignpage;
