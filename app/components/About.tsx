"use client"

import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="container max-w-6xl w-11/12 px-4 py-3 mx-auto my-16">
        <header className="px-7 py-2 rounded-md bg-slate-900 text-white inline-block mb-6">
            <h1 className="">About</h1>
        </header>
        <section className="flex gap-2 flex-wrap">
            <section className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-full">
                <header className="flex gap-2">
                    <i className="bx bxs-rocket text-2xl text-red-500"></i>
                    <h1 className="text-lg mb-2 font-bold">About Me</h1>
                </header>
                <p className="text-sm text-slate-300">
                    Saya adalah seorang mahasiswa yang sedang berkuliah di Universitas Lampung, saya sangat suka sekali dengan pemrograman terutama dibidang WEB dan AI, saya juga mempunyai pengalaman dalam membuat beberapa aplikasi di bidang WEB dan AI, dan saya akan terus mengembangkan skill saya sehingga mampu menjadi seorang profesional di dunia IT.
                </p>
            </section>
            <section className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60">
                <header className="flex gap-2">
                    <i className='bx bxs-objects-vertical-bottom text-2xl text-blue-500'></i>
                    <h1 className="text-lg mb-2 font-bold">Experience</h1>
                </header>
                <p className="text-sm text-slate-300">Saya memiliki pengalaman dalam membuat beberapa aplikasi di bidang WEB dan AI, saya pernah membuat sebuah program bot wa yang didalamnya ada fitur Chat AI dan beberapa fitur bermanfaat lainnya, dan saya sudah terjun didunia IT selama 3.5 tahun</p>
            </section>
            <section className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60">
                <header className="flex gap-2">
                    <i className='bx bx-trending-up text-2xl text-yellow-500'></i>
                    <h1 className="text-lg mb-2 font-bold">My Hobby</h1>
                </header>
                <section className="flex flex-wrap gap-2 items-start">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="text-sm text-center text-slate-300 py-2 px-3 bg-slate-800 border border-slate-700 rounded-md">Coding</motion.div>   
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="text-sm text-center text-slate-300 py-2 px-3 bg-slate-800 border border-slate-700 rounded-md">Playing Computer</motion.div>   
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="text-sm text-center text-slate-300 py-2 px-3 bg-slate-800 border border-slate-700 rounded-md">Create Project</motion.div>   
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="text-sm text-center text-slate-300 py-2 px-3 bg-slate-800 border border-slate-700 rounded-md">Olahraga</motion.div>   
                </section>
            </section>
        </section>
    </section>
  )
}

export default About;
