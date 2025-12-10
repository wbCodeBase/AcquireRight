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
      <h2 className="text-center text-xl md:text-2xl text-ar-gray-900 font-bold mb-6 md:mb-8">TOOL LEGEND</h2>




      <div className="flex justify-center items-center mb-3 md:mb-5 px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-between px-12 w-full max-w-4xl">

          {legendData.slice(0, 3).map((data) => (

            <div key={data.slug} className="flex items-center flex-1">
              {/* Left circle */}
              <div className="w-2.5 h-2.5 border-3 border-gray-500 rounded-full bg-white shrink-0" />

              {/* Line */}
              <div className="flex-1 h-[2px] bg-gray-600" />

              {/* Right circle */}
              <div className="w-2.5 h-2.5 border-3 border-gray-500 rounded-full bg-white shrink-0" />

            </div>

          ))}

        </div>
      </div>



      {/* Legend Items Grid */}
      < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-ar-gray-700 max-w-5xl mx-auto gap-6 md:gap-8 px-4" >
        {
          legendData.map((section) => {
            const isActiveSection = currentSection === section.slug

            return (
              <div
                key={section.slug}
                className={cn("transition-all duration-300", isActiveSection ? "opacity-100" : "opacity-60")}
              >
                {/* Section Title */}
                <h3
                  className={cn(
                    "font-bold text-base md:text-lg mb-1 transition-colors",
                    isActiveSection ? "text-ar-gray-700" : "text-gray-400",
                  )}
                >
                  {section.title}:
                </h3>

                {/* Section Items */}
                <ul className="-space-y-1">
                  {section.items.map((item) => {
                    // If we're on a specific item page, only highlight that item
                    // Otherwise, highlight all items in the active section
                    const isItemActive = isActiveSection && (!hasSpecificItem || item.slug === specificItemSlug)
                    const isItemDisabled = isActiveSection && hasSpecificItem && item.slug !== specificItemSlug

                    return (
                      <li
                        key={item.slug}
                        className={cn(
                          "text-md md:text-lg transition-colors flex items-center",
                          isItemActive ? "text-ar-gray-900" : "text-gray-400",
                          isItemDisabled && "opacity-40"
                        )}
                      >
                        <span className="mr-2 text-2xl shrink-0">•</span>
                        <span>{item.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}





