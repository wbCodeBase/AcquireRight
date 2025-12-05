

"use client"
import React from "react";
import Image from "next/image";

import heroImg from "@/public/images/heroImage.svg";

const HeroSection = () => {
  const heroSectionData = {
    title: "Your co-pilot delivering business intelligence throughout your search.",
    description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
    imageUrl: heroImg,
    ctaText: "Get Connected With us",
    ctaRedirectUrl: "#contact-us",
  };

  return (
    <>
      <section className="bg-gradient-to-r from-[#fffafa] to-[#e8e0e0] text-white">
        <div className="container mx-auto max-w-7xl w-11/12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">

            {/* Text Content */}
            <div className="w-full lg:w-[52%] px-4 sm:px-6 lg:px-8">
              <div className="text-center lg:text-left">

                {/* <h1 className="text-2xl sm:text-3xl font-lora text-ar-gray-900 font-medium leading-tight sm:leading-snug md:leading-tight">
                  {heroSectionData.title}
                </h1> */}

                <h1 className="lg:text-4xl text-3xl my-2 font-lora text-ar-gray-700 leading-tight">{heroSectionData.title}</h1>

              </div>
            </div>

            {/* Image Content */}
            <div className="w-full sm:w-10/12 md:w-8/12 lg:w-[38%] px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center">
                <Image
                  src={heroSectionData.imageUrl}
                  alt="Digital Brain Visualization"
                  className="w-full h-auto max-w-md lg:max-w-full"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection;



