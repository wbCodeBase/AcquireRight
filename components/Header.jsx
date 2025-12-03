'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'


const menuItems = [
  { title: 'Home', slug: '/', hasSubmenu: false },
  { title: 'Product', slug: '/product', hasSubmenu: true },
  { title: 'Pricing', slug: '/pricing', hasSubmenu: false },
  // { title: 'Contact Us', slug: '/contact-us', hasSubmenu: false },
]



export default function Header() {


  const [activeMenu, setActiveMenu] = useState('')

  const [isScrolled, setIsScrolled] = useState(false);


  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <header className={`${isScrolled ? "bg-gradient-to-r from-[#fffafa] to-[#e8e0e0]" : "bg-gradient-to-r from-[#fffafa] to-[#e8e0e0]"} font-nunito-sans sm:sticky sm:top-0 left-0 w-full z-40`}>

      <div className="sm:max-w-7xl w-full mx-auto">
        <div className={`text-[#222222] flex items-center justify-between transition-all duration-300 ${isScrolled ? "lg:p-3" : "lg:p-10"} p-4`}>
          <Link href="/" className="flex items-center py-2 text-3xl md:text-4xl">
            <span className='font-bold'>Acquire</span>Right
          </Link>

          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group">
                <Link href={item.slug} onClick={() => setActiveMenu('')}
                  className={`px-3 py-8 rounded-md text-xl font-semibold transition-colors duration-200 ${activeMenu === item.title ? 'text-orange-500' : ''
                    }`}
                >
                  {item.title}
                </Link>
              </div>
            ))}

            <Link href="/login" className={`rounded-md text-xl font-semibold transition-colors duration-200`}>
              Login
            </Link>

          </nav>

        </div>
      </div>


    </header>
  )
}














// import { SearchConsole } from "../search-console"

// export default function Page() {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center p-4">
//       <div className="w-full max-w-md space-y-4">
//         <h1 className="text-2xl font-bold text-center">Search Console</h1>
//         <p className="text-center text-muted-foreground">
//           Press <kbd className="px-1 py-0.5 text-xs border rounded-md">⌘K</kbd> to open the search console
//         </p>
//         <div className="flex justify-center">
//           <SearchConsole />
//         </div>
//       </div>
//     </div>
//   )
// }















