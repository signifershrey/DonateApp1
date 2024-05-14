import React from "react";
import HospitalImage from "@/assets/hospital.png";
import Image from "next/image";

const LivePage = () => {
  return (
    <div className="md:px-28 px-6">
      <h1 className="font-semibold text-center text-4xl pt-2 pb-6">WCNF</h1>

      <div className="pb-16">
        <Image
          src={HospitalImage}
          alt="hero"
          className="lg:w-[100%] h-[28rem] "
        />
      </div>

      <div className="py-2">
        <h1 className="py-2 font-bold text-lg">Lorem Ipsum</h1>
        <p className="py-2">
          Lorem ipsum dolor sit amet. Eos minus dicta ut delectus voluptas rem
          dolorem animi et veritatis quis. Vel veniam voluptas non tempora eaque
          qui voluptate rerum? In explicabo blanditiis ut laudantium aliquam qui
          voluptates quae. Ut ullam vero est veritatis obcaecati est corporis
          sapiente et officia deserunt.
        </p>
      </div>

      <div className="py-2">
        <h1 className="py-2 font-bold text-lg">Lorem Ipsum</h1>
        <p className="py-2">
          Lorem ipsum dolor sit amet. Eos minus dicta ut delectus voluptas rem
          dolorem animi et veritatis quis. Vel veniam voluptas non tempora eaque
          qui voluptate rerum? In explicabo blanditiis ut laudantium aliquam qui
          voluptates quae. Ut ullam vero est veritatis obcaecati est corporis
          sapiente et officia deserunt.
        </p>
      </div>

      <div className="py-2">
        <h1 className="py-2 font-bold text-lg">Lorem Ipsum</h1>
        <p className="py-2">
          Lorem ipsum dolor sit amet. Eos minus dicta ut delectus voluptas rem
          dolorem animi et veritatis quis. Vel veniam voluptas non tempora eaque
          qui voluptate rerum? In explicabo blanditiis ut laudantium aliquam qui
          voluptates quae. Ut ullam vero est veritatis obcaecati est corporis
          sapiente et officia deserunt.
        </p>
      </div>
    </div>
  );
};

export default LivePage;
