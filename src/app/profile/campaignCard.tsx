"use client";
import React, { useState } from "react";

const CampaignCard = ({
  _id,
  campaignName,
  amountCollected,
  amountSpent,
  handleEdit,
}: any) => {

  console.log("SBSE UPAR" , _id);
  console.log("SBSE UPAR" , amountCollected);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedAmountCollected, setEditedAmountCollected] =
    useState(amountCollected);
  const [editedAmountSpent, setEditedAmountSpent] = useState(amountSpent);

  const handleSave = async () => {
    try {
      console.log("CID ", _id);
      await handleEdit(_id, editedAmountCollected, editedAmountSpent);
      setIsEditing(false);
      window.location.reload();
    } catch (error) {
      console.error("Error updating campaign:", error);
    }
  };

  

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto mb-4">
      <h3 className="text-2xl text-center font-bold capitalize underline mb-2">
        {campaignName}
      </h3>

      {isEditing ? (
        <div>
          <div className="mb-2">
            <label
              htmlFor="editedAmountCollected"
              className="block font-medium text-gray-700"
            >
              Edited Amount Collected
            </label>
            <input
              type="number"
              id="editedAmountCollected"
              className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={editedAmountCollected}
              onChange={(e) => setEditedAmountCollected(Number(e.target.value))}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="editedAmountSpent"
              className="block font-medium text-gray-700"
            >
              Edited Amount Spent
            </label>
            <input
              type="number"
              id="editedAmountSpent"
              className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={editedAmountSpent}
              onChange={(e) => setEditedAmountSpent(Number(e.target.value))}
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Amount ID:</span>
            <span className="font-semibold">{_id}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Amount Collected:</span>
            <span className="font-semibold">{amountCollected}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Amount Spent:</span>
            <span className="font-semibold">{amountSpent}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Amount Left:</span>
            <span className="font-semibold">
              {amountCollected - amountSpent}
            </span>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default CampaignCard;
