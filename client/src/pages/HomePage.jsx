import { Fade } from "@mui/material"
import { Link } from "react-router-dom"
import HomeImg from "../assets/home.png"
 
export function HomePage () {
  return (
    <Fade in={true} timeout={700}>
      <main className='container mx-auto'>
        <section className="sm:grid sm:grid-cols-2 space-y-10 overflow-hidden">
          <div className="p-8 md:p-12 lg:px-16 lg:py-15">
            <div className="mx-auto flex flex-col items-center gap-y-10 md:gap-y-8 lg:gap-y-12 max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className='text-2xl font-semibold md:text-4xl md:tracking-wider lg:text-5xl'>
                Hola, Bienvenido a <span className="text-sky-500">ExercisesJS,</span> la plataforma de desafios de <span className="text-yellow-400">JavaScript.</span>
              </h2>
              <Link to='/login'>
                <button className="cursor-pointer bg-transparent border-2 border-sky-700 text-sky-700 font-bold rounded-lg sm:h-12 h-10 w-32 sm:w-44 transition ease-in-out duration-300 hover:bg-sky-700 hover:text-zinc-800 hover:shadow-2xl shadow-sky-500">Empezar</button>
              </Link>
            </div>
          </div>
          <div className="p-7">
            <img
              alt="Home"
              src={HomeImg}
              className="w-full max-w-[500px] h-auto object-contain sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]"
              />
          </div>
        </section>
      </main>
    </Fade>
  )
}