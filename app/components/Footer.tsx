
const Footer = () => {
  return (
    <footer id="footer" className="container w-screen px-20 py-5 mx-auto bg-slate-900 flex justify-between flex-wrap gap-8">  
        <section className="flex flex-col items-center flex-grow order-1 md:order-1">
            <h1 className="font-bold text-lg text-slate-100 mb-3">Copyright</h1>
            <p className="text-sm text-slate-300 text-center">&copy; 2025 M. Rafly Saputra - All Right Reserved</p>
        </section>
        <section className="flex flex-col items-center basis-80 flex-grow order-3 md:order-2">
            <h1 className="font-bold text-lg text-slate-100">Follow Sosmed</h1>
            <div className="flex items-center justify-center gap-2 mt-3">
                <a href="" className="flex justify-center items-center w-8 h-8 rounded-md bg-slate-950 border border-slate-800 hover:bg-slate-800">
                    <i className="bx bxl-instagram text-2xl text-pink-500"></i>
                </a>
                <a href="" className="flex justify-center items-center w-8 h-8 rounded-md bg-slate-950 border border-slate-800 hover:bg-slate-800">
                    <i className="bx bxl-tiktok text-2xl text-slate-100"></i>
                </a>
                <a href="" className="flex justify-center items-center w-8 h-8 rounded-md bg-slate-950 border border-slate-800 hover:bg-slate-800">
                    <i className="bx bxl-linkedin text-2xl text-blue-700"></i>
                </a>
                <a href="" className="flex justify-center items-center w-8 h-8 rounded-md bg-slate-950 border border-slate-800 hover:bg-slate-800">
                    <i className="bx bxl-youtube text-2xl text-red-600"></i>
                </a>
            </div>
        </section>
        <section className="flex flex-col items-center flex-grow order-2 md:order-3">
            <h1 className="font-bold text-lg text-slate-100 mb-3">Creator</h1>
            <h2 className="text-sm text-slate-300">M. Rafly Saputra</h2>
        </section>
    </footer>
  )
}

export default Footer;
