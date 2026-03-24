"use client";

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b">


      <div className="max-w-[1920px] mx-auto h-[88px] px-4 sm:px-6 lg:px-12 flex items-center justify-between">

        <div className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="logo"
            width={89}
            height={89}
            className="object-contain"
          />
        </div>

        <ul className="hidden lg:flex items-center gap-8 xl:gap-12 font-bold text-[15px] xl:text-[16px] text-[#333333]">

          <li className="cursor-pointer hover:text-blue-600 transition">
            WHO WE SERVE
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            SOLUTIONS
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            RESOURCES
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            ABOUT US
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            CONTACT US
          </li>

        </ul>

        <div className="flex items-center gap-4 sm:gap-6 text-[#333333] font-bold text-[15px]">

          <Search size={22} className="cursor-pointer" />

          <div className="hidden md:flex items-center gap-1 cursor-pointer">
            <span>IND</span>
            <IoMdArrowDropdown size={18} />
          </div>
          <div className="hidden md:flex items-center gap-1 cursor-pointer">
            <span>ENGLISH</span>
            <IoMdArrowDropdown size={18} />
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white">

          <div className="px-6 py-6 space-y-4 text-[16px] font-bold text-[#333333]">

            <p className="border-b pb-2">WHO WE SERVE</p>
            <p className="border-b pb-2">SOLUTIONS</p>
            <p className="border-b pb-2">RESOURCES</p>
            <p className="border-b pb-2">ABOUT US</p>
            <p className="border-b pb-2">CONTACT US</p>

            <div className="flex justify-between pt-4">
              <span>IND</span>
              <span>ENGLISH</span>
            </div>

          </div>

        </div>
      )}
    </nav>
  );
}