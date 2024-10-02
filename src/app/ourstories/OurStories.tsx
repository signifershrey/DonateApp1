import React from "react";
import Banner from "@/assets/Banner.png";
import Image from "next/image";
import CTASection from "../CTASection";

const OurStories = () => {
  return (
    <>
      <div className="md:px-28 px-6">
        <h1 className="font-semibold text-center text-4xl pt-2 pb-6">
          Our Stories
        </h1>
        <div className="pb-10">
          <Image
            src={Banner}
            alt="hero"
            className="lg:w-[100%] h-[28rem]  rounded-lg"
          />
        </div>
        We were able to connecto to this kids, and ask them about their stories.
        Here are some of the stories we were able to gather:
        <div className="py-2">
          <h2 className="py-2 font-bold text-lg">Talal’s Journey</h2>
          <p className="py-2">What do you love to eat?</p>
          <p>Maftool -Palestinian meal-</p>
          <p>What song do you like?</p>
          <p>هالصيصان شو حلوين</p>
          <p>What do you want to become in future?</p>
          <p>An enginee</p>
          <p>What do you like to happen?</p>
          <p>
            I would love the war to end, return to our homes, and go to school
            again
          </p>
        </div>
        <div className="py-2">
          <h2 className="py-2 font-bold text-lg">Adam’s Path</h2>
          <p className="py-2">What do you want to become in future?</p>
          <p>A company manager!</p>
          <p>What do like to eat?</p>
          <p>Shawerma</p>
          <p>Rice and meat</p>
          <p>(Both are unavailable during the war or too expensive)</p>
          <p>Do you like listening to songs?</p>
          <p>Yes, like kids songs, poetry, songs for Palestine.</p>
          <p>What one thing that will make you happy?</p>
          <p>
            The war to come to an end and to see my friends and play soccer with
            my friends who were killed.
          </p>
        </div>
        <div className="py-2">
          <h2 className="py-2 font-bold text-lg">Adam’s Miracle</h2>
          <p className="py-2">
            One of the children living in the tents is a young boy with Down
            syndrome. His innocent eyes reflect both the resilience and
            vulnerability that come with his condition. Despite the hardships he
            faces every day, his simple wish is to enjoy something many of us
            take for granted: a small treat. With a gentle smile, he expresses
            his longing for a few biscuits and a sip of juice—comforts that
            remind him of the warmth of home, even in the harshest of
            circumstances.
          </p>
        </div>
      </div>
      <div className="pt-12">
        <CTASection />
      </div>
    </>
  );
};

export default OurStories;
