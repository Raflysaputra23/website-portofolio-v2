"use client";
import { Fragment, useEffect, useRef, useState } from "react";

const Aside = () => {
  const useWaktu = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);
  const [actives, setActives] = useState({about: false, features: false, contact: false, home: false});

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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Fragment>
      <aside className="fixed top-1/2 right-5 lg:right-16 lg:hidden transform -translate-y-1/2 flex flex-col items-center gap-2 py-3 text-slate-200 z-20">
      <a
          key={1}
          href="#"
          onClick={() => setActives({about: false, features: false, contact: false, home: true})}
          className={`text-sm h-10 w-10 flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none shadow-blue-950 hover:bg-blue-900 ${actives.home ? "bg-blue-900" : "bg-transparent"}`}
        >
          <i className="bx bx-home text-xl"></i>
        </a>
        <a
          key={2}
          href="#about"
          onClick={() => setActives({about: true, features: false, contact: false, home: false})}
          className={`text-sm h-10 w-10 flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none shadow-blue-950 hover:bg-blue-900 ${actives.about ? "bg-blue-900" : "bg-transparent"}`}
        >
          <i className="bx bx-user-voice text-xl"></i>
        </a>
        <a
          key={3}
          href="#features"
          onClick={() => setActives({about: false, features: true, contact: false, home: false})}
          className={`text-sm h-10 w-10 flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none shadow-blue-950 hover:bg-blue-900 ${actives.features ? "bg-blue-900" : "bg-transparent"}`}
        >
          <i className="bx bx-hive text-xl"></i>
        </a>
        <a
          key={4}
          href="#contact"
          onClick={() => setActives({about: false, features: false, contact: true, home: false})}
          className={`text-sm h-10 w-10 flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none shadow-blue-950 hover:bg-blue-900 ${actives.contact ? "bg-blue-900" : "bg-transparent"}`}
        >
          <i className="bx bx-phone-call text-xl"></i>
        </a>
      </aside>
      <aside
        ref={useWaktu}
        className={`w-24 py-2 rounded-md bg-slate-800 text-white items-center shadow-md justify-center hidden lg:flex fixed bottom-5 ${
          active ? "right-16" : "right-5"
        } transition z-20 backdrop-blur-sm bg-white/5`}
      >
        00:00:00
      </aside>
      <button
        className={`w-10 h-10 rounded-md bg-slate-800 text-white items-center shadow-md justify-center flex fixed bottom-5 right-5 z-20 backdrop-blur-sm transition bg-white/5 ${
          active ? "flex" : "hidden"
        } hover:bg-blue-700`}
        onClick={handleClick}
      >
        <i className="bx bx-arrow-to-top text-xl"></i>
      </button>
    </Fragment>
  );
};

export default Aside;
