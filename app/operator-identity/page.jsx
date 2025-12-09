'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'


import OperatorPathway from '@/components/secondPage/OperatorPathway';
import ThisPathway from '@/components/secondPage/ThisPathway';
import FourthSection from '@/components/FourthSection';
import ToolLegend from '@/components/secondPage/ToolLegend';
import Image from 'next/image';
import barsHat from "@/public/images/barsHat.svg"

const menuItems = [
    { title: 'Home', slug: '/', hasSubmenu: false },
    { title: 'Product', slug: '/product', hasSubmenu: true },
    { title: 'Pricing', slug: '/pricing', hasSubmenu: false },
]



const OperatorIdentity = () => {


    const [activeMenu, setActiveMenu] = useState('')
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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




            <div className="bg-ar-shadeof-blue flex items-center justify-center p-8">
                {/* <div className="max-w-4xl w-full"> */}
                <div className="container mx-auto sm:max-w-4xl py-8 sm:py-12 md:py-18">
                    <p className="text-sm uppercase tracking-wider text-gray-700 mb-6">
                        PILLAR 1 · OPERATOR IDENTITY
                    </p>

                    <h1 className="lg:text-4xl text-3xl text-[#3b3a3d] font-bold mb-12 leadingtight">
                        Build the clarity to choose a business <br /> you can actually lead.
                    </h1>

                    <div className="flex gap-6 items-start">
                        <div className="shrink-0">
                            <Image src={barsHat} alt='piller' height={55} width={55} />
                        </div>

                        <p className="text-gray-700 text-lg leading-tight">
                            This pillar helps you understand who you are as an operator, how you prefer to work, and which kinds of businesses fit your strengths—so your search stays focused on deals you can run confidently for the long term.
                        </p>
                    </div>
                </div>
            </div>


            <OperatorPathway />


            <ThisPathway />


            <ToolLegend />


            <FourthSection />


        </>
    )
}

export default OperatorIdentity