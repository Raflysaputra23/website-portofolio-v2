import Link from "next/link"

const NavBar2 = ({ title, icon }: { title: string, icon: string }) => {
  return (
    <nav className="container max-w-6xl w-11/12 px-4 py-3 mx-auto my-3 rounded-md shadow-md bg-slate-900 text-white flex justify-between items-center">
        <Link href={"/#features"} className="text-sm h-10 w-10 flex items-center justify-center rounded-md shadow">
            <i className='bx bx-left-arrow-alt text-2xl'></i>
        </Link>
        <section className="flex items-center gap-2">
            <i className={icon}></i>
            <h1>{title}</h1>
        </section>
    </nav>
  )
}

export default NavBar2
