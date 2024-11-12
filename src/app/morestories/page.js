'use client'
import Link from "next/link";
import { useState,useEffect } from "react";

export default function HomePage() {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const fetchChildren = async () => {
      const response = await fetch("/api/children");
      const data = await response.json();
      setChildren(data);
    };

    fetchChildren();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {children.map((child) => (
        <div key={child._id} className="p-4 bg-gray-100 shadow rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">{child.name}</h2>
          <p className="text-gray-600">{child.bio}</p>
          <Link href={`/child/${child._id}`}>
            <p className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-2 text-center">
              View Details
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
