// src/app/card/Card.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

// Define prop types for the Card component
interface CardProps {
  imageUrl: string;
  name: string;
  bio: string;
  ebookLink: string;
}

export function Card({ imageUrl, name, bio, ebookLink }: CardProps) {
  return (
    <div className="relative md:p-6 p-4 m-4 flex flex-col items-center border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-gradient-to-br from-white via-gray-100 to-gray-50">
      {/* Image Wrapper */}
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg bg-gray-200 flex justify-center items-center">
        <Image
          src={imageUrl}
          alt={`${name} image`}
          className="object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"
          width={400}
          height={300}
        />
      </div>

      {/* Content Section */}
      <div className="bg-white w-full p-6 text-center rounded-b-lg space-y-4 mt-2">
        {/* Title */}
        <h1 className="text-gray-800 font-bold text-2xl">{name}</h1>

        {/* Bio Section */}
        <p className="text-gray-600 text-md max-h-24 overflow-hidden break-words line-clamp-3">
          {bio}
        </p>

        {/* Link as a Button */}
        <div className="flex justify-center">
          <Link
            href={ebookLink}
            className="inline-block px-6 py-3 bg-[#e9b308] text-black font-semibold text-lg rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Read Ebook
          </Link>
        </div>
      </div>
    </div>
  );
}
