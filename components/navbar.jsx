import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="flex justify-center gap-96 p-2 items-center bg-white">
    <div className="flex items-center">
      <Image src="/ctc-logo.svg" alt="Logo" width={170} height={150}
        className="logo" />
      <h1 className="text-blue-700 font-bold text-xl ">Chitra Trading Company</h1>
    </div>
    <nav className="flex gap-5 text-[18px] font-semibold ">
      <Link href={"/"}>Home</Link>
      <Link href="/products"> Products</Link>
      <Link href="/about"> About</Link>
      <Link href="/contact"> Contact us</Link>
    </nav>
    </header>
  )
}