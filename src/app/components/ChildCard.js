// components/ChildCard.js
"use client";
import Link from "next/link";

export default function ChildCard({ child }) {
  return (
    <div className="p-4 bg-gray-100 shadow rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800">{child.name}</h2>
      <p className="text-gray-600">Bio: {child.bio}</p>
      <p className="text-gray-600 mb-4">Ebook Link: {child.ebookLink}</p>
      <Link href={`/child/${child._id}`}>
        <p className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View Details
        </p>
      </Link>
    </div>
  );
}
