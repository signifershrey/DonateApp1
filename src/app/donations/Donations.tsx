
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface PaymentLinks {
  paypal: string;
  gofundme: string;
  venmo: string;
  sosusa: string;
  inash: string;
}

const Donations: React.FC = () => {
  const [links, setLinks] = useState<PaymentLinks | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentLinks = async () => {
      try {
        const response = await fetch("/api/payment-links"); // Using the proxy route
        if (!response.ok) throw new Error("Failed to fetch payment links");

        const data = await response.json();
        console.log("DA" ,data);
        
        setLinks({
          paypal: data.paypal || "",
          gofundme: data.gofundme || "",
          venmo: data.venmo || "",
          sosusa: data.sosusa || "",
          inash: data.inash || "",
        });
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error("Error fetching payment links:", err);
        setError("Unable to load donation links. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentLinks();
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center bg-gray-50 p-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-yellow-500 mb-4">Support Us!</h1>
      {loading ? (
        <p className="text-gray-500">Loading links...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        links && (
          <>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <DonationButton
                label="Donate with PayPal"
                link={links.paypal}
                colorClass="bg-yellow-500 border-yellow-600 hover:bg-yellow-600 focus:ring-yellow-500"
              />
              <DonationButton
                label="Donate with GoFundMe"
                link={links.gofundme}
                colorClass="bg-green-500 border-green-600 hover:bg-green-600 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <DonationButton
                label="Donate with Venmo"
                link={links.venmo}
                colorClass="bg-blue-500 border-blue-600 hover:bg-blue-600 focus:ring-blue-500"
              />
              <DonationButton
                label="Donate with SOS-USA"
                link={links.sosusa}
                colorClass="bg-red-500 border-red-600 hover:bg-red-600 focus:ring-red-500"
              />
              <DonationButton
                label="Donate with Inash"
                link={links.inash}
                colorClass="bg-purple-500 border-purple-600 hover:bg-purple-600 focus:ring-purple-500"
              />
            </div>
          </>
        )
      )}
    </div>
  );
};

interface DonationButtonProps {
  label: string;
  link: string;
  colorClass: string;
}

const DonationButton: React.FC<DonationButtonProps> = ({
  label,
  link,
  colorClass,
}) => {
  return (
    <Link href={link} target="_blank" className="w-full">
      <button
        disabled={!link}
        className={`w-full ${
          link
            ? `${colorClass} text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2`
            : "bg-gray-300 text-gray-500 border border-gray-400 cursor-not-allowed"
        } rounded-lg shadow-md px-6 py-3 font-medium`}
      >
        {label}
      </button>
    </Link>
  );
};

export default Donations;
