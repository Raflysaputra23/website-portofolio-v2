"use client";

import { Tillana } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const tillana = Tillana({
  subsets: ["latin"],
  weight: ["400"],
});

const NavBar = () => {
  const useWaktu = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState({about: false, features: false, contact: false, home: false});
  const parseWaktu = (waktu: number) => {
    return waktu > 9 ? `${waktu}` : `0${waktu}`;
  };

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
        <a
          key={1}
          href="#"
          onClick={() => setActive({about: false, features: false, contact: false, home: true})}
          className={`text-sm h-10 w-10 flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none shadow-blue-950 hover:bg-blue-900 ${active.home ? "bg-blue-900" : "bg-transparent"}`}
        >
          <i className="bx bx-home text-xl"></i>
        </a>
        <a
          key={2}
          href="#about"
          onClick={() => setActive({about: true, features: false, contact: false, home: false})}
          className={`text-sm h-10 w-10 flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none shadow-blue-950 hover:bg-blue-900 ${active.about ? "bg-blue-900" : "bg-transparent"}`}
        >
          <i className="bx bx-user-voice text-xl"></i>
        </a>
        <a
          key={3}
          href="#features"
          onClick={() => setActive({about: false, features: true, contact: false, home: false})}
          className={`text-sm h-10 w-10 flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none shadow-blue-950 hover:bg-blue-900 ${active.features ? "bg-blue-900" : "bg-transparent"}`}
        >
          <i className="bx bx-hive text-xl"></i>
        </a>
        <a
          key={4}
          href="#contact"
          onClick={() => setActive({about: false, features: false, contact: true, home: false})}
          className={`text-sm h-10 w-10 flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none shadow-blue-950 hover:bg-blue-900 ${active.contact ? "bg-blue-900" : "bg-transparent"}`}
        >
          <i className="bx bx-phone-call text-xl"></i>
        </a>
      </section>
      <section
        ref={useWaktu}
        className="w-24 py-2 rounded-md bg-slate-800 border border-slate-700 text-white flex items-center justify-center lg:hidden"
      >
        00:00:00
      </section>
    </nav>
  );
};

export default NavBar;
