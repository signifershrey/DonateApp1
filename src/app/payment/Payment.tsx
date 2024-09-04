import React from "react";
import Link from "next/link";

const Payment = () => {
  return (
    <div className="flex flex-col gap-6 items-center bg-gray-100 p-10 text-center">
      <Link href="https://www.paypal.com/pools/c/974YcJNt3Q" target="_blank">
        <button className="w-64 bg-white border border-gray-300 rounded-lg shadow-md px-8 py-3 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <span>Continue to Donate with Paypal</span>
        </button>
      </Link>

      <Link
        href="https://www.gofundme.com/f/doctors-within-borders-dwib-chapter-1"
        target="_blank"
      >
        <button className="w-64 bg-white border border-gray-300 rounded-lg shadow-md px-8 py-3 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <span>Continue to Donate with GoFundMe</span>
        </button>
      </Link>

      <Link href="https://venmo.com/u/NateHyung" target="_blank">
        <button className="w-64 bg-white border border-gray-300 rounded-lg shadow-md px-8 py-3 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <span>Continue to Donate with Venmo</span>
        </button>
      </Link>

      <Link href="https://www.zellepay.com" target="_blank">
        <button
          onClick={(e) => e.preventDefault()}
          disabled
          className="w-64 bg-white border border-gray-300 rounded-lg shadow-md px-8 py-3 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
        >
          <span>Continue to Donate with Zelle</span>
        </button>
      </Link>

      <Link href="https://www.zeffy.com/donate" target="_blank">
        <button
          onClick={(e) => e.preventDefault()}
          disabled
          className="w-64 bg-white border border-gray-300 rounded-lg shadow-md px-8 py-3 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
        >
          <span>Continue to Donate with Zeffy</span>
        </button>
      </Link>
    </div>
  );
};

export default Payment;

// import React from "react";
// import Link from "next/link";

// const Payment = () => {
//   return (
//     <div className="flex flex-col gap-6 items-center bg-gray-100 p-10 text-center">
//       <Link href="payment" target="">
//         <button className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white border border-gray-300 rounded-lg shadow-md px-8 py-3 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
//           <span>Continue to Donate with Paypal</span>
//         </button>
//       </Link>

//       <Link
//         href="https://www.gofundme.com/f/doctors-within-borders-dwib-chapter-1"
//         target="_blank"
//       >
//         <button className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white border border-gray-300 rounded-lg shadow-md px-8 py-3 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
//           <span>Continue to Donate with GoFundMe</span>
//         </button>
//       </Link>

//       <Link href="https://venmo.com/u/NateHyung" target="_blank">
//         <button className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white border border-gray-300 rounded-lg shadow-md px-8 py-3 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
//           <span>Continue to Donate with Venmo</span>
//         </button>
//       </Link>

//       <Link href="https://www.zellepay.com" target="_blank">
//         <button
//           onClick={(e) => e.preventDefault()}
//           disabled
//           className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white border border-gray-300 rounded-lg shadow-md px-8 py-3 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
//         >
//           <span>Continue to Donate with Zelle</span>
//         </button>
//       </Link>

//       <Link href="https://www.zeffy.com/donate" target="_blank">
//         <button
//           onClick={(e) => e.preventDefault()}
//           disabled
//           className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white border border-gray-300 rounded-lg shadow-md px-8 py-3 font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
//         >
//           <span>Continue to Donate with Zeffy</span>
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Payment;
