// src/app/morestories/page.tsx
"use client";
import { useState, useEffect } from "react";
import { Card } from "../card/Card"; // Import Card with the correct path

interface FormData {
  _id: string;
  name: string;
  bio: string;
  ebookLink: string;
  imageUrl: string;
}

export default function MoreStories() {
  const [forms, setForms] = useState<FormData[]>([]); // Explicitly typing the forms state

  useEffect(() => {
    // Fetching data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getmorestories"); // Adjust API path as needed
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("API Response:", data); // Debugging: Log the response

        // Process and adjust the data structure if needed
        if (data.success && data.forms) {
          setForms(data.forms);
        } else {
          console.error("Unexpected API response format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <div className="text-center flex justify-center">
        <p className="font-semibold text-center text-3xl underline py-3">
          Read our Latest Stories
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-12 md:px-22">
        {forms.map((form) => (
          <Card
            key={form._id}
            name={form.name}
            bio={form.bio}
            ebookLink={form.ebookLink}
            imageUrl={form.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
