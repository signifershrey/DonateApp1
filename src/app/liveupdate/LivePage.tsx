import React from "react";
import Banner from "@/assets/Banner.png";
import Image from "next/image";
import CTASection from "../CTASection";

const LivePage = () => {
  return (
    <>
      <div className="md:px-28 px-6">
        <h1 className="font-semibold text-center text-4xl pt-2 pb-6">Our Stories</h1>

        <div className="pb-10">
          <Image
            src={Banner}
            alt="hero"
            className="lg:w-[100%] h-[28rem]  rounded-lg"
          />
        </div>

        <div className="py-2">
          <h1 className="py-2 font-bold text-lg">Aya’s Journey to Recovery</h1>
          <p className="py-2">
            In the midst of the ongoing conflict in Gaza, 7-year-old Aya’s life
            took a tragic turn when her home was struck, leaving her severely
            injured. Her family rushed her to a local clinic, where Dr. Ahmad,
            armed with medical supplies provided by our NGO, stepped in to help.
            Through a delicate surgery and weeks of intensive care, Aya began to
            heal. Today, she’s regaining her strength and can walk again, a true
            testament to the lifesaving power of local healthcare supported by
            our organization.
          </p>
        </div>

        <div className="py-2">
          <h1 className="py-2 font-bold text-lg">Omar’s Path to Healing</h1>
          <p className="py-2">
            Omar, a 10-year-old boy, was playing outside when he was critically
            injured by shrapnel from a nearby explosion. His family’s desperate
            rush to the hospital led them to Dr. Rana, a dedicated local surgeon
            whose work is supported by our NGO. With the medical tools and
            training provided through our program, Dr. Rana was able to save
            Omar’s life. Although his recovery journey is still ongoing, Omar’s
            resilience shines through, giving his family renewed hope for the
            future.
          </p>
        </div>

        <div className="py-2">
          <h1 className="py-2 font-bold text-lg">Sara’s Miracle</h1>
          <p className="py-2">
            Six-year-old Sara was caught in the crossfire during a conflict near
            her home, suffering severe head trauma. Her chances of survival
            seemed slim until she arrived at a clinic equipped with tools
            recently donated by our NGO. Dr. Youssef, a skilled neurosurgeon,
            performed a delicate operation that saved Sara’s life. Thanks to the
            continuous care she received, Sara is now on her way to a full
            recovery, a miracle made possible by the swift actions of local
            doctors and the crucial support from our organization.
          </p>
        </div>
      </div>
      <div className="pt-12">
      <CTASection/>
      </div>
    </>
  );
};

export default LivePage;
