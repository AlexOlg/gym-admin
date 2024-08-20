
const App = () => {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-[#1F2023] dark:bg-gray-900">
      <section className="flex flex-col justify-center items-center w-[500px] bg-slate-900 text-slate-50 max-w-1300 gap-2 rounded-2xl">
        <h1 className="text-[45px]">🏋️‍♀️GymApp🏋️‍♀️</h1>
        <label htmlFor="nombre-gym">¿Como se llama su gimnasio?</label>
        <input type="text" name="nombre-gym" id="" className="rounded-[20px] bg-slate-700"/>
        <label htmlFor="id-gym">Gimnasio ID</label>
        <input type="text" name="id-gym" id="" className="rounded-[20px] bg-slate-700"/>
        <label htmlFor="nombre">Email</label>
        <input type="email" name="email" id="" className="rounded-[20px] bg-slate-700"/>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="" className="rounded-[20px] bg-slate-700"/>
        <button type="submit" className="bg-[#CCDE5F]	text-[black] rounded-[10px]	px-6 m-3">Registrarse</button>
      </section>
    </div>
    </>
  )
}

export default App
