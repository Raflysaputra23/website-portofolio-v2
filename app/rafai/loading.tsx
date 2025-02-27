
const loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center gap-5 flex-col">
      <h1 className="text-2xl text-slate-200">Menunggu RafAI Memproses</h1>
      <svg className="animate-spin h-16 w-16 border-r-2 border-b-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
    </div>
  )
}

export default loading
