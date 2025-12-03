// components/navbar.jsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-1' : 'bg-white/90 backdrop-blur-sm py-2'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/Gemini_Generated_Image_wo3yg4wo3yg4wo3y.png" 
                alt="CTC Logo" 
                width={120} 
                height={50}
                className="mr-3 h-10 w-auto"
                priority
              />
              <h1 className="text-blue-700 font-bold text-lg hidden md:block">
                Chitra Trading
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col items-end">
              <span className={`block h-[2px] bg-blue-700 transition-all duration-300 ${
                isMenuOpen ? 'w-5 rotate-45 translate-y-[7px]' : 'w-5 mb-1.5'
              }`}></span>
              <span className={`block h-[2px] bg-blue-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'w-4 mb-1.5'
              }`}></span>
              <span className={`block h-[2px] bg-blue-700 transition-all duration-300 ${
                isMenuOpen ? 'w-5 -rotate-45 -translate-y-[7px]' : 'w-3'
              }`}></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-3">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-1.5 px-3 rounded text-sm ${
                    pathname === link.href
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}