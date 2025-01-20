"use client"
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const Features = () => {
  return (
    <section id="features" className="container max-w-6xl w-11/12 px-4 py-3 mx-auto my-16">
        <header className="px-7 py-2 rounded-md bg-slate-900 text-white inline-block mb-6">
            <h1 id="about" className="">Features</h1>
        </header>
        <section className="flex gap-2 flex-wrap">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60 border border-slate-700">
                <Link href={"/untik"} >
                    <header className="mb-2 flex items-center justify-between">
                        <h1 className="text-lg font-bold">UNTIK</h1>
                        <i className="bx bxl-tiktok text-2xl"></i>
                    </header>
                    <p className="text-sm text-slate-200">Fitur ini berfungsi untuk mengunduh video tiktok dengan cara menggunakan link video tiktok.</p>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60 border border-slate-700">
                <Link href={"/uninsta"} > 
                    <header className="mb-2 flex items-center justify-between">
                        <h1 className="text-lg font-bold">UNINSTA</h1>
                        <i className="bx bxl-instagram text-2xl text-pink-500"></i>
                    </header>
                    <p className="text-sm text-slate-200">Fitur ini berfungsi untuk mengunduh video instagram dengan cara menggunakan link video instagram.</p>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}  className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60 border border-slate-700">
                <Link href={"/unfb"} > 
                    <header className="mb-2 flex items-center justify-between">
                        <h1 className="text-lg font-bold">UNFB</h1>
                        <i className="bx bxl-facebook text-2xl text-blue-700"></i>
                    </header>
                    <p className="text-sm text-slate-200">Fitur ini berfungsi untuk mengunduh video facebook dengan cara menggunakan link video facebook.</p>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}  className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60 border border-slate-700">
                <Link href={"/spotify"} > 
                    <header className="mb-2 flex items-center justify-between">
                        <h1 className="text-lg font-bold">SPOTIFY</h1>
                        <i className="bx bxl-spotify text-2xl text-green-500"></i>
                    </header>
                    <p className="text-sm text-slate-200">Fitur ini berfungsi untuk mencari dan mengunduh lagu spotify sesuai dengan lagu yang diinginkan.</p>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}  className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60 border border-slate-700">
                <Link href={"/rafai"} > 
                    <header className="mb-2 flex items-center justify-between">
                        <h1 className="text-lg font-bold">RAFAI</h1>
                        <Image src="/logo.png" alt="logo" width={30} height={30} />
                    </header>
                    <p className="text-sm text-slate-200">RAFAI adalah fitur utama pada website ini, RAFAI bisa menjawab hampir semua pertanyaan anda, RAFAI bisa menjadi teman curhat, teman ngobrol, dan RAFAI sendiri bisa membaca sebuah gambar, file PDF, maupun video.</p>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}  className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60 border border-slate-700">
                <Link href={"/upscale"} > 
                    <header className="mb-2 flex items-center justify-between">
                        <h1 className="text-lg font-bold">UPSCALE</h1>
                        <i className="bx bxs-image-add text-2xl text-red-500"></i>
                    </header>
                    <p className="text-sm text-slate-200">Fitur ini berfungsi untuk memperbanyak pixel gambar, supaya gambar terlihat lebih jelas dan HD.</p>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}  className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60 border border-slate-700">
                <Link href={"/menfes"} > 
                    <header className="mb-2 flex items-center justify-between">
                        <h1 className="text-lg font-bold">MENFES</h1>
                        <i className="bx bxs-hide text-2xl text-amber-500"></i>
                    </header>
                    <p className="text-sm text-slate-200">Fitur ini berfungsi untuk mengirim sebuah pesan kepada seseorang secara anonimus.</p>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}  className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60 border border-slate-700">
                <Link href={"/sticker"} > 
                    <header className="mb-2 flex items-center justify-between">
                        <h1 className="text-lg font-bold">STICKER</h1>
                        <i className="bx bxs-sticker text-2xl text-sky-700"></i>
                    </header>
                    <p className="text-sm text-slate-200">Fitur ini berfungsi untuk membuat sticker whatsapp, bot RAFAI akan otomatis mengirimkan stickernya ke whatsapp anda.</p>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}  className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60 border border-slate-700">
                <Link href={"/cvta"} > 
                    <header className="mb-2 flex items-center justify-between">
                        <h1 className="text-lg font-bold">CVTA</h1>
                        <i className="bx bxs-videos text-2xl text-yellow-400"></i>
                    </header>
                    <p className="text-sm text-slate-200">Fitur ini berfungsi untuk menconvert video menjadi audio.</p>
                </Link>
            </motion.div>
        </section>
    </section>
  )
}

export default Features;
