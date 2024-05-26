"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LoginHeaderImage from "@/assets/LoginHeader.png";
import Container from "../container";


interface User {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login successful", response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log("Login Failed", error);
      toast.error(error.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (): boolean => {
    if (!user.email || !user.password) {
      toast.error("Email and password are required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(user.email)) {
      toast.error("Invalid email format");
      return false;
    }
    return true;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [id]: value }));
  };

  useEffect(() => {
    setButtonDisabled(!(user.email.length > 0 && user.password.length > 0));
  }, [user]);

  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row md:px-8 md:pt-12">
        <div className="img md:w-[60%]">
          <Image
            src={LoginHeaderImage}
            alt="hero"
            className="h-[28rem] w-[100%]"
          />
        </div>
        <div className="login-details flex justify-center items-center md:px-6 lg:px-20 md:w-[40%]">
          <form className="flex flex-col w-[85%]" onSubmit={onLogin}>
            <h1 className="text-2xl font-bold my-4">
              {loading ? "Processing" : "Login"}
            </h1>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-md font-medium leading-none"
                >
                  Email
                </label>
                <input
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  type="email"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-md font-medium leading-none"
                >
                  Password
                </label>
                <input
                  id="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  type="password"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={buttonDisabled}
              className="my-6 ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-[#FFBB00] px-4 py-4 text-md font-semibold text-black transition-colors"
            >
              <p className="pr-2">{buttonDisabled ? "Login" : "Login"}</p>
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
          </form>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
