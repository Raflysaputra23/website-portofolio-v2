"use client"

import { Tillana } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

const tillana = Tillana({
  subsets: ["latin"],
  weight: ["400"],
});



const NavBar = ({ Links }: { Links: React.ReactNode[] }) => {
  const useWaktu = useRef<HTMLDivElement>(null);
    const parseWaktu = (waktu: number) => {
      return (waktu > 9) ? `${waktu}` : `0${waktu}`
    }
  
    const interval = setInterval(() => {
      if (useWaktu.current) {
        const date = new Date();
        const hours = parseWaktu(date.getHours());
        const minutes = parseWaktu(date.getMinutes());
        const seconds = parseWaktu(date.getSeconds());
        useWaktu.current.innerText = `${hours}:${minutes}:${seconds}`;
      }
  
      return () => clearInterval(interval);
    }, 1000);

  return (
    <nav className="container max-w-6xl w-11/12 px-4 py-3 mx-auto my-3 rounded-md shadow-md bg-slate-900 text-white flex justify-between items-center">
        <section className="flex items-center gap-2 flex-grow">
            <Image src="/logo.png" alt="logo" width={30} height={30} />
            <h1 className={`inherit text-lg ${tillana.className}`}> RafAI</h1>
        </section>
        <section className="items-center justify-end gap-3 flex-grow hidden lg:flex">
            {Links.map((link) => link )}
        </section>
        <section ref={useWaktu} className="w-24 py-2 rounded-md bg-slate-800 border border-slate-700 text-white flex items-center justify-center lg:hidden">
          00:00:00
        </section>
    </nav>
  )
}

export default NavBar;
