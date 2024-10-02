import React from "react";
import CTASection from "../../CTASection";

const TalalStory = () => {
  return (
    <>
      <div className="md:px-28 px-6">
        <h1 className="uppercase font-semibold text-center text-4xl pt-2 pb-6">
          Talal&apos;s Stories
        </h1>
        <div className="flex items-center justify-center p-2">
          <iframe
            src="https://drive.google.com/file/d/1RWuFcqkRkDyHM7FhvwQddjFnYWGqZar3/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
     
        <p className="font-semibold text-2xl py-4 ">
          We were able to connect to this kids, and ask them about their
          stories. Here are some of the stories we were able to gather:
        </p>

        <h2 className="font-semibold text-2xl py-4 text-center">
          Read our EBook
        </h2>
        <div className="w-full h-[50%] flex justify-center ">
          <a
            href={
              "https://drive.google.com/file/d/1lllwDBgJNpGbG73_WFD1BmcmMBnANf2X/preview"
            }
            download={"TALAL Books"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                padding: "16px 32px",
                fontSize: "20px",
                cursor: "pointer",
                background: "Green",
              }}
              className="btn btn-success text-white rounded-md"
            >
             Click Here
            </button>
          </a>
        </div>

       
      </div>
      <div className="pt-12">
        <CTASection />
      </div>
    </>
  );
};

export default TalalStory;
