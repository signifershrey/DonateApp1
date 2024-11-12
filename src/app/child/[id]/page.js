"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChildPage({ params }) {
  const { id } = params;
  const [child, setChild] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const fetchChild = async () => {
      try {
        const response = await fetch(`/api/children/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch child data");
        }
        const data = await response.json();
        setChild(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChild();
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!child) return <p>Child not found</p>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{child.name}</h1>
      <p className="text-gray-600 mb-2">Bio: {child.bio}</p>
      <p className="text-gray-600 mb-4 bg-pink-500 border ">
        <a href={child.ebookLink} target="_blank" className="text-blue-500">
          View Ebook
        </a>
      </p>
      <img src={child.image} alt={child.name} className="rounded-lg mb-4" />
      
      <button
        onClick={() => router.back()}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
}
