import Image from "next/image";
import Link from "next/link";

import logoImage from "@/public/images/2Ej8Skea1eSs8GzApuNwBRh3oFU.png";
import linkedinLogo from "@/public/images/Twitter.png";
import twitterLogo from "@/public/images/Twitter.png";

const pageLinks = ["Home", "Features", "Pricing", "Blog"];

const infoLinks = ["Contact", "Privacy", "Terms of use", "404"];

const Footer = () => {
  return (
    <footer className="bg-[#DCEBFB] px-4 pb-8">
      <div
        className="
          mx-auto
          max-w-[1280px]
          rounded-[36px]
          border
          border-[#C9D9E8]
          bg-[#DCEBFB]
          p-8
          md:p-10
        "
      >
        {/* Top */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Left */}
          <div className="max-w-[380px]">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image src={logoImage} alt="logo" width={22} height={22} />

              <span className="text-[26px] font-semibold text-[#171111]">
                Dreelio
              </span>
            </div>

            {/* Description */}
            <p className="mt-5 text-[16px] leading-7 text-[#5F5F5F]">
              Your favourite business management software. Built for early
              startup founders.
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              <Link
                href="#"
                className="
                  flex
                  h-[46px]
                  w-[46px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#171111]
                "
              >
                <Image
                  src={linkedinLogo}
                  alt="linkedin"
                  className="h-[18px] w-[18px] object-contain"
                />
              </Link>

              <Link
                href="#"
                className="
                  flex
                  h-[46px]
                  w-[46px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#171111]
                "
              >
                <Image
                  src={twitterLogo}
                  alt="twitter"
                  className="h-[18px] w-[18px] object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Right Links */}
          <div className="grid grid-cols-2 gap-16 md:gap-28">
            {/* Pages */}
            <div>
              <h3 className="text-[14px] font-semibold uppercase text-[#171111]">
                Pages
              </h3>

              <div className="mt-6 flex flex-col gap-5">
                {pageLinks.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="
                      text-[16px]
                      text-[#4E4E4E]
                      transition-colors
                      hover:text-black
                    "
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Information */}
            <div>
              <h3 className="text-[14px] font-semibold uppercase text-[#171111]">
                Information
              </h3>

              <div className="mt-6 flex flex-col gap-5">
                {infoLinks.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="
                      text-[16px]
                      text-[#4E4E4E]
                      transition-colors
                      hover:text-black
                    "
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-[#C6D5E3]" />

        {/* Bottom */}
        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-between
            gap-4
            text-center

            md:flex-row
          "
        >
          <p className="text-[15px] text-[#5F5F5F]">
            © 2025 Dreelio. Created by{" "}
            <span className="font-semibold text-[#171111]">Leon Chike</span>
          </p>

          <p className="text-[15px] text-[#5F5F5F]">Built in Framer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
