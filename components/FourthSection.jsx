import Image from 'next/image'
import React from 'react'

import owlImg from '@/public/images/owl.svg'

const FourthSection = () => {
    return (
        <>
            <section className='bg-ar-shadeof-azure relative overflow-hidden'>

                <div className='p-8 sm:p-10 md:p-16 lg:p-20 max-w-7xl mx-auto flex flex-col gap-4 sm:gap-5 lg:gap-4'>
                    <div className='text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed sm:leading-relaxed md:leading-snug lg:leading-tight pr-0 sm:pr-8 md:pr-12 lg:pr-0'>
                        AcquireRight is an on-demand system that gives searchers the clarity, tools, and operator intelligence they need to buy the right business. It brings together frameworks and assessments delivered through 14 high-powered GPTs—helping you filter deals faster, avoid costly missteps, and choose the business you're truly built to own and operate.
                    </div>

                    <div className='px-4 sm:px-6 md:px-8 lg:px-10 text-sm sm:text-base md:text-base lg:text-lg flex flex-col gap-3 sm:gap-3 lg:gap-3 pb-32 sm:pb-36 md:pb-20 lg:pb-0'>
                        <p>Eliminates messy, time‑wasting listing reviews by turning raw broker language into fast, clear yes/no signals.</p>
                        <p>Highlights risk, fit, and deal breakers instantly so you stop overanalyzing and focus only on deals worth your time.</p>
                        <p>Solves the "am I the right operator?" problem while cutting hours of reflection through guided, instant fit scoring.</p>
                    </div>
                </div>

                {/* Owl Image - Responsive Positioning */}
                <Image 
                    className='absolute w-36 h-auto  xl:w-[150px]
                               bottom-4 right-4 
                               sm:bottom-6 sm:right-6 
                               md:bottom-8 md:right-8 
                               lg:bottom-14 lg:right-12' 
                    src={owlImg} 
                    width={150} 
                    height={250} 
                    alt="Owl mascot" 
                />

            </section>
        </>
    )
}

export default FourthSection










// import Image from 'next/image'
// import React from 'react'

// import owlImg from '@/public/images/owl.svg'

// const FourthSection = () => {
//     return (
//         <>
//             <section className='bg-ar-shadeof-azure relative'>

//                 <div className='p-20 max-w-7xl mx-auto flex flex-col gap-4'>
//                     <div className='text-2xl max-w-5xl leading-tight'>
//                         AcquireRight is an on-demand system that gives searchers the clarity, tools, and operator intelligence they need to buy the right business. It brings together frameworks and assessments delivered through 14 high-powered GPTs—helping you filter deals faster, avoid costly missteps, and choose the business you’re truly built to own and operate.
//                     </div>

//                     <div className='px-10 text-lg flex flex-col gap-3'>
//                         <p> Eliminates messy, time‑wasting listing reviews by turning raw broker language into fast, clear yes/no signals.</p>
//                         <p> Highlights risk, fit, and deal breakers instantly so you stop overanalyzing and focus only on deals worth your time.</p>
//                         <p> Solves the “am I the right operator?” problem while cutting hours of reflection through guided, instant fit scoring.</p>
//                     </div>
//                 </div>

//                 <Image className='w-62 h-auto absolute right-12 bottom-14' src={owlImg} width={150} height={250} alt="Description of image" />

//             </section>
//         </>
//     )
// }

// export default FourthSection