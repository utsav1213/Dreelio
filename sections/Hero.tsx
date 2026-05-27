import Image from "next/image";
import Button from "@/components/Button";
import dashboardImage from "@/public/images/JeI7uULY0av9DxD7q7NVLTuoNc (3).png";
import cloudImage from "@/public/images/dashboard.png";
const Hero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-32
        pb-24
        lg:pt-40

        bg-[linear-gradient(to_bottom,_#9CC1E7_0%,_#9CC1E7_68%,_#E3E1E1_100%)]
      "
    >
      {/* Left Cloud */}
      <div
        className="
    absolute
    left-[-100px]
    top-[220px]
    hidden
    lg:block
    z-0
  "
      >
        <Image
          src={cloudImage}
          alt="cloud"
          className="w-[220px] xl:w-[260px]"
        />
      </div>

      {/* Right Cloud */}
      <div
        className="
    absolute
    right-[-100px]
    top-[220px]
    hidden
    lg:block
    z-0
  "
      >
        <Image
          src={cloudImage}
          alt="cloud"
          className="w-[220px] xl:w-[260px]"
        />
      </div>
   

      <div className="relative z-10 mx-auto max-w-[1280px] px-4">
        {/* Content */}
        <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
          {/* Heading */}
          <h1
            className="
              max-w-[340px]
              text-[44px]
              font-semibold
              leading-[0.96]
              tracking-[-0.04em]
              text-[#171111]

              sm:max-w-[520px]
              sm:text-[58px]

              md:max-w-[700px]
              md:text-[68px]

              lg:max-w-[820px]
              lg:text-[76px]

              xl:text-[84px]
            "
          >
            Run your freelance business like a pro
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-[650px]
              text-[16px]
              leading-[1.55]
              text-[#5E5E5E]

              sm:text-[17px]
              lg:text-[18px]
            "
          >
            All-in-one platform for managing clients, projects, and payments
            without the chaos. From first contract to final invoice, we&apos;ve
            got your back.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button>Try Dreelio free</Button>

            <Button
              variant="secondary"
              className="
                bg-[#d8e3ef]
                text-[#171111]
                hover:bg-[#cfdcea]
              "
            >
              See features
            </Button>
          </div>
        </div>

        {/* Dashboard */}
        <div className="relative z-20 mx-auto mt-16 max-w-[1280px]">
          <Image
            src={dashboardImage}
            alt="Dashboard preview"
            className="w-full rounded-[28px] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
