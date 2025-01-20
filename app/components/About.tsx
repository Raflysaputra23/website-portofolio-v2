
const About = () => {
  return (
    <section id="about" className="container max-w-6xl w-11/12 px-4 py-3 mx-auto my-16">
        <header className="px-7 py-2 rounded-md bg-slate-900 text-white inline-block mb-6">
            <h1 className="">About</h1>
        </header>
        <section className="flex gap-2 flex-wrap">
            <section className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-full">
                <header className="flex gap-2">
                    <i className="bx bxs-objects-vertical-bottom text-2xl text-blue-500"></i>
                    <h1 className="text-lg mb-2 font-bold">Skill</h1>
                </header>
                <p className="text-sm text-slate-300">
                    Skill yang dimiliki RAFAI adalah mampu menganalisis sebuah gambar dan bisa membaca gambar tersebut, RAFAI juga memiliki kemampuan untuk menganalisis sebuah video bahkan bisa merangkum isi video dan juga anda bisa memberikan spesifik waktu untuk video tersebut, dan juga RAFAI bisa membaca sebuah file pdf dengan baik, RAFAI juga mampu membaca sebuah codingan, meresolve codingan, dan bisa membantu anda dalam membuat codingan.
                </p>
            </section>
            <section className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60">
                <header className="flex gap-2">
                    <i className="bx bxs-rocket text-2xl text-red-500"></i>
                    <h1 className="text-lg mb-2 font-bold">About Me</h1>
                </header>
                <p className="text-sm text-slate-300">
                    RAFAI adalah sebuah kecerdasan buatan yang dirancang untuk mempermudah manusia dengan tool-tool yang disediakan, RAFAI juga memiliki kemampuan untuk berkomunikasi dengan anda layaknya mengobrol dengan manusia.
                </p>
            </section>
            <section className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60">
                <header className="flex gap-2">
                    <i className='bx bxs-happy text-2xl text-green-500'></i>
                    <h1 className="text-lg mb-2 font-bold">Experience</h1>
                </header>
                <p className="text-sm text-slate-300">Kemudahan yang dimiliki RAFAI adalah mampu menganalisis sebuah gambar dan bisa membaca gambar tersebut.</p>
            </section>
            <section className="p-4 rounded-md bg-slate-900 text-white flex-grow basis-60">
                <header className="flex gap-2">
                    <i className='bx bx-trending-up text-2xl text-yellow-500'></i>
                    <h1 className="text-lg mb-2 font-bold">Purpose</h1>
                </header>
                <p className="text-sm text-slate-300">Tujuan dari aplikasi website ini adalah memberikan kemudahan kepada pengguna dengan tools yang sudah disediakan oleh RAFAI.</p>
            </section>
        </section>
    </section>
  )
}

export default About;
