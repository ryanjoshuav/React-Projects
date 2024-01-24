import { useEffect, useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectNumItemsInCart } from "../features/cart/cartSlice.js";
import { selectTheme, toggleTheme } from "../features/user/userSlice.js";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.winter;
};

const Navbar = () => {
  const numItemsInCart = useSelector(selectNumItemsInCart);
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const isDarkTheme = theme === "dracula";

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* Title */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>

          {/* Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>

            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            {" "}
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/* Theme Icon */}
          <label className="swap swap-rotate">
            {/* hidden checkbox to trigger theme */}
            <input
              type="checkbox"
              onChange={handleThemeChange}
              defaultChecked={isDarkTheme}
            />

            {/* Icons */}
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          {/* Cart Link */}
          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />

              {/* Total Cart Item */}
              <span className="badge badge-sm badge-primary indicator indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
