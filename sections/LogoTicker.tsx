import Image from "next/image";

import logo1 from "@/public/icons/021VVvexJAvEOe3HzihhFr7Vc.svg";
import logo2 from "@/public/icons/GAPrNTGokhXDrpYlaBRMcEI1eb4.svg";
import logo3 from "@/public/icons/JLKCf0k33nXsBtTOLxbgoXjv6Ss.svg";
import logo4 from "@/public/icons/OMudghgJ8cOQBZy5AnYNjXwFYqo.svg";
import logo5 from "@/public/icons/x8lLoogiCtXVj0rROYScrZZvHMk.svg";

const logos = [logo1, logo2, logo3, logo4, logo5];

const LogoTicker = () => {
  return (
    <section className="bg-[#ECE9E5] pt-26 pb-16 lg:pt-28" >
      <div className="mx-auto mx-w-[1280px px-4]">
        <p className=" text-center text-[13px] font-medium text-[#6B6B6B]">
          
          Trusted by 7,000+ top startups, freelancers and studios
        </p>
        <div className="flex mt-6 justify-center items-center gap-8 md:gap-10 lg:gap-14 overflow-hidden ">
          {logos.map((logo, index) => (
            <Image key={index} src={logo} alt="logo" className="w-auto object-contain opacity-90" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
