"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import avatar1 from "@/public/images/avatar-1.jpg";
import avatar2 from "@/public/images/avatar-2.jpg";
import avatar3 from "@/public/images/avatar-3.jpg";
import avatar4 from "@/public/images/avatar-4.jpg";

const reviews = [
  {
    text: `"Our team finally feels organized. Everything is in one place and moving fast."`,
    name: "Sarah Lee",
    role: "Founder, Studio One",
    image: avatar1,
    faded: true,
  },
  {
    text: `"We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs to stay pro."`,
    name: "Jane Jay Jay",
    role: "Project Manager, Google",
    image: avatar2,
  },
  {
    text: `"Managing projects used to mean spreadsheets, DMs, and missed invoices. This platform keeps our workflows tight and our clients impressed."`,
    name: "Amos Chen",
    role: "Art Director, Pentagram",
    image: avatar3,
  },
  {
    text: `"As a freelancer, I needed one place to manage everything. From invoices to tracking, getting paid feels beautifully simple."`,
    name: "Martha Punla",
    role: "VP Marketing, Meta",
    image: avatar4,
    faded: true,
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 2 : prev - 1));
  };

  return (
    <section className="overflow-hidden bg-[#ECE9E5] py-24">
      <div className="mx-auto max-w-[1280px] px-4">
        {/* Main Review */}
        <div className="mx-auto max-w-6xl  text-center">
          <h2
            className="
              text-[25px]
              font-medium
              leading-[1.08]
              tracking-[-0.04em]
              text-[#171111]
              
              md:text-[30px]
              lg:text-[72px]
            "
          >
            "Dreelio is by far the best agency tool I have ever used"
          </h2>

          <div className="mt-8 flex flex-col items-center">
            <Image
              src={avatar4}
              alt="Martha Punla"
              className="h-[72px] w-[72px] rounded-full object-cover"
            />

            <h4 className="mt-4 text-[22px] font-semibold text-[#171111]">
              Martha Punla
            </h4>

            <p className="text-[16px] text-[#8A8A8A]">VP Marketing, Meta</p>
          </div>
        </div>

        {/* Review Slider */}
        <div className="relative mt-20">
          {/* Left Button */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="
      absolute
      left-0
      top-1/2
      z-20
      flex
      h-12
      w-12
      -translate-y-1/2
      items-center
      justify-center
      rounded-full
      bg-[#C2BEB9]
      text-white
      shadow-lg
      transition-all
    "
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Right Button */}
          {currentIndex < reviews.length - 2 && (
            <button
              onClick={nextSlide}
              className="
      absolute
      right-0
      top-1/2
      z-20
      flex
      h-12
      w-12
      -translate-y-1/2
      items-center
      justify-center
      rounded-full
      bg-[#C2BEB9]
      text-white
      shadow-lg
      transition-all
    "
            >
              <ChevronRight size={22} />
            </button>
          )}

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 340}px)`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`
                    flex
                    min-h-[280px]
                    w-[320px]
                    shrink-0
                    flex-col
                    justify-between
                    rounded-[28px]
                    bg-[#F5F2EF]
                    p-7

                    md:w-[340px]
                    lg:w-[360px]

                    ${
                      index === 0 || index === reviews.length - 1
                        ? "lg:opacity-20"
                        : ""
                    }
                  `}
                >
                  {/* Text */}
                  <p className="text-[17px] leading-[1.7] text-[#171111]">
                    {review.text}
                  </p>

                  {/* Profile Bottom Aligned */}
                  <div className="mt-8 flex items-center gap-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      className="h-[56px] w-[56px] rounded-full object-cover"
                    />

                    <div>
                      <h4 className="font-semibold text-[#171111]">
                        {review.name}
                      </h4>

                      <p className="text-[14px] text-[#8A8A8A]">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
