import React, { useState } from "react";
//import icons
import { BsBag } from "react-icons/bs";
//import useSelector
import { useSelector } from "react-redux";
// import Link
import { Link } from "react-router-dom";
//import logo
import Logo from "../img/Promart_logo_2019.svg";



const Header = () => {
  const state = useSelector((state) => state.cart);
  // Estado local para indicar si el usuario está logueado
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  // Actualizamos el estado local para indicar que el usuario cerró sesión
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <header className="bg-orange-500 fixed w-full z-10 transition-all h-[40px]">
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <img className="w-[100px]" src={Logo} />
        </Link>
        {/* cart */}
        <div
          className="cursor-pointer flex relative gap-x-5"
        >
          {isLoggedIn ? (
            <button onClick={handleLogout} className="font-medium">
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="font-medium">Login</button>
            </Link>
          )}
          <Link to={"/cart"}>
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {state.cart.length}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
