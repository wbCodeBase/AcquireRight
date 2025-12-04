// import openHead from "@/public/images/openHead.svg"
// import shakeHands from "@/public/images/shakeHands.svg"
// import twoHeadFace from "@/public/images/twoHeadFace.svg"
// import searchBox from "@/public/images/searchBox.svg"
// import Image from "next/image"


// export default function ThirdSection() {
//   const cards = [
//     {
//       title: "Operator Identity",
//       description: "Clarity on what to buy — and why you're the right operator.",
//       points: [
//         "Build a Buy Box based on your strengths",
//         "Discover industries & business sizes that fit you",
//         "Create clarity and confidence before you search",
//       ],
//       bgColor: "bg-ar-shadeof-blue",
//       image: openHead,
//     },
//     {
//       title: "Deal Flow",
//       description: "Filter out noise and focus on real opportunities.",
//       points: [
//         "Score deals through an operator-first lens",
//         "Cut out 80% of unrealistic deals",
//         "Focus only on actionable deal sourcing",
//       ],
//       bgColor: "bg-ar-shadeof-orange",
//       image: shakeHands,
//     },
//     {
//       title: "Business Clarity",
//       description: "Know what to ask, and what to look for.",
//       points: ["Tailored first-call plans", "Deep-dive follow-up questions", "A 2-3 year operator-ready plan"],
//       bgColor: "bg-ar-pastal-gray-cyan",
//       image: twoHeadFace,
//     },
//     {
//       title: "No-Surprise Diligence",
//       description: "Avoid hidden risks and walk into closing fully prepared.",
//       points: [
//         "Identify financial & operational surprises",
//         "Mitigate deal-killers early",
//         "Build your transition + training plan",
//       ],
//       bgColor: "bg-ar-pastal-blue",
//       image: searchBox,
//     },
//   ]

//   return (
//     <main className="min-h-screen bg-ar-light-azure px-4 py-12 md:px-8 md:py-10">
//       <div className="max-w-6xl mx-auto">


//         {/* <section className='bg-ar-light-azure'>
//         <div className='max-w-7xl mx-auto px-4 py-16'> */}

//         <div className="text-center my-8 md:mb-12 text-ar-gray-700">
//           <h2 className="text-2xl md:text-3xl md:font-bold font-medium mb-3 font-lora text-balance">
//             The Four Pillars of a Successful Search
//           </h2>
//           <p className="text-lg md:text-xl font-medium font-dm text-balance">
//             Everything inside AcquireRight is organized around the four outcomes every searcher needs.
//           </p>
//         </div>



//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-20 mt-10">
//           {cards.map((card, index) => (
//             <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-sm">
//               {/* Card Title */}
//               <div className="px-6 py-8">
//                 <h3 className="md:text-2xl text-xl font-bold text-ar-gray-700 whitespace-pre-line">{card.title.replace(/ /g, "\n")}</h3>
//               </div>

//               {/* Icon Area */}
//               <div className={`${card.bgColor} h-56 flex items-center justify-center`}>
//                 <Image src={card?.image} alt={card?.title} width={300} height={500} className="" />
//               </div>

//               {/* Content Area */}
//               <div className="p-2 pt-14 pb-12">
//                 {/* Description */}
//                 <p className="text-lg text-center font-bold text-ar-gray-700 mb-4 leading-relaxed">{card.description}</p>

//                 {/* Bullet Points */}
//                 <ul className="space-y2 text-lg mb-6 md:px-10 px-6">
//                   {card.points.map((point, idx) => (
//                     <li key={idx} className="text-ar-gray-700 flex items-start gap-2">
//                       <span className="text-[#666] mt-1">•</span>
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Learn More Link */}
//                 <div className="flex justify-center items-center">
//                   <button className="text-lg cursor-pointer font-bold text-ar-gray-700 hover:text-ar-gray-900 transition-colors flex items-center gap-1 group">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }




import openHead from "@/public/images/openHead.svg"
import shakeHands from "@/public/images/shakeHands.svg"
import twoHeadFace from "@/public/images/twoHeadFace.svg"
import searchBox from "@/public/images/searchBox.svg"
import Image from "next/image"


export default function ThirdSection() {
  const cards = [
    {
      title: "Operator Identity",
      description: "Clarity on what to buy — and why you're the right operator.",
      points: [
        "Build a Buy Box based on your strengths",
        "Discover industries & business sizes that fit you",
        "Create clarity and confidence before you search",
      ],
      bgColor: "bg-ar-shadeof-blue",
      image: openHead,
      imageWidth: 300,
      imageHeight: 300,
      imageClasses: "w-[120px] h-auto",
    },
    {
      title: "Deal Flow",
      description: "Filter out noise and focus on real opportunities.",
      points: [
        "Score deals through an operator-first lens",
        "Cut out 80% of unrealistic deals",
        "Focus only on actionable deal sourcing",
      ],
      bgColor: "bg-ar-shadeof-orange",
      image: shakeHands,
      imageWidth: 350,
      imageHeight: 280,
      imageClasses: "w-auto h-[100px]",
    },
    {
      title: "Business Clarity",
      description: "Know what to ask, and what to look for.",
      points: ["Tailored first-call plans", "Deep-dive follow-up questions", "A 2-3 year operator-ready plan"],
      bgColor: "bg-ar-pastal-gray-cyan",
      image: twoHeadFace,
      imageWidth: 320,
      imageHeight: 300,
      imageClasses: "w-auto h-[110px]",
    },
    {
      title: "No-Surprise Diligence",
      description: "Avoid hidden risks and walk into closing fully prepared.",
      points: [
        "Identify financial & operational surprises",
        "Mitigate deal-killers early",
        "Build your transition + training plan",
      ],
      bgColor: "bg-ar-pastal-blue",
      image: searchBox,
      imageWidth: 280,
      imageHeight: 320,
      imageClasses: "w-auto h-[120px]",
    },
  ]

  return (
    <main className="min-h-screen bg-ar-light-azure px-4 py-12 md:px-8 md:py-10">
      <div className="max-w-6xl mx-auto">

        <div className="text-center my-8 md:mb-12 text-ar-gray-700">
          <h2 className="text-2xl md:text-3xl md:font-bold font-medium mb-3 font-lora text-balance">
            The Four Pillars of a Successful Search
          </h2>
          <p className="text-lg md:text-xl font-medium font-dm text-balance">
            Everything inside AcquireRight is organized around the four outcomes every searcher needs.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 md:mt-20 mt-10">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-sm">
              {/* Card Title */}
              <div className="px-4 sm:px-6 py-6 sm:py-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-ar-gray-700 whitespace-pre-line">
                  {card.title.replace(/ /g, "\n")}
                </h3>
              </div>

              {/* Icon Area with Dynamic Image Size */}
              <div className={`${card.bgColor} h-48 sm:h-52 md:h-56 flex items-center justify-center p-4`}>
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  width={card.imageWidth} 
                  height={card.imageHeight}
                  className={`${card.imageClasses} object-contain`}
                />
              </div>

              {/* Content Area */}
              <div className="p-4 sm:p-6 pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-10 md:pb-12">
                {/* Description */}
                <p className="text-base sm:text-lg text-center font-bold text-ar-gray-700 mb-4 leading-relaxed">
                  {card.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 px-4 sm:px-6 md:px-10">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="text-ar-gray-700 flex items-start gap-2">
                      <span className="text-[#666] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex justify-center items-center">
                  <button className="text-base sm:text-lg cursor-pointer font-bold text-ar-gray-700 hover:text-ar-gray-900 transition-colors flex items-center gap-1 group">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}