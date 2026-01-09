import React from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";

const Header = () => {

  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/">Product</NavLink>
      </li>
      <li>
        <NavLink to="/">Companies</NavLink>
      </li>
      <li>
      <Link to='/register'>Register</Link>
      </li>
    </>
  );
  return (
    <div className="bg-blue-600 text-white  items-center ">
      <div className="navbar 11/12  mx-auto h-2">
        <div className="navbar">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Akij Group</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="btn btn-sm">
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
