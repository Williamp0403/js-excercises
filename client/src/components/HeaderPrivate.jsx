import { Fade } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from '../assets/image.png'
import { ModalLogout } from "./Modal";

export function HeaderPrivate() {

  return (
    <Fade in={true} timeout={700}>
      <header className="sticky top-0 backdrop-blur-lg">
        <nav className="py-7 px-10">
          <ul className="flex items-center justify-between">
            <li>
              <NavLink className='flex items-center gap-x-2' to='/game'>
                <img src={Logo} className="object-cover h-10"/>
                <span className="hidden sm:block text-sky-500 font-bold text-lg">ExercisesJS</span>
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <ModalLogout/>
            </li>
          </ul>
        </nav>
      </header>
    </Fade>
  )
}