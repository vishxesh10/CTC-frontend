"use client";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-around p-2 items-center max-sm:items-start bg-white sticky top-0 z-50">
      <div className="flex items-center">
        <Image src="/ctc-logo.svg" alt="Logo" width={180} height={150}
          className=" max-sm:w-[160px] max-sm:-ml-8 " />
        <h1 className="text-blue-700 font-bold text-xl -ml-8 max-sm:text-[16px] max-sm:-ml-20 max-sm:-mt-1 ">Chitra Trading Company</h1>
      </div>

      {/* Desktop Nav */}
      <nav className="flex gap-5 text-[18px] font-semibold max-sm:hidden">
        <Link href={"/"} className="hover:text-blue-600 max-sm:text-[15px] ">Home</Link>
        <Link href="/products" className="hover:text-blue-600 max-sm:text-[15px]"> Products</Link>
        <Link href="/about" className="hover:text-blue-600 max-sm:text-[15px]"> About</Link>
        <Link href="/contact" className="hover:text-blue-600 max-sm:text-[15px]"> Contact us</Link>
      </nav>
      {/* Mobile Menu Icon */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-8 h-8 -mr-10 "
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-blue-700 mb-1"></span>
        <span className="block w-6 h-0.5 bg-blue-700 mb-1"></span>
        <span className="block w-6 h-0.5 bg-blue-700"></span>
      </button>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="absolute top-16 right-4 bg-white shadow-lg rounded p-4 flex flex-col gap-3 text-[16px] font-semibold sm:hidden z-50">
          <Link href={"/"} className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/products" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact us</Link>
        </nav>
      )}
    </header>
  )
}