import clsx from "clsx"
import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?:string
}
const Button = ({children,variant="primary",size="md",className}:ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-full  transition-all duration-300 hover:scale-105 active:scale-95",
        {
          "bg-[#171111] text-white hover:backdrop-opacity-90 font-bold":
            variant === "primary",
          "bg-[#dfeaf7] text-[#171111] border border-[#cfdceb]":
            variant === "secondary",
          "bg-transparent text-[#cfdceb]": variant === "ghost",
        },
        {
          "px-8 py-4 text-sm md:text-base": size === "md",
          "px-10 py-5 text-base": size === "lg",
        },
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button