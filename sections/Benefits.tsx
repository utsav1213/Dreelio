import Image from "next/image";
import Button from "@/components/Button";
import {
  Clock3,
  ListTodo,
  FileText,
  ReceiptText,
  Wallet,
  TrendingUp,
  EyeClosed,
} from "lucide-react";

import financeImage from "@/public/images/thBhwyY3D4d8TRQEbrMU6zSvz8 (1).png";
import topImage from "@/public/images/W508S15xkXJdvalNWW9jYJSIKg (3).png";
import projectImage from "@/public/images/gUEFVWinvZ7dMZa0mUhNZWHNj3U.png";

const projectFeatures = [
  {
    label: "Tasks",
    icon: ListTodo,
  },
  {
    label: "Time tracking",
    icon: Clock3,
  },
  {
    label: "Timesheets",
    icon: FileText,
  },
  {
    label: "Reports",
    icon: ReceiptText,
  },
];

const financeFeatures = [
  {
    label: "Invoicing",
    icon: ReceiptText,
  },
  {
    label: "Budgets",
    icon: Wallet,
  },
  {
    label: "Forecasting",
    icon: TrendingUp,
  },
  {
    label: "Integrations",
    icon: ListTodo,
  },
];








const FeaturesSection = () => {

  const FeatureCard = ({
    eyebrow,
    title,
    description,
    image,
    imagePosition = "left",
    features,
  }: {
    eyebrow: string;
    title: string;
      description: string,
      image: any,
      imagePosition: 'left' | 'right',
      features: {
        label: string,
        icon: React.ElementType;
      }[];
    }) => {
    const imageFirst = imagePosition === "left";
    return (
      <div className="grid items-start gap-24 py-20 lg:grid-cols-2">
        <div
          className={imageFirst ? "order-2 lg:order-1" : "order-2 lg:order-2"}
        >
          <div className="rounded-[28px]  bg-gradient-to-b  from-[#9CC1E7] to-[#E7DDD5] p-6">
            <Image src={image} alt={title} className="w-full rounded-[20px]" />
          </div>
        </div>
        <div
  className={`
    ${
      imageFirst
        ? "order-1 lg:order-2"
        : "order-1 lg:order-1"
    }
    max-w-[520px]
    lg:pl-6
  `}
>
          
          <p className="text-[12px] font-semibold uppercase tracking-wide text-[#614A44]">
            {eyebrow}
          </p>

          <h3
            className="
    mt-3
    max-w-[520px]
    text-[54px]
    font-semibold
   leading-16
    tracking-[-0.04em]
    text-[#171111]
    
    xl:text-[60px]
  "
          >
            {title}
          </h3>

          <p
            className="
    mt-6
    max-w-[500px]
    text-[18px]
    leading-[1.6]
    text-[#5A5553]
  "
          >
            {description}
          </p>

          <Button className="mt-8">Try Dreelio free</Button>
          <div className="mt-10 grid max-w-[360px] grid-cols-2 gap-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
                    flex
                    h-[42px]
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-[#D8D2CC]
                    px-4
                    text-[13px]
                    font-medium
                    text-[#4E4E4E]
                    whitespace-nowrap
                  "
                >
                  <Icon size={14} strokeWidth={1.8} className="shrink-0" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };



  return (
    <section className="py-2 lg:py-4 bg-[#ECE9E5]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-[700px] mx-auto">
          <p className="text-[15px] font-semibold uppercase tracking-tight text-[#614A44]">
            Seamless across devices
          </p>
          <h2 className="mt-4 text-[42px] font-semibold leading-[1] tracking-tight text-[#171111] md:text-[54px] lg:text-[60px]">
            Work from anywhere,
            <br />
            stay in sync
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-[980px]">
          <div
            className="
    absolute
    bottom-8
    left-1/2
    -translate-x-1/2
    flex
    gap-2
    rounded-full
    border border-white/20
    bg-white/10
    p-2
    backdrop-blur-xl
  "
          >
            <button className="rounded-full bg-black px-8 py-4 text-white font-semibold whitespace-nowrap">
              Mobile App
            </button>

            <button
              className="
      rounded-full
      bg-white/10
      px-8
      py-4
      text-white
      backdrop-blur-md
      border border-white/10
      font-semibold
   whitespace-nowrap
      "
            >
              Web App
            </button>
          </div>
          <Image
            src={topImage}
            alt="topImage"
            className="w-full rounded-[28px] object-cover"
          />
        </div>
        {/* Cards */}
        <FeatureCard
          eyebrow="PROJECT MANAGEMENT"
          title="Keep every project moving forward"
          description="Plan, assign, and deliver your work - all in one place. With smart task tracking, deadlines and real-time progress, you stay organized and clients stay confident."
          image={projectImage}
          imagePosition="left"
          features={projectFeatures}
        />
        <FeatureCard
          eyebrow="FINANCIAL MANAGEMENT"
          title="Track income, get paid, stress less"
          description="Create branded invoices, log expenses, and keep tabs on your earnings. Whether you bill hourly or per project, everything's automated and tax-friendly."
          image={financeImage}
          imagePosition="right"
          features={financeFeatures}
        />
      </div>
    </section>
  );}
export default FeaturesSection

