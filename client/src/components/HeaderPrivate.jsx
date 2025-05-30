import {  Fade } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from '../assets/image.png'
import { ModalLogout, ModalProgress } from "./Modal";
import { useAuth } from "../context/AuthContext";
import { Avatars } from "./Avatar";
import { AccountMenu } from "./Menu";

export function HeaderPrivate() {
  const { user } = useAuth();
  const completedName = user.name + " " + user.lastname;

  return (
    <Fade in={true} timeout={700}>
      <header className="sticky top-0 backdrop-blur-lg z-10">
        <nav className="p-7">
          <ul className="flex items-center justify-between">
            <li>
              <NavLink className="flex items-center gap-x-2" to="/game">
                <img src={Logo} className="object-cover h-10" />
                <span className="hidden sm:block text-sky-500 font-bold text-lg">
                  ExercisesJS
                </span>
              </NavLink>
            </li>
            <div className="hidden sm:flex items-center space-x-5">
              <div>
                <ModalProgress/>
              </div>
              <div className="flex items-center space-x-3">
                <Avatars name={completedName} />
                <div>
                  <h4 className="font-bold text-sm">{completedName}</h4>
                  <h5 className="font-semibold text-xs text-gray-300">
                    {user.username}
                  </h5>
                </div>
              </div>
              <ModalLogout />
            </div>
            <li className="block sm:hidden">
              <AccountMenu name={completedName} username={user.username} />
            </li>
          </ul>
        </nav>
      </header>
    </Fade>
  );
}
