import React from 'react';
import Image from 'next/image';

import checklist from "@/public/images/checklist.png";
import chemAtom from "@/public/images/chemAtom.png";
import sandtimer from "@/public/images/sandTimer.svg";



const featuresData = [
    {
        id: 1,
        title: "Saves You Time",
        image: sandtimer,
        imagePosition: "left",
        points: [
            "Discover your natural leadership instincts, decision-making style and the environments where you thrive.",
            "Discover your natural leadership instincts, decision-making style and the environments where you thrive.",
            "Discover your natural leadership instincts, decision-making style and the environments where you thrive."
        ]
    },
    {
        id: 2,
        title: "Levels Up Your Skills",
        image: chemAtom,
        imagePosition: "right",
        points: [
            "Discover your natural leadership instincts, decision-making style and the environments where you thrive.",
            "Discover your natural leadership instincts, decision-making style and the environments where you thrive.",
            "Discover your natural leadership instincts, decision-making style and the environments where you thrive."
        ]
    },
    {
        id: 3,
        title: "Helps you screen and score deals",
        image: checklist,
        imagePosition: "left",
        points: [
            "Discover your natural leadership instincts, decision-making style and the environments where you thrive.",
            "Discover your natural leadership instincts, decision-making style and the environments where you thrive.",
            "Discover your natural leadership instincts, decision-making style and the environments where you thrive."
        ]
    }
];






export default function ThisPathway() {
    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold text-ar-gray-700 mb-6 sm:mb-8">
                    How This Pathway...
                </h1>


                <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
                    {featuresData.map((feature) => (
                        <div
                            key={feature.id}
                            className={`flex flex-col ${feature.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
                                } items-center gap-6 md:gap-12`}
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/3 flex justify-center">
                                <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        height={250}
                                        width={250}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-2/3">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                    {feature.title}
                                </h2>
                                <ul className="space-y-2">
                                    {feature.points.map((point, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                                            <span className="text-gray-900 mt-1">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    );
}