import React from "react";
import Container from "./container";
import logo from "@/assets/logo.png";
import location from "@/assets/svg/Footer - Contact Us - Location Icon.svg";
import email from "@/assets/svg/Footer - Contact Us - Email Icon.svg";
import call from "@/assets/svg/Footer - Contact Us - Call Icon.svg";
import Image from "next/image";
import Link from "next/link";
import { FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <Container>
        <div id="contact" className=" md:p-10 p-4 md:mt-10">
          <div className="md:mx-32">
            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-y-20 gap-y-10 md:gap-x-20 md:mb-4">
              <div className="cols-span-3">
                <Image
                  src={logo}
                  alt={"icon"}
                  height={64}
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div className="cols-span-1">
                <div className="flex flex-col gap-6">
                  <h1 className="text-xl font-semibold text-black">
                    Quick Links
                  </h1>
                  <Link href="#about" className="text-black text-md">
                    Our Goals
                  </Link>
                  <Link href="#services" className="text-black text-md">
                    Our Progress
                  </Link>
                  <Link href="#specialties" className="text-black text-md">
                    Live Updates
                  </Link>
                </div>
              </div>
              <div className="cols-span-1">
                <div className="flex flex-col gap-6">
                  <h1 className="text-xl font-semibold text-black">Contact</h1>
                  <div className="flex flex-row space-x-2">
                    <Image src={email} alt={email} height={24} width={24} />
                    <Link href="" className="text-black lg:text-md text-sm">
                      doctorswithhope@gmail.com
                    </Link>
                  </div>
                </div>
              </div>

              <div className="cols-span-1">
                <p className="font-semibold text-xl md:pb-6 pb-2 ">
                  Follow us on
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row md:gap-6 gap-12 py-2 ">
                    <a
                      href="https://www.tiktok.com/@doctorswithhope"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTiktok size={25} />
                    </a>
                    <a
                      href="https://www.instagram.com/doctorswithhope/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:border-t-2 w-[90%] items-center md:border-black mt-8 my-6" />

            <div className="text-black text-center">
              <p className="text-md">
                Copyright 2023 © doctorswithhope. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
