import Image from "next/image";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    <footer className="bg-blue-950 w-full text-white flex max-sm:flex-col max-sm:justify-center justify-between">
        <div className="w-[600px] max-sm:w-72 p-10 max-sm:px-10 px-32 justify-between">
          <div className="flex gap-5 ">
            <Image src={"/ctc-logo.svg"} alt="logo" width={190} height={50}></Image>
            <p className="-ml-[160px] text-blue-600 text-xl font-bold">CTC</p>
            <h2 className="text-blue-600 m">chitra Trading Company</h2>
          </div>
          <p className="mt-5">Quality scientific instruments for schools, colleges, laboratories, and industries.</p>
        </div>
        <div className="w-[600px] max-sm:w-full max-sm:px-10 p-10 px-32">
          <h2 className="font-bold">Contacts</h2> <br />
          <p>Phone: +91 98965 91945</p>
          <p>Email : support@scitradesolutions.com</p>
          <div>
            {/* Social media icons can be added here */}
            <br />
            <p>Follow us on:</p>
            <div className="flex gap-3">
              <Link href={"#"}>Fb</Link>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center bg-blue-950 text-gray-400 max-sm:text-[13px]"> &copy; 2025 SciTrade Solutions. All rights reserved.</p>
      </>
  )}