"use client"
import React, { useEffect, useState } from "react";

interface PaymentLinks {
  paypal: string;
  gofundme: string;
  venmo: string;
  sosusa: string;
  inash: string;
}

const PaymentLinksPage: React.FC = () => {
  const [paymentLinks, setPaymentLinks] = useState<PaymentLinks>({
    paypal: "",
    gofundme: "",
    venmo: "",
    sosusa: "",
    inash: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch payment links on component mount
  useEffect(() => {
    const fetchPaymentLinks = async () => {
      try {
        const response = await fetch("/api/payment-links");
        if (!response.ok) throw new Error("Failed to fetch payment links");

        const data: PaymentLinks = await response.json();
        setPaymentLinks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaymentLinks();
  }, []);

  // Update payment link when edited by user
  const handleChange = (field: keyof PaymentLinks, value: string) => {
    setPaymentLinks((prevLinks) => ({
      ...prevLinks,
      [field]: value,
    }));
  };

  // Handle update request to PUT API
  const handleUpdate = async () => {
    try {
      const response = await fetch("/api/payment-links", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentLinks),
      });
      if (!response.ok) throw new Error("Failed to update payment links");
      alert("Payment links updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update payment links.");
    }
  };

  if (isLoading)
    return (
      <p className="text-center text-lg font-semibold text-gray-700">
        Loading...
      </p>
    );

  return (
    <div className="max-w-2xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-extrabold text-center text-[#ffbb02] mb-8">
        Edit Payment Links
      </h1>
      <table className="w-full mb-6 border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left text-lg font-medium text-gray-600 border-b">
              Payment Method
            </th>
            <th className="py-2 px-4 text-left text-lg font-medium text-gray-600 border-b">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(paymentLinks).map(([key, value]) => (
            <tr
              key={key}
              className="hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <td className="py-3 px-4 text-gray-700 font-semibold capitalize">
                {key}
              </td>
              <td className="py-3 px-4">
                <input
                  type="text"
                  value={value}
                  onChange={(e) =>
                    handleChange(key as keyof PaymentLinks, e.target.value)
                  }
                  className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 transition duration-150"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <button
          onClick={handleUpdate}
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#ffbb02] rounded-lg shadow-md hover:bg-yellow-600 transition duration-200 transform hover:-translate-y-1"
        >
          Update Links
        </button>
      </div>
    </div>
  );
};

export default PaymentLinksPage;
