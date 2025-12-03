"use client"
import React from "react";
import Image from "next/image";
// import Link from "next/link";


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
        <div className="flex justify-center gap-15 flex-wrap container mx-auto sm:max-w-7xl 11/12 w-full py-20">

          <div className="w-full lg:w-[52%] py-10 px-4 flex justify-center items-center">
            <div>
              <h1 className="lg:text-4xl text-3xl my-2 font-lora text-ar-gray-900 fontmedium leading-tight">{heroSectionData.title}</h1>

            </div>
          </div>

          <div className="md:w-[38%] w-full flex sm:p-10 p-4 items-center justify-center">
            <Image
              src={heroSectionData.imageUrl}
              alt="Digital Brain Visualization"
              className="w-full h-auto"
            />
          </div>

        </div>
      </section>
    </>
  )
}

export default HeroSection;



