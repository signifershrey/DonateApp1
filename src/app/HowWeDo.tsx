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
        <div className=" bg-gray-100 md:py-16 w-full pb-4">
          <Container>
            <div className="text-center">
              <h1 className="font-semibold text-4xl p-2">How we do it</h1>
              <p className="p-2">
                We provide critical aid through the donations we receive.
              </p>
            </div>
            <div className="flex py-12">
              <div className="md:1/3 space-y-4 text-center">
                <div className="flex justify-center">
                  <Image src={Medicine} alt="medicines" />
                </div>
                <h1 className="text-2xl font-semibold">Supplies</h1>
                <p className=" px-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eius, nobis.
                </p>
              </div>
              <div className="md:1/3 space-y-4 text-center">
              <div className="flex justify-center">

                <Image src={Food} alt="Foods" />
              </div>
                <h1 className="text-2xl font-semibold">Food</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eius, nobis.
                </p>
              </div>
              <div className="md:1/3 space-y-4 text-center">
              <div className="flex justify-center">
                <Image src={Tent} alt="Tent" />
              </div>
                <h1 className="text-2xl font-semibold">Tents</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eius, nobis.
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
