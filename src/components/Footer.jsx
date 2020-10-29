import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-400 mt-2">
      <div className="container mx-auto p-10 flex justify-between">
        <div className="container w-full sm:w-8/12 mx-auto">
          <div className="p-4">
            <div className="nav-brand text-4xl text-gray-900 font-light pb-4 text-center">
              <Link to="/">Minimal</Link>
            </div>
            <ul className="nav-items text-base flex pb-4 flex justify-center">
              <li className="nav-item text-gray-500 hover:text-gray-700 ">
                <Link
                  exact
                  to="/">                  
                  Home
                </Link>
              </li>
              <li className="nav-item text-gray-500 hover:text-gray-700 ml-4">
                <Link
                  exact
                  to="/about">                  
                  About
                </Link>
              </li>
              <li className="nav-item text-gray-500 hover:text-gray-700 ml-4">
                <Link
                  exact
                  to="/twitter">                  
                  Twitter
                </Link>
              </li>
              <li className="nav-item text-gray-500 hover:text-gray-700 ml-4">
                <Link
                  exact
                  to="/instagram">                  
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-5 bg-gray-600 flex justify-center">
        Made with <span role="img">💗</span>
      </div>
    </div>
  );
}

export default Footer;
