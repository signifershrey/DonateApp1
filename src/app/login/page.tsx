"use client";
import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import CTASection from "../CTASection";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoginHeaderImage from "@/assets/LoginHeader.png";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login successful", response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log("Login Failed" + error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row px-8 md:pt-12 border-2">
        <div className="img md:w-[60%]">
          <Image
            src={LoginHeaderImage}
            alt="hero"
            className="h-[28rem] w-[100%] "
          />
        </div>
        <div className="login-details  flex justify-center items-center md:px-6 lg:px-20 md:w-[40%]">
          <div className="flex flex-col w-[85%]">
            <h1 className="text-2xl font-bold my-4">
              {loading ? "Processing" : "Login"}
            </h1>
            <div className="space-y-4">
              <div className="space-y-4 flex flex-col">
                <label
                  htmlFor="email"
                  className="space-y-2 text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Enter Email"
                  type="text"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="space-y-4 flex flex-col">
                <label
                  htmlFor="password"
                  className="space-y-2 text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Password
                </label>
                <input
                  id="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  placeholder="Enter password"
                  type="text"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
            <button
              onClick={onLogin}
              className="my-6 ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-[#FFBB00] px-4 py-4  text-md font-semibold text-black transition-colors"
            >
             <p className="pr-2">
               {buttonDisabled ? "No Login" : "Login"}
              </p>
              <svg
                className="h-8 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            {/* <Link href="/login" className="underline text-center">Go to Signup Page</Link> */}
          </div>
        </div>
      </div>
     
    </>
  );
}
