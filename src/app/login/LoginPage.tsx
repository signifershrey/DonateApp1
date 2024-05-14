import React from 'react'
import LoginHeaderImage from "@/assets/LoginHeader.png";
import Image from "next/image";


const LoginPage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row px-8 md:pt-12">
      <div className="img md:w-[60%]">
        <Image
          src={LoginHeaderImage}
          alt="hero"
          className="h-[28rem] w-[100%] "
        />
      </div>
      <div className="login-details  flex justify-center items-center md:px-6 lg:px-20">
        <form className="">
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="pt-1 pb-10">
            Please provide your name and email, Our team will contact you soon.
          </p>

          <div className="mb-10 space-y-3">
            <div className="space-y-1">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
            </div>
            <button
              className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-[#FFBB00] px-4 py-4  text-md font-semibold text-black transition-colors "
              type="submit"
            >
              <p className='pr-2'>
              Login
              </p>
              <svg
                className="h-8 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage