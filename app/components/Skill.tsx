"use client"
import { motion } from "motion/react";
import Image from "next/image";

const Skill = () => {
  return (
    <section id="features" className="container max-w-6xl w-11/12 px-4 py-3 mx-auto my-16">
        <header className="px-7 py-2 rounded-md bg-slate-900 text-white inline-block mb-6">
            <h1 id="about" className="">My Expertise</h1>
        </header>
        <section className="flex gap-2 flex-wrap">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="flex-grow basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <i className="bx bxl-html5 text-[5rem] text-red-500"></i>
                <p className="text-xl text-slate-300">HTML</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <i className="bx bxl-css3 text-[5rem] text-blue-500"></i>
                <p className="text-xl text-slate-300">CSS</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <i className="bx bxl-javascript text-[5rem] text-yellow-500"></i>
                <p className="text-xl text-slate-300">JavaScript</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="flex-grow basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <i className="bx bxl-typescript text-[5rem] text-blue-600"></i>
                <p className="text-xl text-slate-300">TypeScript</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="flex-grow basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <i className="bx bxl-php text-[5rem] text-indigo-400"></i>
                <p className="text-xl text-slate-300">PHP</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <i className="bx bxl-nodejs text-[5rem] text-lime-500"></i>
                <p className="text-xl text-slate-300">Node JS</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <i className="bx bxl-react text-[5rem] text-sky-400"></i>
                <p className="text-xl text-slate-300">React JS</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="flex-grow basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <i className="bx bxl-bootstrap text-[5rem] text-purple-500"></i>
                <p className="text-xl text-slate-300">Bootstrap</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="flex-grow basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <i className="bx bxl-git text-[5rem] text-red-600"></i>
                <p className="text-xl text-slate-300">Git</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <i className="bx bxl-github text-[5rem] text-black"></i>
                <p className="text-xl text-slate-300">Github</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <i className="bx bxl-firebase text-[5rem] text-orange-500"></i>
                <p className="text-xl text-slate-300">Firebase</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="flex-grow basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <i className="bx bxl-mongodb text-[5rem] text-green-500"></i>
                <p className="text-xl text-slate-300">Mongo DB</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="flex-grow basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <Image src="/nextjs.svg" alt="nextjs" width={70} height={70}></Image>
                <p className="text-xl text-slate-300 mt-3">Next JS</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <Image src="/expressjs.svg" alt="nextjs" width={70} height={70}></Image>
                <p className="text-xl text-slate-300 mt-3">Express JS</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <Image src="/materialui.svg" alt="nextjs" width={70} height={70}></Image>
                <p className="text-xl text-slate-300 mt-3">Material UI</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="basis-36 flex flex-col items-center bg-slate-900 border border-slate-700 shadow rounded-md p-3">
                <Image src="/vitejs.svg" alt="nextjs" width={70} height={70}></Image>
                <p className="text-xl text-slate-300 mt-3">Vite JS</p>
            </motion.div>
        </section>
    </section>
  )
}

export default Skill;
