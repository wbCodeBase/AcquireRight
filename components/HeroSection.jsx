

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
        <div className="container mx-auto sm:max-w-6xl py-8 sm:py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">

            {/* Text Content */}
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="text-center lg:text-left">

                <h1 className="text-2xl lg:text-3xl my2 font-lora text-ar-gray-700 leading-tight">{heroSectionData.title}</h1>

              </div>
            </div>

            {/* Image Content */}
            <div className="w-full sm:w-10/12 md:w-8/12 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center">
                <Image
                  src={heroSectionData.imageUrl}
                  alt="Digital Brain Visualization"
                  height={300}
                  width={500}
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



