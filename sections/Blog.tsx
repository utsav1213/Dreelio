import Image from "next/image";

import featuredImage from "@/public/images/vp3FQ8cQAX82fBniYARy66SgROY (2).png";
import blog1 from "@/public/images/WkcfohGmGxdaZXOQkB8urlpwXg (1).png";
import blog2 from "@/public/images/gxb6A1j9Y0wXrhIBrMQD21JI (2).png";
import blog3 from "@/public/images/6MWnqkgs4vXAeKOFbYmLtdJtL8 (1).png";

import authorImage from "@/public/images/avatar-4.jpg";

const smallBlogs = [
  {
    image: blog1,
    title: "Top 10 digital agency software",
    tag: "TOOLS",
    tagColor: "bg-[#1F63B8]",
  },
  {
    image: blog2,
    title: "A complete guide to project success in 2026",
    tag: "INSIGHT",
    tagColor: "bg-[#D49B19]",
  },
  {
    image: blog3,
    title: "What Are Billable Hours",
    tag: "MANAGEMENT",
    tagColor: "bg-[#1DB35D]",
  },
];

const Blog = () => {
  return (

    <section className="bg-[#EAF2FB] ">
      <div className="mx-auto max-w-[1280px] px-4">
        {/* Heading */}
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#614A44]">
            Blog
          </p>

          <h2
            className="
              mt-4
              text-[38px]
              font-semibold
              leading-[0.95]
              tracking-[-0.04em]
              text-[#171111]

              sm:text-[48px]
              md:text-[56px]
              lg:text-[64px]
            "
          >
            Ideas to level-up
            <br />
            your freelance game
          </h2>
        </div>

        {/* Featured Blog */}
        <div
          className="
            mt-16
            overflow-hidden
            rounded-[32px]
            bg-[#F5F2EF]

            lg:grid
            lg:grid-cols-[1.1fr_1fr]
          "
        >
          {/* Image */}
          <div className="relative h-[300px] sm:h-[380px] lg:h-auto">
            <Image
              src={featuredImage}
              alt="Featured Blog"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col p-6 sm:p-8 lg:p-12">
            <div>
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-[#5E4A45]
                  px-4
                  py-2
                  text-[12px]
                  font-semibold
                  uppercase
                  text-white
                "
              >
                Must Read
              </span>

              <h3
                className="
                  mt-6
                  text-[32px]
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-[#171111]

                  sm:text-[42px]
                  lg:text-[54px]
                "
              >
                How to start a 100k
                <br />
                creative agency in 2025
              </h3>

              <p className="mt-5 max-w-[460px] text-[16px] leading-7 text-[#5F5F5F] sm:text-[18px]">
                Learn how to kickstart your journey into agency ownership
                with our comprehensive guide.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={authorImage}
                  alt="author"
                  className="h-[52px] w-[52px] rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-[#171111]">
                    Dhyna Phils
                  </h4>

                  <p className="text-[14px] text-[#8A8A8A]">
                    Head of Marketing
                  </p>
                </div>
              </div>

              <span
                className="
                  shrink-0
                  rounded-full
                  bg-[#DB622E]
                  px-4
                  py-2
                  text-[11px]
                  font-semibold
                  uppercase
                  text-white
                "
              >
                Featured
              </span>
            </div>
          </div>
        </div>

        {/* Small Blogs */}
        <div
          className="
            mt-8
            grid
            gap-6

            md:grid-cols-1
            lg:grid-cols-3
          "
        >
          {smallBlogs.map((blog, index) => (
            <div key={index}>
              {/* Image */}
              <div className="overflow-hidden rounded-[28px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105

                    h-[170px]
                    sm:h-[220px]
                    md:h-[190px]
                    lg:h-[260px]
                  "
                />
              </div>

              {/* Content */}
              <div className="mt-4 flex items-start justify-between gap-4">
                <h3
                  className="
            
                    text-[24px]
                    font-semibold
                    leading-[1.1]
                    tracking-[-0.03em]
                    text-[#171111]

                    sm:text-[20px]
                  "
                >
                  {blog.title}
                </h3>

                <span
                  className={`
                    shrink-0
                    rounded-full
                    px-4
                    py-2
                    text-[11px]
                    font-semibold
                    uppercase
                    text-white

                    sm:text-[12px]
                    ${blog.tagColor}
                  `}
                >
                  {blog.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;