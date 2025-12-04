// import React from 'react'
// import { IoIosArrowForward } from "react-icons/io";

// import bar from "@/public/images/bar.svg";
// import Image from 'next/image';

// const HeaderBase = () => {
//     return (
//         <>

//             <section>

//                 <div className="max-w-7xl mx-auto p-12 px-8">

//                     <div className='font-semibold text-2xl text-ar-gray-900 flex items-center gap-2'>AcquireRight <IoIosArrowForward /> </div>

//                     <div className='flex gap-7 text-xl text-ar-gray-700'>
//                         <div className='borde rounded-2xl p-4'>Ensures your deal flow is targeted and aligned with your operator strengths.</div>
//                         <Image src={bar} alt="Bar Image" />
//                         <div className='borde rounded-2xl p-4'>Gives you clear, operator-grade intelligence so nothing critical slips through the cracks.</div>
//                         <Image src={bar} alt="Bar Image" />
//                         <div className='borde rounded-2xl p-4'>Helps you choose a business you can confidently lead to stability and long-term success.</div>
//                     </div>

//                 </div>
//             </section>



//             <section className="bg-gradient-to-r from-[#b1d8ef] via-[#b1d8ef] to-[#a2c3df]">
//                 <div className="max-w-7xl mx-auto p-20 px-8">

//                     <div className='font-bold text-2xl text-ar-gray-700 flex items-center gap-2 mb-4 font-lora'>What’s inside the system</div>

//                     <div className='flex gap-14 text-ar-gray-700'>
//                         <div className='border border-3 text-lg border-ar-gray-600 text-ar-gray-700 rounded-4xl p-4'>
//                             <div className='font-bold'>Tools</div>
//                             <div className='text-md'>Ensures your deal flow is targeted and aligned with your operator strengths.</div>
//                         </div>

//                         <div className='border border-3 text-lg border-ar-gray-600 text-ar-gray-700 rounded-4xl p-4'>
//                             <div className='font-bold'>Training</div>
//                             <div className='text-md'>Improve your business anbalysis automaticatlly as you use the tools no seperate coursework.</div>
//                         </div>

//                         <div className='border border-3 text-lg border-ar-gray-600 text-ar-gray-700 rounded-4xl p-4'>
//                             <div className='font-bold'>Pathways</div>
//                             <div className='text-md'>Guide your search using structured pathways that eliminate doubt and keep your search moving.</div>
//                         </div>
//                     </div>

//                     <div className='h-[30rem] bg-gray-100 max-w-4xl mx-auto mt-20 rounded-lg'>

//                     </div>

//                 </div>

//             </section>

//         </>
//     )
// }

// export default HeaderBase






import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

import bar from "@/public/images/bar.svg";
import Image from 'next/image';

const HeaderBase = () => {
    return (
        <>
            <section>
                <div className="max-w-7xl mx-auto p-6 sm:p-8 lg:p-12 px-4 sm:px-6 lg:px-8">
                    
                    <div className='font-semibold text-xl sm:text-xl lg:text-2xl text-ar-gray-900 flex items-center gap-2 mb-2 sm:mb-0'>
                        AcquireRight <IoIosArrowForward className="text-lg sm:text-xl lg:text-2xl" />
                    </div>

                    <div className='flex flex-col md:flex-row lg:gap-7 text-base sm:text-lg lg:text-xl text-ar-gray-700'>
                        <div className='rounded-2xl p-3 sm:p-3 lg:p-4'>
                            Ensures your deal flow is targeted and aligned with your operator strengths.
                        </div>
                        <Image src={bar} alt="Bar Image" className="hidden md:block w-auto h-6 md:h-full self-center" />
                        
                        <div className='rounded-2xl p-3 sm:p-3 lg:p-4'>
                            Gives you clear, operator-grade intelligence so nothing critical slips through the cracks.
                        </div>
                        <Image src={bar} alt="Bar Image" className="hidden md:block w-auto md:h-full self-center" />
                        
                        <div className='rounded-2xl p-3 sm:p-3 lg:p-4'>
                            Helps you choose a business you can confidently lead to stability and long-term success.
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-gradient-to-r from-[#b1d8ef] via-[#b1d8ef] to-[#a2c3df]">
                <div className="max-w-7xl mx-auto p-6 sm:p-10 lg:p-20 px-4 sm:px-6 lg:px-8">

                    <div className='font-bold text-xl sm:text-xl lg:text-2xl text-ar-gray-700 flex items-center gap-2 mb-6 sm:mb-6 lg:mb-4 font-lora'>
                        What's inside the system
                    </div>

                    <div className='flex flex-col sm:flex-col md:flex-row gap-6 sm:gap-8 lg:gap-14 text-ar-gray-700'>
                        <div className='border border-3 text-base sm:text-base lg:text-lg border-ar-gray-600 text-ar-gray-700 rounded-4xl p-4 sm:p-4 lg:p-4'>
                            <div className='font-bold mb-2'>Tools</div>
                            <div className='text-sm sm:text-sm lg:text-md'>
                                Ensures your deal flow is targeted and aligned with your operator strengths.
                            </div>
                        </div>

                        <div className='border border-3 text-base sm:text-base lg:text-lg border-ar-gray-600 text-ar-gray-700 rounded-4xl p-4 sm:p-4 lg:p-4'>
                            <div className='font-bold mb-2'>Training</div>
                            <div className='text-sm sm:text-sm lg:text-md'>
                                Improve your business anbalysis automaticatlly as you use the tools no seperate coursework.
                            </div>
                        </div>

                        <div className='border border-3 text-base sm:text-base lg:text-lg border-ar-gray-600 text-ar-gray-700 rounded-4xl p-4 sm:p-4 lg:p-4'>
                            <div className='font-bold mb-2'>Pathways</div>
                            <div className='text-sm sm:text-sm lg:text-md'>
                                Guide your search using structured pathways that eliminate doubt and keep your search moving.
                            </div>
                        </div>
                    </div>

                    <div className='h-48 sm:h-64 md:h-80 lg:h-[30rem] bg-gray-100 max-w-4xl mx-auto mt-10 sm:mt-14 lg:mt-20 rounded-lg'>

                    </div>

                </div>
            </section>
        </>
    )
}

export default HeaderBase





