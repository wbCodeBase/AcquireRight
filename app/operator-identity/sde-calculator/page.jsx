"use client"

import FourthSection from '@/components/FourthSection';
import ToolLegend from '@/components/secondPage/ToolLegend';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import sandTimerPng from "@/public/images/sandTimerPng.png"
import checklist from "@/public/images/checklist.svg"
import Image from 'next/image';

const sdeCalcu = () => {

    const [activeMenu, setActiveMenu] = useState('')
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


    const menuItems = [
        { title: 'Home', slug: '/', hasSubmenu: false },
        { title: 'Product', slug: '/product', hasSubmenu: true },
        { title: 'Pricing', slug: '/pricing', hasSubmenu: false },
    ]


    const handleScroll = () => {
        const scrollTop = window.scrollY
        if (scrollTop > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }


    return (
        <>

            <header className={`bg-white font-nunito-sans sm:sticky sm:top-0 left-0 w-full z-40`}>
                <div className="sm:max-w-5xl w-full mx-auto">
                    <div className={`text-[#222222] flex items-center justify-between transition-all duration-300 ${isScrolled ? "lg:px-3 pt-3" : "lg:px-10 pt-10"} p-4`}>
                        <Link href="/" className="flex items-center py2 text-3xl md:text-4xl z-50">
                            <span className='font-bold'>Acquire</span>Right
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex space-x-8 items-center">
                            {menuItems.map((item) => (
                                <div key={item.title} className="relative group">
                                    <Link
                                        href={item.slug}
                                        onClick={() => setActiveMenu('')}
                                        className={`px-3 py-8 rounded-md text-xl font-semibold transition-colors duration-200 ${activeMenu === item.title ? 'text-orange-500' : ''
                                            }`}
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                            <Link href="/login" className="rounded-md text-xl font-semibold transition-colors duration-200">
                                Login
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden z-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span
                                    className={`block h-0.5 w-full bg-[#222222] transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                        }`}
                                />
                                <span
                                    className={`block h-0.5 w-full bg-[#222222] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                                        }`}
                                />
                                <span
                                    className={`block h-0.5 w-full bg-[#222222] transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={closeMobileMenu}
                    style={{ top: isScrolled ? '80px' : '96px' }}
                />

                {/* Mobile Menu */}
                <nav
                    className={`lg:hidden fixed left-0 right-0 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                        }`}
                    style={{ top: isScrolled ? '80px' : '96px' }}
                >
                    <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.slug}
                                onClick={closeMobileMenu}
                                className="block px-4 py-3 text-lg font-semibold text-[#222222] hover:text-orange-500 hover:bg-white/50 rounded-md transition-colors duration-200"
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Link
                            href="/login"
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-lg font-semibold text-[#222222] hover:text-orange-500 hover:bg-white/50 rounded-md transition-colors duration-200"
                        >
                            Login
                        </Link>
                    </div>
                </nav>
            </header>



            <section className="bg-[#f8f8f8] relative p-4 sm:p-6 lg:p-16">
                <div className=" max-w-4xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl font-bold text-ar-gray-700 mb-6 sm:mb-8">
                        SDE Calculator
                    </h1>

                    <Image src={sandTimerPng} alt='sandTimer' className='absolute -right-15' />

                    <div className="space-y-6 text-ar-gray-700">

                        {/* First Card */}
                        <div className="bg-white rounded-xl border border-gray-300 md:p-10 p-6 shadow-sm z-10 relative">
                            <h2 className="text-xl sm:text-2xl  font-bold mb-3">
                                <span className='text-[#40588a]'> The SDE Calculator </span>can be used together with:
                            </h2>

                            <div className='text-lg space-y-4 sm:text-xl text-gray-600'>

                                <ul className="list-disc list-inside">
                                    <li>CEO Profile Match</li>
                                    <li>Industry Fit</li>
                                </ul>

                                <p className="leading-relaxed">
                                    Together they give you the complete information to build your Buy Box. To create your Buy Box, use the GPTs in the following order: 1- CEO Profile Match, 2- Industry Fit, 3- SDE Calculator.
                                </p>

                            </div>

                        </div>


                        {/* 2nd Card */}
                        <div className="bg-white rounded-xl border border-gray-300 md:p-10 p-6 shadow-sm">
                            <h2 className="text-xl sm:text-2xl  font-bold mb-3">
                                Why Use <span className='text-[#40588a]'> The SDE Calculator </span>
                            </h2>

                            <p className="leading-relaxed text-lg sm:text-xl text-gray-600">
                                The calculator trains your brain to think like an acquisition entrepreneur. You learn to connect industry economics, extraction rates, debt structure, and your personal income goals into one coherent framework. Over time, you stop seeing SDE as a random number and start understanding the underlying levers — improving your deal judgment, your financial intuition, and your overall operator IQ. (Bhushan, you asked Ai- how it saves you time, levels up your skills, screens and score deals. Then you took the output and decided what to use. Basically giving a little bit of context and benefits before getting into the video.
                            </p>

                            <div className='relative flex justify-center items-center h-48 sm:h-64 md:h-80 lg:h-[30rem] bg-[#eef3f6] max-w-4xl mx-auto mt-10  rounded-lg'>

                                <Image src={checklist} height={250} width={250} alt="play video image" />

                                <button className="absolute bottom-5 right-5 shrink-0 flex items-center gap-2 bg-ar-gray-600 hover:bg-gray-800 text-white p-1.5 pr-6  rounded-full text-lg font-medium transition-colors">
                                    <div className="p-2 bg-white rounded-full flex items-center justify-center">
                                        <FaPlay className='text-ar-gray-600 h-6 w-6' />
                                    </div>
                                    Play Video
                                </button>
                            </div>

                        </div>


                        {/* Third Card */}
                        <div className="bg-white rounded-xl border border-gray-300 md:p-10 p-6 shadow-sm">
                            <h2 className="text-xl sm:text-2xl  font-bold mb-3">
                                Video Walkthrough Of <span className='text-[#40588a]'> The SDE Calculator </span>
                            </h2>


                            <p className="leading-relaxed text-lg sm:text-xl text-gray-600">
                                A step-by-step visual walkthrough of using this tool
                            </p>



                            <div className='relative flex justify-center items-center h-48 sm:h-64 md:h-80 lg:h-[30rem] bg-[#eef3f6] max-w-4xl mx-auto mt-10  rounded-lg'>

                                <Image src={checklist} height={250} width={250} alt="play video image" className='' />

                                <button className="absolute bottom-5 right-5 shrink-0 flex items-center gap-2 bg-ar-gray-600 hover:bg-gray-800 text-white p-1.5 pr-6  rounded-full text-lg font-medium transition-colors">
                                    <div className="p-2 bg-white rounded-full flex items-center justify-center">
                                        <FaPlay className='text-ar-gray-600 h-6 w-6' />
                                    </div>
                                    Play Video
                                </button>
                            </div>

                        </div>


                        {/* Fourth Card */}
                        <div className="bg-white rounded-xl border border-gray-300 md:p-10 p-6 shadow-sm">
                            <h2 className="text-xl sm:text-2xl  font-bold mb-3">
                                How to Score a Deal Using the <span className='text-[#40588a]'> The SDE Calculator </span> Sheet
                            </h2>


                            <p className="leading-relaxed text-lg sm:text-xl text-gray-600">
                                A step-by-step visual walkthrough of using this tool
                            </p>



                            <div className='relative  flex justify-center items-center h-48 sm:h-64 md:h-80 lg:h-[30rem] bg-[#eef3f6] max-w-4xl mx-auto mt-10  rounded-lg'>

                                <Image src={checklist} height={250} width={250} alt="play video image" />


                                <button className="absolute bottom-5 right-5 shrink-0 flex items-center gap-2 bg-ar-gray-600 hover:bg-gray-800 text-white p-1.5 pr-6  rounded-full text-lg font-medium transition-colors">
                                    <div className="p-2 bg-white rounded-full flex items-center justify-center">
                                        <FaPlay className='text-ar-gray-600 h-6 w-6' />
                                    </div>
                                    Play Video
                                </button>
                            </div>

                        </div>


                    </div>

                </div>
            </section>




            <ToolLegend />



            <FourthSection />



        </>
    )
}

export default sdeCalcu