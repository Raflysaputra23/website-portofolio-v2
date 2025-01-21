/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image";
import Link from "next/link";
import { marked } from "marked";
import { useEffect, useRef, useState } from "react";
import { createToken } from "../utils/token";

type ResponseMessage = {
    role: string;
    message: string;
}

const RafAI = () => {
    const [ messages, setMessages ] = useState<ResponseMessage[]>([]);
    const [ chat, setChat ] = useState<string>('');
    const [ file, setFile ] = useState<File | boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ disable, setDisable ] = useState<boolean>(true);
    const [ disableInput, setDisableInput ] = useState<boolean>(false);
    const [ disableReset, setDisableReset ] = useState<boolean>(true);
    const messageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(messages.length == 0) {
            setDisableReset(true);
        } else {
            setDisableReset(false);
        }
        messageRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages]);

    useEffect(() => {
        if(localStorage.getItem("messages")) {
            setMessages(JSON.parse(localStorage.getItem("messages")!));
        } else {
            setMessages([]);
            localStorage.setItem("messages", JSON.stringify([]));
        }
    }, []);

    const handleChat = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChat(e.target.value);
        if(e.target.value.length > 0) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    const handleReset = () => {
        localStorage.removeItem("messages");
        setMessages([]);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setChat("");
            setDisable(true);
            setDisableInput(true);
            setFile(false);
            setLoading(true);
            const userChat = [...messages, { role: "user", message: chat }];
            setMessages(userChat);
            const session: string = JSON.stringify(userChat);
            const token = await createToken({ username: "Rafly", email: "rafai@google.com" });

            const formData = new FormData();
            formData.append("chat", chat);
            formData.append("session", session);
            if(file) {
                formData.append("file", file as File);
                const loadingFile = [...userChat, { role: "model", message: "Sedang menganalisis file..." }];
                setMessages(loadingFile);
            };

            const response = await fetch("/api/rafai", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            });

            if(response.ok) {
                const respon: { data: ResponseMessage } = await response.json();
                const botChat = [...userChat, respon.data];
                setMessages(botChat);
                localStorage.setItem("messages", JSON.stringify(botChat));
            } else {
                const botChat = [...userChat, { role: "model", message: "Maaf RafAI sedang tidak bisa membaca file ini, silahkan file yang lain" }];
                setMessages(botChat);
                localStorage.setItem("messages", JSON.stringify(botChat));
            }

            setDisableInput(false);
            setLoading(false);
        } catch(error) {
            console.log(error);
        }
    }

  return (
    <main className="h-screen overflow-hidden">
        <nav className="container max-w-6xl w-11/12 px-4 py-3 mx-auto my-3 rounded-md shadow-md bg-slate-900 text-white flex justify-between items-center">
            <Link href={"/#features"} className="text-sm h-10 w-10 flex items-center justify-center rounded-md shadow">
                <i className='bx bx-left-arrow-alt text-2xl'></i>
            </Link>
            <section className="flex items-center gap-2">
                <Image src="/logo.png" alt="logo" width={30} height={30} />    
                <h1>RafAI</h1>
            </section>
        </nav>
        <section className="container max-w-6xl w-11/12 my-3 mx-auto text-white flex gap-2 h-5/6">
            <section className="flex-grow rounded-md bg-slate-900 overflow-y-auto overflow-x-hidden flex flex-col justify-between relative">
                <section className="flex flex-col overflow-x-hidden overflow-y-auto p-5 gap-2">    
                    <button className="absolute top-2 left-2 text-lg h-8 w-8 flex items-center justify-center rounded-md shadow bg-red-500 hover:bg-red-700 disabled:bg-slate-800 z-10" disabled={disableReset} onClick={handleReset}><i className='bx bx-reset'></i></button>
                    {messages.length === 0 && (
                        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">Hi, I&apos;M RafAI</h1>
                    )}   
                    {messages && messages.map((item: { role: string; message: string }, index) => (
                        <section ref={messageRef} key={index} className={`max-w-[90%] mb-3 ${item.role === "user" ? "self-end" : "self-start"}`}>
                            <h1 className={`font-bold mb-1 ${item.role === "user" ? "text-end" : "text-start"}`}>{item.role === "user" ? "Anda " : "RafAI "}{item.role === "user" ? <i className="bx bxs-user text-blue-500"></i> : <i className="bx bxs-bot text-green-500"></i>}</h1>
                            <section className="bg-slate-800 p-3 rounded-md relative">
                                {item.role === "user" ? (
                                    <p className="text-sm whitespace-pre-wrap text-slate-200">{item.message}</p>
                                ) : (
                                    <p className="text-sm whitespace-pre-wrap text-slate-200" dangerouslySetInnerHTML={{ __html: marked.parse(item.message) }} />     
                                )}
                                <p className={`absolute bottom-1 right-2 text-xs text-slate-400 ${item.role === "user" ? "hidden" : "block"}`}>AI <i className='bx bxs-zap text-[.6rem]'></i></p>
                            </section>
                        </section>
                    ))}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                </section>
                {file && (
                    <section className="rounded-md bg-slate-800 absolute bottom-14 left-2 flex p-3 bg-green-600">
                        <button className="absolute -top-2 -right-2 text-lg h-5 w-5 flex items-center justify-center rounded-md shadow bg-red-500 hover:bg-red-700" onClick={() => setFile(false)}><i className="bx bx-x"></i></button>
                        <h1 className="text-sm text-center text-slate-200 m-auto flex items-center gap-2">Upload File <i className="bx bx-file"></i> </h1>
                    </section>
                )}
                <form action="" className="flex gap-2 p-2 items-center bg-slate-800" onSubmit={handleSubmit}>
                    <button type="button" className="text-sm h-8 w-10 flex items-center justify-center rounded-md shadow bg-slate-900 hover:bg-blue-800 relative">
                        <i className="bx bx-image-add"></i>
                        <input type="file" className="absolute opacity-0 top-0 left-0 right-0 bottom-0" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFile(e?.target?.files?.[0] || false)}/>
                    </button>
                    <input type="text" value={chat} name="chat" className="w-full px-2 py-1 rounded-md bg-slate-800 border border-slate-600" disabled={disableInput} onChange={handleChat}/>
                    <button type="submit" className="text-sm h-8 w-10 flex items-center justify-center rounded-md shadow bg-slate-900 hover:bg-blue-800 disabled:bg-red-500" disabled={disable}>{loading ? <svg className="animate-spin h-5 w-5 border-r-2 border-b-2 border-white rounded-full" viewBox="0 0 24 24"></svg> : <i className="bx bx-send"></i>}</button>
                </form>
            </section>
        </section>
    </main>
  )
}

export default RafAI;
