"use client";
import { useState } from "react";
import axios from "axios";

const CampaignForm = ({ addCampaign }: any) => {
  const [campaignName, setCampaignName] = useState("");
  const [amountCollected, setAmountCollected] = useState("");
  const [amountSpent, setAmountSpent] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Create new campaign object
    const newCampaign = {
      campaignName,
      amountCollected: parseInt(amountCollected),
      amountSpent: parseInt(amountSpent),
    };


    try {
      // Send POST request using Axios
      const response = await axios.post("/api/campaign", newCampaign);
      console.log("Response:", response.data);

      // Add new campaign using the prop function
      addCampaign(newCampaign);

      // Clear form fields
      setCampaignName("");
      setAmountCollected("");
      setAmountSpent("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-lg  mx-auto">
        <div className="mb-4">
          <label
            htmlFor="campaignName"
            className="block text-lg font-medium text-gray-700"
          >
            Campaign Name
          </label>
          <input
            type="text"
            id="campaignName"
            className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amountCollected"
            className="block text-lg font-medium text-gray-700"
          >
            Amount Collected
          </label>
          <input
            type="text"
            id="amountCollected"
            className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={amountCollected}
            onChange={(e) => setAmountCollected(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amountSpent"
            className="block text-lg font-medium text-gray-700"
          >
            Amount Spent
          </label>
          <input
            type="text"
            id="amountSpent"
            className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={amountSpent}
            onChange={(e) => setAmountSpent(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CampaignForm;
