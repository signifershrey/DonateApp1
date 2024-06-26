"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import CampaignForm from "./campaignForm";
import CampaignCard from "./campaignCard";
import Cookies from "js-cookie";

interface Campaign {
  _id: string;
  campaignName: string;
  amountCollected: number;
  amountSpent: number;
}

export default function ProfilePage() {
  const router = useRouter();
  const [previousDonations, setPreviousDonations] = useState<Campaign[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [editedCampaign, setEditedCampaign] = useState<Campaign | null>(null);

  const handleLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const addCampaign = (newCampaign: Campaign): void => {
    setCampaigns([...campaigns, newCampaign]);
  };

  const fetchPreviousDonations = async () => {
    try {
      const response = await axios.get("/api/campaign");
      const allCampaigns = response.data.allCampaigns;
      setPreviousDonations(allCampaigns);
    } catch (error) {
      console.error("Error fetching previous donations:", error);
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    console.log("TOKENN ", token);
    fetchPreviousDonations();
  }, []);

  const handleEdit = async (
    _id: string,
    editedAmountCollected: number,
    editedAmountSpent: number
  ) => {
    try {
      console.log("Campaign :", _id);
      console.log("editedAmountCollected :", editedAmountCollected);
      console.log("editedAmountSpent :", editedAmountSpent);

      const response = await axios.put("/api/campaign", {
        _id: _id,
        amountCollected: editedAmountCollected,
        amountSpent: editedAmountSpent,
      });

      console.log("Campaign Updated:", response.data);

      const updatedCampaigns = campaigns.map((campaign) => {
        if (campaign._id === _id) {
          return {
            ...campaign,
            amountCollected: editedAmountCollected,
            amountSpent: editedAmountSpent,
          };
        }
        return campaign;
      });

      setCampaigns(updatedCampaigns);
      setEditedCampaign(null);
    } catch (error) {
      console.error("Error updating campaign:", error);
    }
  };

  return (
    <div className="">
      <div className=" flex justify-center rounded-lg  md:justify-end md:mr-16 px-2 md:ml-20">
        <button
          onClick={handleLogout}
          className="bg-red-500  text-white font-bold py-2 mb-2 px-6 shadow-md hover:bg-red-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
        >
          Logout
        </button>
      </div>

      <div className="">
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="md:w-[50%] bg-gray-200 p-8">
            <h1 className="text-3xl font-semibold text-center mb-8 p-2">
              Add a New Campaign
            </h1>
            <CampaignForm addCampaign={addCampaign} />
          </div>
          <div className="md:w-[50%] bg-gray-100 p-8">
            <h1 className="text-3xl font-semibold text-center mb-8 p-2">
              Campaign Details
            </h1>
            {campaigns.map((campaign) => (
              <CampaignCard
                key={campaign._id}
                _id={campaign._id}
                campaignName={campaign.campaignName}
                amountCollected={campaign.amountCollected}
                amountSpent={campaign.amountSpent}
                handleEdit={handleEdit} // Pass handleEdit function to CampaignCard
              />
            ))}
            {previousDonations.map((campaign) => (
              <CampaignCard
                key={campaign._id}
                _id={campaign._id}
                campaignName={campaign.campaignName}
                amountCollected={campaign.amountCollected}
                amountSpent={campaign.amountSpent}
                handleEdit={handleEdit}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
