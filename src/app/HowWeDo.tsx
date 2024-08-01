"use client";
import Container from "./container";
import Medicine from "@/assets/medicines.png";
import Food from "@/assets/food.png";
import Tent from "@/assets/tent.png";
import Image from "next/image";



const HowWeDo = () => {

  return (
    <>
      <div>
        <div className="  md:py-16 w-full pb-4">
          <Container>
            <div className="text-center">
              <h1 className="font-semibold text-4xl p-2">How we do it</h1>
              <p className="p-2">
                We provide critical aid through the donations we receive.
              </p>
            </div>
            <div className="flex py-12 flex-col md:flex-row">
              <div className="md:1/3 space-y-4 text-center">
                <div className="flex justify-center">
                  <Image src={Medicine} alt="medicines" />
                </div>
                <h1 className="text-2xl font-semibold">Supplies</h1>
                <p className=" px-4">Supporting Gaza&apos;s dedicated doctors with essential resources and financial aid.</p>
              </div>
              <div className="md:1/3 space-y-4 text-center">
                <div className="flex justify-center">
                  <Image src={Food} alt="Foods" />
                </div>
                <h1 className="text-2xl font-semibold">Food</h1>
                <p>
                  Providing vital assistance to needy families during challenging times.
                </p>
              </div>
              <div className="md:1/3 space-y-4 text-center">
                <div className="flex justify-center">
                  <Image src={Tent} alt="Tent" />
                </div>
                <h1 className="text-2xl font-semibold">Tents</h1>
                <p>
                  Offering hope and aid to children affected by the conflict.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HowWeDo;
