"use client"
import { useRef, useState } from "react";
import * as motion from "motion/react-client";
import Image from "next/image";

const Contact = () => {
    const constraintsRef = useRef<HTMLDivElement>(null);
    const [ chat, setChat ] = useState("");
    const [ disable, setDisable ] = useState(true);

    const handleChat = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChat(e.target.value);
      if(e.target.value) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
 
  return (
    <section id="contact" className="container max-w-6xl w-11/12 px-4 py-3 mx-auto my-16">
        <header className="px-7 py-2 rounded-md bg-slate-900 text-white inline-block mb-6">
            <h1 id="about" className="">Contact Me</h1>
        </header>
        <section className="flex gap-2 flex-wrap">
            <section className="flex-grow basis-96 bg-slate-900 rounded-md p-4 text-slate-300">
                <header className="flex items-center gap-2 mb-4">
                    <i className="bx bxs-chat text-xl text-blue-800"></i>
                    <h1>Live Chat</h1>
                </header>
                <section className="bg-slate-800 rounded-md p-3 flex flex-col max-h-96 overflow-auto mb-2">
                    <section className="max-w-md mb-3 self-start">
                        <h1 className="font-bold mb-1 text-start">Rafly</h1>
                        <section className="bg-slate-900 p-3 rounded-md">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam id omnis veritatis dignissimos consectetur debitis expedita. Atque tempore incidunt, animi adipisci repellat dignissimos amet asperiores dolorum quis numquam fugiat quam.</p>
                        </section>
                    </section>
                    <section className="max-w-md mb-3 self-end">
                        <h1 className="font-bold mb-1 text-end">Rafly</h1>
                        <section className="bg-slate-900 p-3 rounded-md">
                            <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos aperiam beatae corrupti itaque veniam dolore magnam quis, harum amet quisquam maxime nulla obcaecati iure numquam ea saepe tempore est?</p>
                        </section>
                    </section>
                    <section className="max-w-md mb-3 self-end">
                        <h1 className="font-bold mb-1 text-end">Rafly</h1>
                        <section className="bg-slate-900 p-3 rounded-md">
                            <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos aperiam beatae corrupti itaque veniam dolore magnam quis, harum amet quisquam maxime nulla obcaecati iure numquam ea saepe tempore est?</p>
                        </section>
                    </section>
                </section>
                <section className="bg-slate-800 rounded-md p-3 flex items-center gap-2">
                    <input type="text" value={chat} className="w-full bg-slate-900 rounded-md p-2" onChange={handleChat} />
                    <button className={`h-10 w-10 flex items-center bg-slate-900 justify-center rounded-md shadow transition shadow-blue-950 hover:bg-blue-900 disabled:bg-white/35 disabled:cursor-default`} disabled={disable}><i className="bx bx-send text-xl"></i></button>
                </section>
            </section>
            <motion.div ref={constraintsRef} className="flex-grow basis-36 flex justify-center items-center bg-slate-900 rounded-md h-96 lg:h-auto relative ">
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
