"use client"

import { useEffect, useMemo, useRef, useState } from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { MixinAlert } from "../utils/alert";
import { createToken } from "../utils/token";
import useSWR from "swr";

interface Messages {
    role: string;
    username: string;
    message: string;
    createdAt: any;
}

const fethcer = (url) => fetch(url).then((res) => res.json());

const Contact = () => {
    const constraintsRef = useRef<HTMLDivElement>(null);
    const [ chat, setChat ] = useState<string>("");
    const [ username, setUsername ] = useState<string>("");
    const [ revalidate, setRevalidate ] = useState<boolean>(false);
    const [ disable, setDisable ] = useState<boolean>(true);
    const [ loading, setLoading ] = useState<boolean>(false);
    const messageRef = useRef<HTMLDivElement>(null);
    const { data, isLoading, mutate } = useSWR("api/chat", fethcer);
    
    useEffect(() => {
        messageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, [revalidate, data]);

    useEffect(() => {
        if(chat && username) {
            setDisable(false);
        }else {
            setDisable(true);
        };
    }, [chat, username]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            setDisable(true);
            const data = { role: "user", username, message: chat, createdAt: new Date().getTime() };
            const token = await createToken();
            const response = await fetch("api/chat", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })

            if(response.ok) {
                setRevalidate(!revalidate);
                MixinAlert("success", "Pesan berhasil dikirim");
            } else {
                MixinAlert("error", "Pesan gagal dikirim");
            }
            setLoading(false);
            setDisable(false);
            setUsername("");
            setChat("");
            mutate('/api/chat');
        } catch(error) {
            MixinAlert("error", error);
            setLoading(false);
            setDisable(false);
        }
    }

    const parseMessages = (count: number) => {
        if(count >= 1000000) {
            return `${(count / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
        } else if(count >= 1000) {
            return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}K`;
        } else {
            return count;
        }
    };

    const parseDatePost = (date: any) => {
        const dateNow = new Date();
        const diff = dateNow.getTime() - date;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if(years > 0) {
            return `${years} tahun yang lalu`;
        } else if(months > 0) {
            return `${months} bulan yang lalu`;
        } else if(days > 0) {
            return `${days} hari yang lalu`;
        } else if(hours > 0) {
            return `${hours} jam yang lalu`;
        } else if(minutes > 0) {
            return `${minutes} menit yang lalu`;
        } else if(seconds > 0) {
            return `${seconds} detik yang lalu`;
        } else {
            return "baru saja";
        }
    }

    const renderedMessages = useMemo(() => (
        !isLoading && data?.data ? data?.data?.map((item, index) => (
            <section ref={messageRef} key={index} className="mb-3 self-start">
                <h1 className="font-bold text-start">{item.username}</h1>    
                <section className="bg-slate-900 p-2 rounded-md mb-1">
                    <p className="text-sm">{item.message}</p>
                </section>
                <section className="flex items-center gap-1 text-xs text-slate-400">
                        <i className='bx bxs-time'></i>
                        {parseDatePost(item.createdAt)}
                </section>
            </section>
    )) : <svg className="animate-spin h-16 w-16 border-r-2 border-b-2 border-white rounded-full mx-auto my-5" viewBox="0 0 24 24"></svg>
    ), [data]);
 
  return (
    <section id="contact" className="container max-w-6xl w-full lg:w-11/12 px-4 py-3 mx-auto my-16">
        <header className="px-7 py-2 rounded-md bg-slate-900 text-white inline-block mb-6">
            <h1 id="about" className="">Contact Me</h1>
        </header>
        <section className="flex gap-2 flex-wrap">
            <section className="flex-grow basis-full lg:basis-96 bg-slate-900 rounded-md p-4 text-slate-300">
                <header className="flex items-center justify-between mb-4">
                    <section className="flex items-center gap-2">
                        <i className="bx bxs-chat text-xl text-blue-800"></i>
                        <h1>Live Chat</h1>
                    </section>
                    <section className="flex items-center gap-2">
                        <i className='bx bxs-message-dots text-3xl text-blue-800 relative'>
                            <p className={`absolute -top-3 -right-3 bg-red-500 rounded-full text-slate-100 text-xs ${data?.data?.length > 1000 ? "w-7 h-7" : "w-6 h-6"} flex items-center justify-center`}>{parseMessages(data?.data ? data?.data?.length : 0)}</p>
                        </i>
                    </section>
                </header>
                <section className="bg-slate-800 rounded-md p-3 flex flex-col max-h-96 overflow-auto mb-2">
                    {renderedMessages}
                </section>
                <form className="bg-slate-800 rounded-md p-3" onSubmit={handleSubmit}>
                    <section className="flex items-center w-full gap-2 mb-2 flex-wrap lg:flex-nowrap">
                        <section className="lg:basis-1/4 basis-full">
                            <label htmlFor="username" className="text-sm inline-block mb-1">Username</label>
                            <input type="text" value={username} name="username" className="w-full bg-slate-900 rounded-md p-2" placeholder="Udin" onChange={(e) => setUsername(e.target.value)} />
                        </section>
                        <section className="lg:basis-3/4 basis-full">
                            <label htmlFor="message" className="text-sm inline-block mb-1">Pesan</label>
                            <input type="text" value={chat} name="chat" className="w-full bg-slate-900 rounded-md p-2" placeholder="Ganteng banget sih ><" onChange={(e) => setChat(e.target.value)} />
                        </section>
                    </section>
                    <button type="submit" className={`h-10 w-full flex items-center bg-slate-900 justify-center gap-2 rounded-md shadow transition shadow-blue-950 hover:bg-blue-900 disabled:bg-white/35 disabled:cursor-default`} disabled={disable}>{loading ? <svg className="animate-spin h-5 w-5 border-r-2 border-b-2 border-white rounded-full" viewBox="0 0 24 24"></svg> : <span>Kirim <i className="bx bx-send"></i></span>}</button>
                </form>
            </section>
            <motion.div ref={constraintsRef} className="flex-grow basis-full lg:basis-36 flex justify-center items-center bg-slate-900 rounded-md h-96 lg:h-auto relative ">
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    className="w-52 h-52 bg-slate-700 rounded-full flex justify-center items-center shadow-md shadow-slate-900 z-10"
                >
                    <Image src={"/logo.png"} alt="logo" width="120" height="120" />
                </motion.div>
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-slate-200">&copy; Rafly</h1>
            </motion.div>
        </section>
    </section>
  )
}

export default Contact;
