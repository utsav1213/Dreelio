import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const openRunde = localFont({
  src: [
    {
      path: "../public/fonts/OpenRunde-Regular-BF64ee9c6978988.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/OpenRunde-Medium-BF64ee9c695513a.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/OpenRunde-Semibold-BF64ee9c69788f3.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/OpenRunde-Bold-BF64ee9c696534f.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-open-runde",
});

export const metadata: Metadata = {
  title: "Dreelio",
  description: "Freelance business landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${openRunde.variable} h-full antialiased`}
    >
      <body
        cz-shortcut-listen="true"
        className={`${openRunde.className} min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
