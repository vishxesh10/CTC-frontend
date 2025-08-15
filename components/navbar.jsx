import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
  return (
    <header className="flex justify-around p-2 items-center bg-white sticky top-0 z-50">
    <div className="flex items-center">
      <Image src="/ctc-logo.svg" alt="Logo" width={180} height={150}
        className="logo" />
      <h1 className="text-blue-700 font-bold text-xl -ml-8 ">Chitra Trading Company</h1>
    </div>
    <nav className="flex gap-5 text-[18px] font-semibold ">
      <Link href={"/"} className="hover:text-blue-600">Home</Link>
      <Link href="/products" className="hover:text-blue-600"> Products</Link>
      <Link href="/about" className="hover:text-blue-600"> About</Link>
      <Link href="/contact" className="hover:text-blue-600"> Contact us</Link>
    </nav>
    </header>
    
  )
}