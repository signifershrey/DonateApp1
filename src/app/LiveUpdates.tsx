import Image, { StaticImageData } from "next/image";
import React from "react";
import background from "@/assets/background.png";
import SocialMediaImg1 from "@/assets/SocialMediaImg1.png";
import SocialMediaImg2 from "@/assets/SocialMediaImg2.png";
import SocialMediaImg3 from "@/assets/SocialMediaImg3.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./container";

interface CardProps {
  image: StaticImageData; // or string if using a URL instead of imported images
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="relative">
      <Image src={image} alt="background" className="md:m-4 rounded-lg" />
      <div className="bg-white absolute bottom-0 left-0 p-4 border-2 transform md:translate-y-10 md:translate-x-10">
        <div className="flex flex-col space-y-4 text-black">
          <h1 className="text-start font-semibold text-3xl">{title}</h1>
          <p className="text-gray-700">{description}</p>
          <div className="flex items-center space-x-2 p-1 border-2 w-fit">
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

const LiveUpdates: React.FC = () => {
  return (
    <div id="liveupdates" className="lg:py-20 py-4 w-full">
      <Container>
        <div className="flex flex-col items-center text-center space-y-2">
          <h1 className="font-semibold text-4xl lg:mt-0 mt-20">
            Our Social Media Feeds
          </h1>
          <p className="p-2">
            Stay informed with real-time updates on our ongoing campaigns and
            impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:p-12 lg:mt-0 mt-10">
          <div className="col-span-1">
            <Card
              image={SocialMediaImg1}
              title="WSCNF"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
            />
          </div>
          <div className="col-span-1">
            <Card
              image={SocialMediaImg2}
              title="Another Campaign"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
          <div className="col-span-1">
            <Card
              image={SocialMediaImg3}
              title="Impact Story"
              description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LiveUpdates;
