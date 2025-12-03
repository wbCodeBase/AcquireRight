import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

import bar from "@/public/images/bar.svg";
import Image from 'next/image';

const HeaderBase = () => {
    return (
        <>

            <section>

                <div className="max-w-7xl mx-auto p-12 px-8">

                    <div className='font-semibold text-2xl text-ar-gray-900 flex items-center gap-2'>AcquireRight <IoIosArrowForward /> </div>

                    <div className='flex gap-7 text-xl text-ar-gray-700'>
                        <div className='borde rounded-2xl p-4'>Ensures your deal flow is targeted and aligned with your operator strengths.</div>
                        <Image src={bar} alt="Bar Image" />
                        <div className='borde rounded-2xl p-4'>Gives you clear, operator-grade intelligence so nothing critical slips through the cracks.</div>
                        <Image src={bar} alt="Bar Image" />
                        <div className='borde rounded-2xl p-4'>Helps you choose a business you can confidently lead to stability and long-term success.</div>
                    </div>

                </div>
            </section>



            <section className="bg-gradient-to-r from-[#b1d8ef] via-[#b1d8ef] to-[#a2c3df]">
                <div className="max-w-7xl mx-auto p-20 px-8">

                    <div className='font-bold text-2xl text-ar-gray-700 flex items-center gap-2 mb-4 font-lora'>What’s inside the system</div>

                    <div className='flex gap-14 text-ar-gray-700'>
                        <div className='border border-3 text-lg border-ar-gray-600 text-ar-gray-700 rounded-4xl p-4'>
                            <div className='font-bold'>Tools</div>
                            <div className='text-md'>Ensures your deal flow is targeted and aligned with your operator strengths.</div>
                        </div>

                        <div className='border border-3 text-lg border-ar-gray-600 text-ar-gray-700 rounded-4xl p-4'>
                            <div className='font-bold'>Training</div>
                            <div className='text-md'>Improve your business anbalysis automaticatlly as you use the tools no seperate coursework.</div>
                        </div>

                        <div className='border border-3 text-lg border-ar-gray-600 text-ar-gray-700 rounded-4xl p-4'>
                            <div className='font-bold'>Pathways</div>
                            <div className='text-md'>Guide your search using structured pathways that eliminate doubt and keep your search moving.</div>
                        </div>
                    </div>

                    <div className='h-[30rem] bg-gray-100 max-w-4xl mx-auto mt-20 rounded-lg'>

                    </div>

                </div>

            </section>

        </>
    )
}

export default HeaderBase