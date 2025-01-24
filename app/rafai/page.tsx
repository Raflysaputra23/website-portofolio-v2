"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { createToken } from "../utils/token";
import CodeBlock from "../components/CodeBlock";

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
        setDisableReset(messages.length === 0);
        messageRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages]);

    useEffect(() => {
        const storedMessages = localStorage.getItem("messages");
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages));
        }
    }, []);

    const handleChat = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setChat(e.target.value);
        setDisable(e.target.value.length <= 0);
    };

    const handleReset = () => {
        localStorage.removeItem("messages");
        setMessages([]);
        setChat('');
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            setDisable(true);
            setDisableInput(true);
            const userChat = [...messages, { role: "user", message: chat }];
            setMessages(userChat);
            
            const session: string = JSON.stringify(userChat);
            const token = await createToken();

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
                const { data }: { data: ResponseMessage } = await response.json();
                const botChat = [...userChat, data];
                setMessages(botChat);
                localStorage.setItem("messages", JSON.stringify(botChat));
            } else {
                const botChat = [...userChat, { role: "model", message: "Maaf RafAI sedang tidak bisa membaca file ini, silahkan file yang lain" }];
                setMessages(botChat);
                localStorage.setItem("messages", JSON.stringify(botChat));
            }

            setChat("");    
            setFile(false);
            setDisableInput(false);
            setLoading(false);
        } catch(error) {
            console.log(error);
            setLoading(false);
        }
    }

    const renderedMessages = useMemo(() => (
        messages.map((item, index) => (
          <section ref={messageRef} key={index} className={`${item.role === "user" ? "self-end max-w-[80%] bg-slate-700 rounded-md p-2 px-3" : "self-start"}`}>
            {item.role === "user" ? (
              <p className="whitespace-pre-wrap">{item.message}</p>
            ) : (
              <CodeBlock message={item.message} />
            )}
          </section>
        ))
    ), [messages]);

  return (
    <main className="h-screen overflow-hidden">
        <nav className="container w-full lg:w-11/12 px-4 py-3 mx-auto my-3 rounded-md shadow-md bg-slate-900 text-white flex justify-between items-center relative">
            <Link href={"/#features"} className="text-sm h-10 w-10 flex items-center justify-center rounded-md shadow">
                <i className='bx bx-left-arrow-alt text-2xl'></i>
            </Link>
            <section className="flex items-center gap-2">
                <Image src="/logo.png" alt="logo" width={30} height={30} />    
                <h1>RafAI</h1>
            </section>
            <button className="absolute -bottom-14 left-2 text-lg h-8 w-8 flex items-center justify-center rounded-md shadow bg-red-500 hover:bg-red-700 disabled:bg-slate-800 z-10" disabled={disableReset} onClick={handleReset}><i className='bx bx-reset'></i></button>
        </nav>
        <section className="container lg:w-11/12 mx-auto mt-3 mb-2 pb-4 text-white flex flex-col justify-between h-4/5">
            <section className={`flex flex-col bg-slate-900 rounded-md pl-3 p-2 gap-3 overflow-y-auto overflow-x-auto lg:p-3 flex-grow relative`}>
                {messages.length === 0 && (
                    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">Hi, I&apos;M RafAI</h1>
                )}   
                {renderedMessages}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            </section>
            <form action="" className="flex w-full lg:w-11/12 fixed bottom-0 mx-auto gap-2 p-2 items-center bg-slate-800 rounded-md" onSubmit={handleSubmit}>
                {file && (
                    <section className="rounded-md bg-slate-800 absolute -top-12 left-0 flex p-3">
                        <button className="absolute -top-2 -right-2 text-lg h-5 w-5 flex items-center justify-center rounded-md shadow bg-red-500 hover:bg-red-700" onClick={() => setFile(false)}><i className="bx bx-x"></i></button>
                        <h1 className="text-sm text-center text-slate-200 m-auto flex items-center gap-2">Upload File <i className="bx bx-file"></i> </h1>
                    </section>
                )}
                <button type="button" className="text-sm h-10 w-12 flex items-center justify-center rounded-md shadow bg-slate-900 hover:bg-blue-800 relative">
                    <i className="bx bx-image-add"></i>
                    <input type="file" className="absolute opacity-0 top-0 left-0 right-0 bottom-0" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFile(e?.target?.files?.[0] || false)}/>
                </button>
                <textarea value={chat} name="chat" className="w-full text-sm p-3 rounded-md bg-slate-800 border border-slate-600 resize-none" rows={1} disabled={disableInput} onChange={handleChat} placeholder="Ask Anything"/>
                <button type="submit" className="text-sm h-10 w-12 flex items-center justify-center rounded-md shadow bg-slate-900 hover:bg-blue-800 disabled:bg-red-500" disabled={disable}>{loading ? <svg className="animate-spin h-5 w-5 border-r-2 border-b-2 border-white rounded-full" viewBox="0 0 24 24"></svg> : <i className="bx bx-send"></i>}</button>
            </form>
        </section>
    </main>
  )
}

export default RafAI;
