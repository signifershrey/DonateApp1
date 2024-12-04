"use client"
import React, { useEffect, useState } from "react";
import donation from "@/assets/progress.png";
import Image from "next/image";
import Container from "./container";

interface DonationData {
  totalDonations: string;
  paypalDonations: string;
  zelleDonations: string;
  venmoDonations: string;
}

const OurProgress: React.FC = () => {
  const [donationData, setDonationData] = useState<DonationData | null>(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchDonations = async () => {
    try {
      const response = await fetch("/api/proxydonation");
      if (!response.ok) throw new Error("Failed to fetch donation data");
      const data = await response.json();
      console.log("Fetched donation data:", data); // Log data here
      setDonationData({
        totalDonations: data.totalDonations || "$0",
        paypalDonations: data.paypalDonations || "$0",
        zelleDonations: data.zelleDonations || "$0",
        venmoDonations: data.venmoDonations || "$0",
      });
    } catch (error) {
      console.error("Error fetching donation data:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchDonations();
}, []);


  return (
    <div className="bg-gray-100">
      <Container>
        <div className="" id="progress">
          <div className="max-w-8xl lg:px-20 lg:py-6 md:p-4 p-2 mx-auto">
            <div className="flex lg:flex-row items-center flex-col lg:justify-between mt-10 space-y-6">
              <h1 className="text-5xl font-bold text-center text-yellow-500">
                Our Progress
              </h1>
              <p className="lg:w-2/4 justify-end text-gray-700 lg:text-left text-center lg:m-0 m-4">
                Discover the impact of your generosity through real-time updates
                and detailed insights. See first-hand how your support is
                transforming the lives of children and doctors in Gaza,
                providing hope and vital assistance during this challenging
                time.
              </p>
            </div>
          </div>
          <div className="max-w-6xl lg:px-[4rem]">
            <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between lg:p-0 p-2 md:mb-4 lg:mb-0">
              {loading ? (
                <p className="text-center text-gray-500">Loading data...</p>
              ) : (
                <>
                  <div className="flex flex-col lg:space-y-[1rem]">
                    <div className="flex flex-col space-y-4 py-16">
                      <h1 className="text-black text-4xl md:text-6xl font-semibold">
                        ${donationData?.totalDonations}
                      </h1>
                      <p className="text-yellow-500 text-lg font-bold">
                        Total Donations Received
                      </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <h1 className="text-black text-3xl md:text-6xl font-semibold">
                        ${donationData?.venmoDonations}
                      </h1>
                      <p className="text-yellow-500 text-lg font-bold">
                        Venmo Donations
                      </p>
                    </div>
                  </div>
                  <Image
                    src={donation}
                    alt="donation image"
                    width={820}
                    className="hidden lg:block"
                  />
                  <div className="flex flex-col lg:space-y-[2rem]">
                    <div className="flex flex-col space-y-4 py-20">
                      <h1 className="text-black text-3xl md:text-6xl font-semibold">
                        ${donationData?.paypalDonations}
                      </h1>
                      <p className="text-yellow-500 text-lg font-bold">
                        PayPal Donations
                      </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <h1 className="text-black text-3xl md:text-6xl font-semibold">
                        ${donationData?.zelleDonations}
                      </h1>
                      <p className="text-yellow-500 text-lg font-bold">
                        Zelle Donations
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurProgress;
