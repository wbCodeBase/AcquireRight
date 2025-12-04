// 'use client'

// import React, { useState, useEffect } from 'react'
// import Link from 'next/link'


// const menuItems = [
//   { title: 'Home', slug: '/', hasSubmenu: false },
//   { title: 'Product', slug: '/product', hasSubmenu: true },
//   { title: 'Pricing', slug: '/pricing', hasSubmenu: false },
//   // { title: 'Contact Us', slug: '/contact-us', hasSubmenu: false },
// ]



// export default function Header() {


//   const [activeMenu, setActiveMenu] = useState('')

//   const [isScrolled, setIsScrolled] = useState(false);


//   const handleScroll = () => {
//     const scrollTop = window.scrollY;
//     if (scrollTop > 0) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);



//   return (
//     <header className={`${isScrolled ? "bg-gradient-to-r from-[#fffafa] to-[#e8e0e0]" : "bg-gradient-to-r from-[#fffafa] to-[#e8e0e0]"} font-nunito-sans sm:sticky sm:top-0 left-0 w-full z-40`}>

//       <div className="sm:max-w-7xl w-full mx-auto">
//         <div className={`text-[#222222] flex items-center justify-between transition-all duration-300 ${isScrolled ? "lg:p-3" : "lg:p-10"} p-4`}>
//           <Link href="/" className="flex items-center py-2 text-3xl md:text-4xl">
//             <span className='font-bold'>Acquire</span>Right
//           </Link>

//           <nav className="hidden lg:flex space-x-8">
//             {menuItems.map((item) => (
//               <div
//                 key={item.title}
//                 className="relative group">
//                 <Link href={item.slug} onClick={() => setActiveMenu('')}
//                   className={`px-3 py-8 rounded-md text-xl font-semibold transition-colors duration-200 ${activeMenu === item.title ? 'text-orange-500' : ''
//                     }`}
//                 >
//                   {item.title}
//                 </Link>
//               </div>
//             ))}

//             <Link href="/login" className={`rounded-md text-xl font-semibold transition-colors duration-200`}>
//               Login
//             </Link>

//           </nav>

//         </div>
//       </div>


//     </header>
//   )
// }










'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const menuItems = [
  { title: 'Home', slug: '/', hasSubmenu: false },
  { title: 'Product', slug: '/product', hasSubmenu: true },
  { title: 'Pricing', slug: '/pricing', hasSubmenu: false },
]

export default function Header() {
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
    <header className={`${isScrolled ? "bg-gradient-to-r from-[#fffafa] to-[#e8e0e0]" : "bg-gradient-to-r from-[#fffafa] to-[#e8e0e0]"} font-nunito-sans sm:sticky sm:top-0 left-0 w-full z-40`}>
      <div className="sm:max-w-7xl w-full mx-auto">
        <div className={`text-[#222222] flex items-center justify-between transition-all duration-300 ${isScrolled ? "lg:p-3" : "lg:p-10"} p-4`}>
          <Link href="/" className="flex items-center py-2 text-3xl md:text-4xl z-50">
            <span className='font-bold'>Acquire</span>Right
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.slug}
                  onClick={() => setActiveMenu('')}
                  className={`px-3 py-8 rounded-md text-xl font-semibold transition-colors duration-200 ${
                    activeMenu === item.title ? 'text-orange-500' : ''
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
                className={`block h-0.5 w-full bg-[#222222] transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#222222] transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#222222] transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        style={{ top: isScrolled ? '80px' : '96px' }}
      />

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden fixed left-0 right-0 bg-gradient-to-r from-[#fffafa] to-[#e8e0e0] shadow-lg transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
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
  )
}



