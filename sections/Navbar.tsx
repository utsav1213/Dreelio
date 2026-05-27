"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "@/components/Button";
import logImage from "@/public/images/2Ej8Skea1eSs8GzApuNwBRh3oFU.png";

const navLinks = ["Features", "Benefits", "Pricing", "Blog", "Contact Us"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full px-4">
      <div className="mx-auto max-w-[1280px] py-5 lg:px-8">
        {/* Top Navbar */}
        <div
          className="
            flex items-center justify-between
            rounded-full
            bg-white/10
            px-5 py-4
            shadow-sm
            backdrop-blur-md

            lg:bg-transparent
            lg:px-0
            lg:py-0
            lg:shadow-none
            lg:backdrop-blur-none
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={logImage} height={24} width={24} alt="logo" />

            <span className="text-[20px] font-semibold text-[#171111]">
              Dreelio
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            {navLinks.map((link, index) => (
              <span
                key={index}
                className="
                  cursor-pointer
                  rounded-full
                  px-4 py-2
                  text-sm
                  font-medium
                  text-[#4f4f4f]
                  transition-all
                  duration-300
                  hover:bg-white/20
                  hover:text-black
                "
              >
                {link}
              </span>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center">
            {/* Desktop Button */}
            <div className="hidden lg:block">
              <Button>Try Dreelio free</Button>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X size={28} className="text-[#1f1717]" />
              ) : (
                <Menu size={28} className="text-[#1f1717]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              mt-4
              rounded-[32px]
              border
              border-white/30
              bg-white/40
              p-5
              shadow-xl
              backdrop-blur-md
              lg:hidden
            "
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className="
                    flex
                    h-12
                    items-center
                    justify-center
                    rounded-full
                    text-sm
                    font-medium
                    text-[#1f1717]
                    transition-all
                    duration-200
                    hover:bg-white/70
                  "
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button className="w-full rounded-full">Try Dreelio free</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
