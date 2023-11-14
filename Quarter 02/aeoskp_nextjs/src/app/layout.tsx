import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* =======================================  Header ======================================= */}
        <header>
          <div className=" bg-gray-1000">

            <div className=" text-white font-semibold px-3 py-1">
              <h1 className="">Rizwan Riaz Assistant Education Officer</h1>
            </div>

            {/* bg-[#066700] */}
            <div className="container  grid grid-cols-[auto,auto] bg-[#2F4F4F] min-h-fit min-w-full items-center">
              <div className="flex flex-wrap justify-around items-center ">

                <Link href="/"><img  src = "markazlogo.png" className="w-12 h-12 "/></Link>
                <Link href="/" className="hover:text-[#62ff4d]">Home</Link>
                <Link href="/teachercorner" className="hover:text-[#62ff4d]">Teachers Corner</Link>
                <Link href="/students_corner" className="hover:text-[#62ff4d]">Students Corner</Link>
                <Link href="/add_result" className="hover:text-[#62ff4d]">Markaz Ranking</Link>
                <Link href="/videos" className="hover:text-[#62ff4d]">Videos & Links</Link>
                <Link href="/aeoscorner" className="hover:text-[#62ff4d]">AEOs Corner</Link>
                <Link href="/students_enrollment/abc " className="hover:text-[#62ff4d]">Downloads</Link>
              </div>


              <div className="items-center flex px-3 justify-self-end">
                <Link href="/login" className="hover:text-[#ff4d4d]">Register/Login</Link>
              </div>

              
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}