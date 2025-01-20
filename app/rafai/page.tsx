"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const RafAI = () => {
    // const [ messages, setMessages ] = useState([]);
    const [ chat, setChat ] = useState('');
    // const [ file, setFile ] = useState(null);
    const [ disable, setDisable ] = useState(true);

    const handleChat = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChat(e.target.value);
        if(e.target.value.length > 0) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
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
            <section className="flex-grow basis-2/5 rounded-md p-2 bg-slate-900">

            </section>
            <section className="flex-grow basis-3/5 rounded-md bg-slate-900 overflow-y-auto overflow-x-hidden flex flex-col justify-between">
                <section>

                </section>
                <form action="" className="flex gap-2 p-2 items-center bg-slate-800" onSubmit={handleSubmit}>
                    <button type="button" className="text-sm h-10 w-10 flex items-center justify-center rounded-md shadow bg-slate-900 relative">
                        <input type="file" name="file" className="absolute w-full h-full opacity-0" />
                        <i className="bx bx-image-add"></i>
                    </button>
                    <input type="text" value={chat} name="chat" className="w-full px-2 py-1 rounded-md bg-slate-800 border border-slate-600" onChange={handleChat}/>
                    <button type="submit" className="text-sm h-10 w-10 flex items-center justify-center rounded-md shadow bg-slate-900 disabled:bg-red-500" disabled={disable}><i className="bx bx-send"></i></button>
                </form>
            </section>
        </section>

    </main>
  )
}

export default RafAI;
