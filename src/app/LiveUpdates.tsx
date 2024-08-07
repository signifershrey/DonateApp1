import Image from "next/image";
import React from "react";
import background from "@/assets/background.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./container";

export const Card1 = () => {
  return (
    <div className="">
      <div>
        <Image src={background} alt="hello" className="md:p-2" />
      </div>
      <div className="bg-white relative md:bottom-20 md:left-10 p-2 border-2">
        <div className="flex flex-col space-y-4 text-black  ">
          <h1 className="text-start font-semibold text-3xl ">WSCNF</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna .{" "}
          </p>
          <div className="flex space-x-2  p-1 border-2 w-fit">
            <Link href="/liveupdate" className="text-md font-semibold">
              Read More
            </Link>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

const LiveUpdates = () => {
  return (
    <div className="">
      <div id="liveupdates">
        <div className="lg:py-20  w-full py-4">
          <Container>
            <div className="flex flex-col items-center text-center space-y-2">
              <h1 className="font-semibold text-4xl lg:mt-0 mt-20 ">
                Our Social Media Feeds
              </h1>
              <p className="p-2">
                Stay informed with real-time updates on our ongoing campaigns
                and impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14  md:p-12 lg:mt-0 mt-10">
              <div className="col-span-1">
                <Card1 />
              </div>
              <div className="col-span-1">
                <Card1 />
              </div>
              <div className="col-span-1">
                <Card1 />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default LiveUpdates;
