import youtubeLogo from "@/public/images/Youtube.png";
import twitterLogo from "@/public/images/Twitter.png";
import Button from "@/components/Button";
import Image from "next/image";

const communities = [
  {
    name: "X/Twitter",
    description:
      "Stay updated on new features and discover how others are using Dreelio.",
    followers: "15.2K FOLLOWERS",
    buttonText: "Follow us",
    icon: "twitter",
  },
  {
    name: "YouTube",
    description:
      "Tips, tutorials, and in-depth feature guides to inspire and enhance your Dreelio workflow.",
    followers: "32K SUBSCRIBERS",
    buttonText: "Subscribe",
    icon: "youtube",
  },
];

const Community = () => {
  return (
    <section className="relative overflow-hidden bg-[#DCEBFB] py-20 md:py-28">
      {/* Clouds */}
      <div className="pointer-events-none absolute bottom-0 left-0 opacity-90">
        <img
          src="/images/dashboard.png"
          alt="cloud"
          className="w-[180px] md:w-[260px]"
        />
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 opacity-90">
        <img
          src="/images/dashboard.png"
          alt="cloud"
          className="w-[180px] scale-x-[-1] md:w-[260px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#614A44]">
            Community
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
            "
          >
            Stay in the loop
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {communities.map((community, index) => (
            <div
              key={index}
              className="
                rounded-[32px]
                bg-[#F5F2EF]
                p-6
                sm:p-8
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                {/* Icon */}
                <div
                  className="
                    flex
                    h-[64px]
                    w-[64px]
                    items-center
                    justify-center
                    rounded-[18px]
                  
                  "
                >
                  {community.icon === "twitter" ? (
                    <Image
                      src={twitterLogo}
                      alt="Twitter"
                      className="h-[40px] w-[40px] object-contain"
                    />
                  ) : (
                    <Image
                      src={youtubeLogo}
                      alt="Youtube"
                      className="h-[40px] w-[40px] object-contain"
                    />
                  )}
                </div>

                {/* Followers */}
                <span className="text-[14px] font-medium uppercase text-[#8A8A8A]">
                  {community.followers}
                </span>
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-[32px] font-semibold text-[#171111]">
                  {community.name}
                </h3>

                <p className="mt-3 max-w-[520px] text-[16px] leading-7 text-[#5F5F5F]">
                  {community.description}
                </p>
              </div>

              {/* Button */}
              <Button
                variant="secondary"
                className="
                  mt-8
                  w-full
                  rounded-full
                  border
                  border-[#DDD6D0]
                  bg-transparent
                  text-[#171111]
                  hover:bg-[#ECE7E2]
                "
              >
                {community.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-24 max-w-[720px] text-center">
          <h2
            className="
              text-[40px]
              font-semibold
              leading-[0.95]
              tracking-[-0.04em]
              text-[#171111]

              sm:text-[52px]
              md:text-[64px]
            "
          >
            Ready to get started
          </h2>

          <p className="mx-auto mt-5 max-w-[500px] text-[17px] leading-7 text-[#5F5F5F]">
            Download Dreelio for free. No credit card required.
          </p>

          <Button className="mt-8 w-full sm:w-auto sm:px-10">
            Try Freelio free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
