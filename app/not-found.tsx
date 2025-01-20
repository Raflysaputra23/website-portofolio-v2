import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex justify-center items-center h-screen w-screen flex-col">
        <h1 className="text-4xl text-slate-200 mb-2 flex items-center gap-2">404 <i className="bx bx-search"></i></h1>
        <p className="text-sm text-slate-300">Halaman Tidak Ditemukan</p>
        <Link href="/" className="text-[12px] flex items-center justify-center text-slate-300 h-10 px-4 mt-5 rounded-md shadow transition backdrop-blur-sm bg-white/5 lg:backdrop-blur-none lg:bg-transparent shadow-blue-950 hover:bg-blue-900">Back To Home</Link>
    </section>
  )
}

export default NotFound;
