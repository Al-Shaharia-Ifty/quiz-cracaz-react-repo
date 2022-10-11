import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between md:mx-20 mx-10 mt-10">
      <h1 className="md:text-3xl text-2xl">Programming Quiz</h1>
      <div>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 mx-3 text-xl font-medium"
              : " mx-3 text-xl font-medium"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="blog"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 mx-3 text-xl font-medium"
              : " mx-3 text-xl font-medium"
          }
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
