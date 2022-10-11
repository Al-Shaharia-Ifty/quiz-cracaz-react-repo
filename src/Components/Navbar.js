import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-20 mt-10">
      <h1 className="text-3xl">Programming Quiz</h1>
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
