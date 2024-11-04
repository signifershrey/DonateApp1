"use client"
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

  useEffect(() => {
    const fetchPaymentLinks = async () => {
      try {
        const response = await fetch(
          "https://www.docswithinborders.org/api/payment-links"
        );
        if (!response.ok) throw new Error("Failed to fetch payment links");

        const data = await response.json();
        setLinks({
          paypal: data.paypal || "",
          gofundme: data.gofundme || "",
          venmo: data.venmo || "",
          sosusa: data.sosusa || "",
          inash: data.inash || "",
        });
      } catch (error) {
        console.error("Error fetching payment links:", error);
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
      ) : (
        <>
          {links && (
            <>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <Link href={links.paypal} target="_blank" className="w-full">
                  <button
                    disabled={!links.paypal}
                    className={`w-full ${
                      links.paypal
                        ? "bg-yellow-500 text-white border border-yellow-600 hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        : "bg-gray-300 text-gray-500 border border-gray-400 cursor-not-allowed"
                    } rounded-lg shadow-md px-6 py-3 font-medium`}
                  >
                    Continue to Donate with Paypal
                  </button>
                </Link>

                <Link href={links.gofundme} target="_blank" className="w-full">
                  <button
                    disabled={!links.gofundme}
                    className={`w-full ${
                      links.gofundme
                        ? "bg-green-500 text-white border border-green-600 hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500"
                        : "bg-gray-300 text-gray-500 border border-gray-400 cursor-not-allowed"
                    } rounded-lg shadow-md px-6 py-3 font-medium`}
                  >
                    Continue to Donate with GoFundMe
                  </button>
                </Link>
              </div>

              <div className="flex flex-col md:flex-row gap-4 w-full">
                <Link href={links.venmo} target="_blank" className="w-full">
                  <button
                    disabled={!links.venmo}
                    className={`w-full ${
                      links.venmo
                        ? "bg-blue-500 text-white border border-blue-600 hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                        : "bg-gray-300 text-gray-500 border border-gray-400 cursor-not-allowed"
                    } rounded-lg shadow-md px-6 py-3 font-medium`}
                  >
                    Continue to Donate with Venmo
                  </button>
                </Link>

                <Link href={links.sosusa} target="_blank" className="w-full">
                  <button
                    disabled={!links.sosusa}
                    className={`w-full ${
                      links.sosusa
                        ? "bg-red-500 text-white border border-red-600 hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500"
                        : "bg-gray-300 text-gray-500 border border-gray-400 cursor-not-allowed"
                    } rounded-lg shadow-md px-6 py-3 font-medium`}
                  >
                    Continue to Donate with SOS-USA
                  </button>
                </Link>

                <Link href={links.inash} target="_blank" className="w-full">
                  <button
                    disabled={!links.inash}
                    className={`w-full ${
                      links.inash
                        ? "bg-purple-500 text-white border border-purple-600 hover:bg-purple-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500"
                        : "bg-gray-300 text-gray-500 border border-gray-400 cursor-not-allowed"
                    } rounded-lg shadow-md px-6 py-3 font-medium`}
                  >
                    Continue to Donate with Inash
                  </button>
                </Link>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Donations;
