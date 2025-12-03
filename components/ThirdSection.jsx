import { ArrowRight } from "lucide-react"

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
      icon: "🎩",
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
      icon: "🤝",
    },
    {
      title: "Business Clarity",
      description: "Know what to ask, and what to look for.",
      points: ["Tailored first-call plans", "Deep-dive follow-up questions", "A 2-3 year operator-ready plan"],
      bgColor: "bg-ar-pastal-gray-cyan",
      icon: "💭",
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
      icon: "🔍",
    },
  ]

  return (
    <main className="min-h-screen bg-ar-light-azure px-4 py-12 md:px-8 md:py-10">
      <div className="max-w-6xl mx-auto">


        {/* <section className='bg-ar-light-azure'>
        <div className='max-w-7xl mx-auto px-4 py-16'> */}

        <div className="text-center my-8 mb-12 text-ar-gray-700">
          <h2 className="text-2xl md:text-3xl md:font-bold font-medium mb-3 font-lora text-balance">
            The Four Pillars of a Successful Search
          </h2>
          <p className="text-lg md:text-xl font-medium mb-4 font-dm text-balance">
            Everything inside AcquireRight is organized around the four outcomes every searcher needs.
          </p>
        </div>



        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-sm">
              {/* Card Title */}
              <div className="px-6 py-8">
                <h3 className="md:text-2xl text-xl font-bold text-ar-gray-700 whitespace-pre-line">{card.title.replace(/ /g, "\n")}</h3>
              </div>

              {/* Icon Area */}
              <div className={`${card.bgColor} h-56 flex items-center justify-center`}>
                <span className="text-6xl">{card.icon}</span>
              </div>

              {/* Content Area */}
              <div className="p-2 pt-14 pb-12">
                {/* Description */}
                <p className="text-lg text-center font-bold text-ar-gray-700 mb-4 leading-relaxed">{card.description}</p>

                {/* Bullet Points */}
                <ul className="space-y2 text-lg mb-6 px-10">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="text-ar-gray-700 flex items-start gap-2">
                      <span className="text-[#666] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex justify-center items-center">
                  <button className="text-lg cursor-pointer font-bold text-ar-gray-700 hover:text-ar-gray-900 transition-colors flex items-center gap-1 group">
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







