import { Fade } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "../assets/image.png"

export function Header() {
  return (
    <Fade in={true} timeout={700}>
      <header className="sticky top-0">
        <nav className="py-7 px-10 ">
          <ul className="flex items-center justify-between">
              <li>
                <NavLink className='flex items-center gap-x-2' to='/'>
                  <img src={Logo} className="object-cover h-10"/>
                  <span className="hidden sm:block text-sky-500 font-bold text-lg">ExercisesJS</span>
                </NavLink>
              </li>
            <div className="flex gap-x-5 sm:gap-x-10">
              <li>
                <NavLink to='/login' className={({ isActive }) => `text-sm py-2 cursor-pointer font-bold relative ${ isActive ? "text-sky-500 after:w-full" : "text-white after:w-0 hover:text-sky-400" } after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-400` }>Iniciar sesion</NavLink>
              </li>
              <li>
              <NavLink to='/register' className={({ isActive }) => `text-sm py-2 cursor-pointer font-bold relative ${ isActive ? "text-sky-500 after:w-full" : "text-white after:w-0 hover:text-sky-400" } after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-400` }>Registrarse</NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </Fade>
  )
}