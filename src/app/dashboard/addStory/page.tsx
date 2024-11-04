
import React from "react";

const AddNewStory = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Add New Story</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Bio</label>
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          
          />
        </div>
        <div>
          <label className="block text-gray-700">Video/Pictures</label>
          <input
            type="file"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">eBook Link</label>
          <input
            type="url"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400">
            Previous
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewStory;
