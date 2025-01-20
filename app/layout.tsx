import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import 'boxicons/css/boxicons.min.css';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rafly | Portfolio",
  description: "Website Portofolio By M. Rafly Saputra",
  authors: [{ name: "M. Rafly Saputra", url: "https://github.com/Raflysaputra23" }],
  keywords: [
    "Rafly",
    "Portfolio",
    "Next JS",
    "React JS",
    "RafAI",
    "AI",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} bg-slate-950 overflow-x-hidden overflow-y-auto`}
      >
        {children}
      </body>
    </html>
  );
}
