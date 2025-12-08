"use client"

import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const legendData = [
  {
    title: "Operator Identity",
    slug: "operator-identity",
    items: [
      { name: "CEO Profile Match", slug: "ceo-profile-match" },
      { name: "Industry Fit", slug: "industry-fit" },
      { name: "SDE Calculator", slug: "sde-calculator" },
      { name: "Resume Creator", slug: "resume-creator" }
    ],
  },
  {
    title: "Deal Flow",
    slug: "deal-flow",
    items: [
      { name: "Search Sense", slug: "search-sense" },
      { name: "Fit Pitch", slug: "fit-pitch" }
    ],
  },
  {
    title: "Business Clarity",
    slug: "business-clarity",
    items: [
      { name: "CEO Requirements", slug: "ceo-requirements" },
      { name: "Grit Fit", slug: "grit-fit" },
      { name: "First Call", slug: "first-call" },
      { name: "Follow-up", slug: "follow-up" },
      { name: "Opportunity Analysis", slug: "opportunity-analysis" }
    ],
  },
  {
    title: "No-Surprise Diligence",
    slug: "no-surprise-diligence",
    items: [
      { name: "Plan Validation", slug: "plan-validation" },
      { name: "Financial Surprises & Mitigation", slug: "financial-surprises-mitigation" },
      { name: "Training Package", slug: "training-package" }
    ],
  },
]

export default function ToolLegend() {
  const pathname = usePathname()

  // Extract the section and specific item from the pathname
  const currentSection = legendData.find((item) => pathname.includes(item.slug))?.slug || ""
  
  // Check if we're on a specific item page (has a second path segment)
  const pathSegments = pathname.split('/').filter(Boolean)
  const hasSpecificItem = pathSegments.length > 1
  const specificItemSlug = hasSpecificItem ? pathSegments[pathSegments.length - 1] : null

  return (
    <div className="w-full rounded-lg bg-[#eef3f6] p-6 md:p-12">
      {/* Title */}
      <h2 className="text-center text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">TOOL LEGEND</h2>

      {/* Timeline Progress Indicator */}
      <div className="flex justify-center items-center mb-8 md:mb-12 px-4">
        <div className="flex items-center gap-2 md:gap-4 w-full max-w-4xl">
          {legendData.map((item, index) => (
            <div key={item.slug} className="flex items-center flex-1">
              {/* Dot */}
              <div
                className={cn(
                  "w-3 md:w-4 h-3 md:h-4 rounded-full shrink-0 transition-colors",
                  currentSection === item.slug ? "bg-gray-600" : "bg-gray-400",
                )}
              />

              {/* Connecting Line */}
              {index < legendData.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mx-2 md:mx-4 transition-colors",
                    currentSection === item.slug || currentSection === legendData[index + 1].slug
                      ? "bg-gray-600"
                      : "bg-gray-400",
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legend Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-ar-gray-700 max-w-7xl mx-auto gap-6 md:gap-4 px-4">
        {legendData.map((section) => {
          const isActiveSection = currentSection === section.slug

          return (
            <div
              key={section.slug}
              className={cn("transition-all duration-300", isActiveSection ? "opacity-100" : "opacity-60")}
            >
              {/* Section Title */}
              <h3
                className={cn(
                  "font-bold text-base md:text-2xl mb-3 transition-colors",
                  isActiveSection ? "text-foreground" : "text-gray-400",
                )}
              >
                {section.title}:
              </h3>

              {/* Section Items */}
              <ul className="space-y-2">
                {section.items.map((item) => {
                  // If we're on a specific item page, only highlight that item
                  // Otherwise, highlight all items in the active section
                  const isItemActive = isActiveSection && (!hasSpecificItem || item.slug === specificItemSlug)
                  const isItemDisabled = isActiveSection && hasSpecificItem && item.slug !== specificItemSlug

                  return (
                    <li
                      key={item.slug}
                      className={cn(
                        "text-md md:text-xl transition-colors flex items-start",
                        isItemActive ? "text-foreground" : "text-gray-400",
                        isItemDisabled && "opacity-40"
                      )}
                    >
                      <span className="mr-3 flex-shrink-0">•</span>
                      <span>{item.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}








// "use client"

// import { usePathname } from "next/navigation"
// import { cn } from "@/lib/utils"


// const legendData = [
//   {
//     title: "Operator Identity",
//     slug: "operator-identity",
//     items: ["CEO Profile Match", "Industry Fit", "SDE Calculator", "Resume Creator"],
//   },
//   {
//     title: "Deal Flow",
//     slug: "deal-flow",
//     items: ["Search Sense", "Fit Pitch"],
//   },
//   {
//     title: "Business Clarity",
//     slug: "business-clarity",
//     items: ["CEO Requirements", "Grit Fit", "First Call", "Follow-up", "Opportunity Analysis"],
//   },
//   {
//     title: "No-Surprise Diligence",
//     slug: "no-surprise-diligence",
//     items: ["Plan Validation", "Financial Surprises & Mitigation", "Training Package"],
//   },
// ]

// export default function ToolLegend() {
//   const pathname = usePathname()

//   // Extract the section from the pathname
//   const currentSection = legendData.find((item) => pathname.includes(item.slug))?.slug || ""

//   return (
//     <div className="w-full rounded-lg bg-[#eef3f6] p-6 md:p-12">
//       {/* Title */}
//       <h2 className="text-center text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">TOOL LEGEND</h2>

//       {/* Timeline Progress Indicator */}
//       <div className="flex justify-center items-center mb-8 md:mb-12 px-4">
//         <div className="flex items-center gap-2 md:gap-4 w-full max-w-4xl">
//           {legendData.map((item, index) => (
//             <div key={item.slug} className="flex items-center flex-1">
//               {/* Dot */}
//               <div
//                 className={cn(
//                   "w-3 md:w-4 h-3 md:h-4 rounded-full shrink-0 transition-colors",
//                   currentSection === item.slug ? "bg-gray-600" : "bg-gray-400",
//                 )}
//               />

//               {/* Connecting Line */}
//               {index < legendData.length - 1 && (
//                 <div
//                   className={cn(
//                     "flex-1 h-0.5 mx-2 md:mx-4 transition-colors",
//                     currentSection === item.slug || currentSection === legendData[index + 1].slug
//                       ? "bg-gray-600"
//                       : "bg-gray-400",
//                   )}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Legend Items Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-ar-gray-700 max-w-7xl mx-auto  gap-6 md:gap-4 px-4">
//         {legendData.map((section) => {
//           const isActive = currentSection === section.slug

//           return (
//             <div
//               key={section.slug}
//               className={cn("transition-all duration-300", isActive ? "opacity-100" : "opacity-60")}
//             >
//               {/* Section Title */}
//               <h3
//                 className={cn(
//                   "font-bold text-base md:text-2xl mb-3 transition-colors",
//                   isActive ? "text-foreground" : "text-gray-400",
//                 )}
//               >
//                 {section.title}:
//               </h3>

//               {/* Section Items */}
//               <ul className="space-y-2">
//                 {section.items.map((item) => (
//                   <li
//                     key={item}
//                     className={cn(
//                       "text-md md:text-xl transition-colors flex items-start",
//                       isActive ? "text-foreground" : "text-gray-400",
//                     )}
//                   >
//                     <span className="mr-3 flex-shrink-0">•</span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
