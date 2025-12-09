


import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

import bar from "@/public/images/bar.svg";
import checkArrow from "@/public/images/checkArrow.svg"
import Image from 'next/image';

const HeaderBase = () => {
    return (
        <>
            <section>
                <div className="max-w-5xl mx-auto p-6 sm:p-8 lg:p-12 px-4 sm:px-6 lg:px-8">

                    <div className='font-semibold text-xl sm:text-xl lg:text-2xl text-ar-gray-900 flex items-center gap-2 mb-2 sm:mb-0'>
                        AcquireRight <IoIosArrowForward className="text-lg sm:text-xl lg:text-2xl" />
                    </div>

                    <div className='flex flex-col md:flex-row lg:gap-7 text-base sm:text-md text-ar-gray-700'>
                        <div className='rounded-2xl p-3'>
                            Ensures your deal flow is targeted and aligned with your operator strengths.
                        </div>
                        <Image src={bar} alt="Bar Image" className="hidden md:block w-auto h-6 md:h-full self-center" />

                        <div className='rounded-2xl p-3'>
                            Gives you clear, operator-grade intelligence so nothing critical slips through the cracks.
                        </div>
                        <Image src={bar} alt="Bar Image" className="hidden md:block w-auto md:h-full self-center" />

                        <div className='rounded-2xl p-3'>
                            Helps you choose a business you can confidently lead to stability and long-term success.
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-gradient-to-r relative from-[#b1d8ef] via-[#b1d8ef] to-[#a2c3df]">
                <div className="max-w-5xl mx-auto p-6 sm:p-10 lg:p-20 px-4 sm:px-6 lg:px-8">

                    <div className='font-bold z-10 text-xl sm:text-xl lg:text-2xl text-ar-gray-700 flex items-center gap-2 mb-6 sm:mb-6 lg:mb-4 font-lora'>
                        What's inside the system
                    </div>

                    <div className='flex flex-col sm:flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10 text-ar-gray-700'>
                        <div className='border border-3 text-base sm:text-base lg:text-lg border-ar-gray-600 text-ar-gray-700 rounded-4xl p-4 sm:p-4 lg:p-4'>
                            <div className='font-bold mb-1'>Tools</div>
                            <div className='text-sm sm:text-sm lg:text-md'>
                                Ensures your deal flow is targeted and aligned with your operator strengths.
                            </div>
                        </div>

                        <div className='border border-3 text-base sm:text-base lg:text-lg border-ar-gray-600 text-ar-gray-700 rounded-4xl p-4 sm:p-4 lg:p-4'>
                            <div className='font-bold mb-1'>Training</div>
                            <div className='text-sm sm:text-sm lg:text-md'>
                                Improve your business anbalysis automaticatlly as you use the tools no seperate coursework.
                            </div>
                        </div>

                        <div className='border border-3 text-base sm:text-base lg:text-lg border-ar-gray-600 text-ar-gray-700 rounded-4xl p-4 sm:p-4 lg:p-4'>
                            <div className='font-bold mb-1'>Pathways</div>
                            <div className='text-sm sm:text-sm lg:text-md'>
                                Guide your search using structured pathways that eliminate doubt and keep your search moving.
                            </div>
                        </div>
                    </div>

                    <div className='h-48 sm:h-64 md:h-80 lg:h-[30rem] bg-[#d9d9d9] max-w-4xl mx-auto mt-10 sm:mt-14 lg:mt-20 rounded-lg'>

                    </div>

                </div>

                <Image src={checkArrow} alt='watermarks' width={130} height={130} className='absolute top-0 left-0 hidden md:block' />
                <Image src={checkArrow} alt='watermarks' width={200} height={200} className='absolute bottom-0 right-0 hidden md:block' />

            </section>
        </>
    )
}

export default HeaderBase





