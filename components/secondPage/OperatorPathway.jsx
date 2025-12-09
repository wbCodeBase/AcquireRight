import React from 'react';
import { FaPlay } from "react-icons/fa";


export default function OperatorPathway() {
    return (
        <div className="bg-[#f8f8f8] p-4 sm:p-6 lg:p-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold text-ar-gray-700 mb-6 sm:mb-8">
                    Operator Identity Pathway
                </h1>

                <div className="space-y-6 text-ar-gray-700">

                    {/* First Card */}
                    <div className="bg-white rounded-xl border border-gray-300 md:p-10 p-6 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3">
                            1. Define Your Operator Profile
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">
                            Discover your natural leadership instincts, decision-making style, and the environments where you thrive.
                        </p>

                        <div className="flex items-center flex-wrap md:flex-nowrap justify-start gap-3">
                            <div className="flex1">
                                <p className="text-sm sm:text-md font-medium leading-tight text-gray-900 bg-[#eef3f6] p-4 rounded-2xl">
                                    <span className="font-bold">Tool:</span> Operator Fit Scoring Tool — Instantly assess how well a business fits your leadership style.
                                </p>
                            </div>
                            <button className="shrink-0 flex items-center gap-2 bg-ar-gray-600 hover:bg-gray-800 text-white p-1.5 pr-6  rounded-full text-lg font-medium transition-colors">
                                <div className="p-2 bg-white rounded-full flex items-center justify-center">
                                    <FaPlay className='text-ar-gray-600 h-6 w-6' />
                                </div>
                                See It in Action
                            </button>
                        </div>
                    </div>


                    {/* 2nd Card */}
                    <div className="bg-white rounded-xl border border-gray-300 md:p-10 p-6 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3">
                            2. Define Your Operator Profile
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">
                            Discover your natural leadership instincts, decision-making style, and the environments where you thrive.
                        </p>





                        <div className="flex items-center flex-wrap md:flex-nowrap justify-start gap-3">
                            <div className="flex1">
                                <p className="text-sm sm:text-md font-medium leading-tight text-gray-900 bg-[#eef3f6] p-4 rounded-2xl">
                                    <span className="font-bold">Tool:</span> Operator Fit Scoring Tool — Instantly assess how well a business fits your leadership style.
                                </p>
                            </div>
                            <div className="flex1">
                                <p className="text-sm sm:text-md font-medium leading-tight text-gray-900 bg-[#eef3f6] p-4 rounded-2xl">
                                    <span className="font-bold">Tool:</span> Operator Fit Scoring Tool — Instantly assess how well a business fits your leadership style.
                                </p>
                            </div>
                        </div>



                    </div>


                    {/* 3rd Card */}
                    <div className="bg-white rounded-xl border border-gray-300 md:p-10 p-6 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3">
                            3. Define Your Operator Profile
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">
                            Discover your natural leadership instincts, decision-making style, and the environments where you thrive.
                        </p>

                        <div className="flex items-center flex-wrap md:flex-nowrap justify-start gap-3">
                            <div className="flex1">
                                <p className="text-sm sm:text-md font-medium leading-tight text-gray-900 bg-[#eef3f6] p-4 rounded-2xl">
                                    <span className="font-bold">Tool:</span> Operator Fit Scoring Tool — Instantly assess how well a business fits your leadership style.
                                </p>
                            </div>
                            <button className="flex-shrink-0 flex items-center gap-2 bg-ar-gray-600 hover:bg-gray-800 text-white p-1.5 pr-6  rounded-full text-lg font-medium transition-colors">
                                <div className="p-2 bg-white rounded-full flex items-center justify-center">
                                    <FaPlay className='text-ar-gray-600 h-6 w-6' />
                                </div>
                                See It in Action
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}