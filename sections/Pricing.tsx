"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/Button";

const Pricing = () => {
  const [billing, setBilling] = useState<"annual" | "monthly">("annual");

  const premiumPrice = billing === "annual" ? "$87/mo" : "$109/mo";

  return (
    <section className="bg-[#EAF2FB] py-28">
      <div className="mx-auto max-w-[1280px] px-4">
        {/* Heading */}
        <div className="mx-auto max-w-[600px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#614A44]">
            Pricing
          </p>

          <h2
            className="
              mt-4
              text-[42px]
              font-semibold
              leading-[0.95]
              tracking-[-0.04em]
              text-[#171111]
              md:text-[56px]
              lg:text-[64px]
            "
          >
            Simple plans
            <br />
            for serious work
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {/* LEFT CARD */}
          <div
            className="
              flex
              min-h-[560px]
              flex-col
              rounded-[32px]
              bg-[#F5F2EF]
              p-8
              pt-[92px]
            "
          >
            <p className="text-[22px] text-[#4D4D4D]">Dreelio Basic</p>

            <h3 className="mt-4 text-[58px] font-semibold leading-none text-[#171111]">
              Free
            </h3>

            <p className="mt-5 text-[17px] text-[#5F5F5F]">
              For solo use with light needs.
            </p>

            <div className="mt-8 mb-4 space-y-5">
              {[
                "Unlimited projects",
                "Unlimited clients",
                "Time tracking",
                "CRM",
                "iOS & Android app",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check size={18} />
                  <span className="text-[16px] text-[#4E4E4E]">{item}</span>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              className="mt-auto w-full bg-[#ECE7E2] text-[#171111] hover:bg-[#E2DDD7]"
            >
              Try Freelio free
            </Button>
          </div>

          {/* MIDDLE CARD */}
          <div
            className="
              flex
              min-h-[560px]
              flex-col
              rounded-[32px]
              border-[3px]
              border-[#79AEEA]
              bg-[#C7DCF3]
              p-5
            "
          >
            {/* Toggle */}
            <div className="rounded-full bg-[#E6E0D8] p-1">
              <div className="grid grid-cols-2 rounded-full">
                <button
                  onClick={() => setBilling("annual")}
                  className={`
                    rounded-full
                    py-3
                    text-[14px]
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      billing === "annual"
                        ? "bg-white shadow-sm text-[#171111]"
                        : "text-[#5E5E5E]"
                    }
                  `}
                >
                  Annually
                </button>

                <button
                  onClick={() => setBilling("monthly")}
                  className={`
                    rounded-full
                    py-3
                    text-[14px]
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      billing === "monthly"
                        ? "bg-white shadow-sm text-[#171111]"
                        : "text-[#5E5E5E]"
                    }
                  `}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Premium Content */}
            <div className="flex flex-1 flex-col px-4 pt-6">
              <div className="flex items-center gap-3">
                <p className="text-[22px] text-[#4D4D4D]">Dreelio Premium</p>

                <span className="rounded-full bg-[#A9F2B5] px-3 py-1 text-[12px] font-semibold text-[#129A3A]">
                  Save 20%
                </span>
              </div>

              <h3 className="mt-4 text-[58px] font-semibold leading-none text-[#171111]">
                {premiumPrice}
              </h3>

              <p className="mt-5 text-[17px] text-[#5F5F5F]">
                For pro use with light needs.
              </p>

              <div className="mt-8 mb-4 space-y-5">
                {[
                  "Everything in Basic",
                  "Invoices & payments",
                  "Expense tracking",
                  "Income tracking",
                  "Scheduling",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check size={18} />
                    <span className="text-[16px] text-[#4E4E4E]">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-auto w-full">Get started</Button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
              flex
              min-h-[560px]
              flex-col
              rounded-[32px]
              bg-[#F5F2EF]
              p-8
              pt-[92px]
            "
          >
            <p className="text-[22px] text-[#4D4D4D]">Dreelio Enterprise</p>

            <h3 className="mt-4 text-[58px] font-semibold leading-none text-[#171111]">
              Flexible
            </h3>

            <p className="mt-5 text-[17px] text-[#5F5F5F]">
              For team use with light needs.
            </p>

            <div className="mt-8 mb-4 space-y-5">
              {[
                "Everything in Premium",
                "Custom data import",
                "Advanced onboarding",
                "Hubspot integration",
                "Timesheets",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check size={18} />
                  <span className="text-[16px] text-[#4E4E4E]">{item}</span>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              className="mt-auto w-full bg-[#ECE7E2] text-[#171111] hover:bg-[#E2DDD7]"
            >
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
