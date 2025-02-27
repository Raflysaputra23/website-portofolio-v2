
import Link from "next/link";
import Particle from "./utils/Particle";
import CanvasCursor from "./utils/CanvasCursor";



const Dashboard = () => {  

  return (
    <main id="dashboard" className="container w-11/12 my-3 py-20 mx-auto text-white flex flex-col justify-center items-center">
      <Particle />
      <CanvasCursor />
      <h1 className={`text-3xl mt-5 text-slate-300 font-bold`}>Hi, I&apos;M Rafly</h1>
      <h2 className="text-[12px] text-slate-500 mb-5 text-center">Fullstack Web Developer | Backend Developer | Frontend Developer</h2>
      <p className="text-sm text-center text-slate-300 w-80">Saya adalah seorang mahasiswa di Universitas Lampung</p>
      <section className="flex items-center gap-3 w-11/12 max-w-80">
        <Link href={"/#contact"} className="mt-5 text-sm h-10 flex-grow flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none lg:bg-transparent shadow-blue-950 hover:bg-blue-900">Contact Me</Link>
        <Link href={"/rafai"} className="mt-5 text-sm h-10 flex-grow flex items-center justify-center rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none lg:bg-transparent shadow-blue-950 hover:bg-blue-900">RafAI</Link>
      </section>
    </main>
  )
}

export default Dashboard;
