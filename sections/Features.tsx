import Image from "next/image";
import { Globe, Languages, Eye } from "lucide-react";

import leftCardImage from "@/public/icons/o5PFg7LTymdZ6P4tuEGy4oFUFzw.svg";

import icon1 from "@/public/icons/3KGY9KbY0xx6nriJohA0sGcmC80.svg";
import icon3 from "@/public/icons/7z8nIe5VNDZRfkorYvrXVIwyKac.svg";
import icon4 from "@/public/icons/CETEJNIiyGnwauuXU1kWh7qEVg.svg";
import icon5 from "@/public/icons/G0nzyLwjIqnhroSjOYxRMDHQ0dI.svg";
import icon6 from "@/public/icons/PQwDHpHHo6LkBn288aRKPox3tY.svg";

const integrations = [
  icon1,
  icon3,
  icon4,
  icon5,
  icon6,
  icon1,
  icon3,
  icon4,
  icon5,
  icon6,
];

const bottomCards = [
  {
    title: "Collaborate in realtime",
    description:
      "Keep every conversation in sync use comments, messages, and project chats to stay on the same page.",
    icon: Globe,
  },
  {
    title: "Speaks your language",
    description:
      "Set your language, currency, time, and date preferences for a seamless experience that feels truly local.",
    icon: Languages,
  },
  {
    title: "View things your way",
    description:
      "Easily toggle between various views, including kanban, cards, list, table, timeline, and calendar.",
    icon: Eye,
  },
];

const FeatureGrid = () => {
  return (
    <section className="bg-[#ECE9E5]">
      <div className="mx-auto max-w-[1280px] px-4">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#614A44]">
            Features
          </p>

          <h2 className="mt-4 text-[42px] font-semibold leading-[0.95] tracking-[-0.04em] text-[#171111] md:text-[56px] lg:text-[64px]">
            Built for freelancers,
            <br />
            powered by simplicity
          </h2>
        </div>

        {/* Top Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* LEFT CARD */}
          <div className="rounded-[28px] bg-[#E8E2DC] p-5 lg:p-6">
            <h3 className="max-w-[460px] text-[24px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#171111] lg:text-[28px]">
              Smart, flexible, and built around your business workflow
            </h3>

            <div className="mt-8 flex min-h-[320px] items-center justify-center">
              <Image
                src={leftCardImage}
                alt="Customization UI"
                className="w-full rounded-[20px]"
              />
            </div>

            <div className="mt-7">
              <h4 className="text-[16px] font-semibold text-[#171111]">
                Personalize every detail.
              </h4>

              <p className="mt-2 text-[15px] leading-[1.65] text-[#5E5E5E]">
                From branding and interface layout to colors and menus, so
                Dreelio feels like an extension of your brand.
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[28px] bg-[#E8E2DC] p-5 lg:p-6">
            <h3 className="max-w-[460px] text-[24px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#171111] lg:text-[28px]">
              Integrates seamlessly with the tools you already use
            </h3>

            {/* Integration Grid */}
            <div
              className="
    mt-7
    grid
    min-h-[320px]
    grid-cols-5
    content-center
    justify-items-center
    gap-3
  "
            >
              {integrations.map((icon, index) => (
                <div
                  key={index}
                  className="
        h-[58px]
        w-[58px]

        sm:h-[64px]
        sm:w-[64px]

        
        overflow-hidden
        rounded-[16px]
        bg-[#F7F4F1]
        shrink-0
      "
                >
                  <Image
                    src={icon}
                    alt={`integration-${index}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Bottom Content */}
            <div className="mt-8">
              <h4 className="text-[16px] font-semibold text-[#171111]">
                Seamless integrations.
              </h4>

              <p className="mt-2 text-[15px] leading-[1.65] text-[#5E5E5E]">
                Plug Dreelio into the tools you love. Set up automations, sync
                your data, and make your systems work smarter together.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-6 grid gap-6  lg:grid-cols-3">
          {bottomCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div key={index} className="rounded-[28px] bg-[#E8E2DC] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4EFEA]">
                  <Icon size={20} className="text-[#171111]" />
                </div>

                <h3 className="mt-8 text-[26px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#171111]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[15px] leading-[1.7] text-[#5E5E5E]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
