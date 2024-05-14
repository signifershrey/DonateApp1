import React from "react";
import donation from "@/assets/progress.png";
import Image from "next/image";
import Container from "./container";

const OurProgress = () => {
    return (
        <>
            <div className="max-w-8xl lg:px-20 lg:py-20 md:p-4 p-2 mx-auto">
                <div className="flex lg:flex-row items-center  flex-col lg:justify-between lg:mt-0 mt-20 space-y-6">
                    <h1 className="text-4xl font-semibold text-center">Our Progress</h1>
                    <p className="lg:w-2/4 justify-end text-gray-700 lg:text-left text-center lg:m-0 m-4">Discover the impact of your generosity through real-time updates and detailed insights. See first-hand how your support is transforming the lives of children and doctors in Gaza, providing hope and vital assistance during this challenging time.
                    </p>
                </div>
                </div>
                <Container>  
                <div className="max-w-6xl lg:px-[4rem]">   
                <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between lg:p-0 p-4 mb-4 lg:mb-0">
                    <div className="flex flex-col lg:space-y-[2rem]">
                        <div className="flex flex-col space-y-4 py-20">
                            <h1 className="text-black text-6xl font-semibold underline decoration-8 decoration-yellow-500">20,156</h1>
                            <p className="text-gray-700 text-md">Doctors We Have Helped</p>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-black text-6xl font-semibold underline decoration-8 decoration-yellow-500">20,156</h1>
                            <p className="text-gray-700 text-md">Doctors We Have Helped</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <Image src={donation} alt="donation" width={820} className="hidden lg:block" />

                    <div className="flex flex-col lg:space-y-[2rem]">
                        <div className="flex flex-col space-y-4 py-20">
                            <h1 className="text-black text-6xl font-semibold underline decoration-8 decoration-yellow-500">20,156</h1>
                            <p className="text-gray-700 text-md">Doctors We Have Helped</p>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-black text-6xl font-semibold underline decoration-8 decoration-yellow-500">20,156</h1>
                            <p className="text-gray-700 text-md">Doctors We Have Helped</p>
                        </div>
                    </div>
                </div>
                
                </div>
                </Container>
        
        </>
    );
}

export default OurProgress;