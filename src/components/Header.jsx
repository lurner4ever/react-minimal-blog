import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container w-full sm:w-8/12 mx-auto">
      <div className="p-4">
        <div className="nav-brand text-5xl text-gray-900 font-light pb-4 text-center">
          <NavLink to="/">Minimal</NavLink>
        </div>
        <ul className="nav-items text-base flex pb-4">
          <li className="nav-item text-gray-500 hover:text-gray-700 ">
            <NavLink
              exact
              to="/"
              activeClassName="border-b-2 border-gray-600 font-light text-gray-700">
              Home
            </NavLink>
          </li>
          <li className="nav-item text-gray-500 hover:text-gray-700 ml-4">
            <NavLink
              exact
              to="/about"
              activeClassName="border-b-2 border-gray-600 font-light text-gray-600">
              About
            </NavLink>
          </li>
          <li className="nav-item text-gray-500 hover:text-gray-700 ml-auto">
            <NavLink
              exact
              to="/twitter"
              activeClassName="border-b-2 border-gray-600 font-light text-gray-600">
              Twitter
            </NavLink>
          </li>
          <li className="nav-item text-gray-500 hover:text-gray-700 ml-4">
            <NavLink
              exact
              to="/instagram"
              activeClassName="border-b-2 border-gray-600 font-light text-gray-600">
              Instagram
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Header;
