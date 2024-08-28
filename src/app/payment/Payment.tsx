import React from "react";
import Link from "next/link";

const Payment = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center bg-gray-100 p-10 text-center">
        <Link
          href="https://www.paypal.com/pools/c/974YcJNt3Q"
          target="_blank"
        >
          <button className="flex items-center justify-center md:w-fit bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <span>Continue to Donate with Paypal</span>
          </button>
        </Link>

        <Link href="https://www.zeffy.com/donate" target="_blank">
          <button className="flex items-center justify-center md:w-fit bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <span>Continue to Donate with Zeffy</span>
          </button>
        </Link>

        <Link href="https://www.gofundme.com/donate" target="_blank">
          <button className="flex items-center justify-center md:w-fit bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <span>Continue to Donate with GoFundMe</span>
          </button>
        </Link>

        <Link href="https://www.zellepay.com" target="_blank">
          <button className="flex items-center justify-center md:w-fit bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <span>Continue to Donate with Zelle</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Payment;
