import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function FilmNavbar() {
  return (
    <div className="">
      <nav className="blue-grey darken-4 ">
        <div className="nav-wrapper">
          <Link to={"/"}>
            <span className="px-4 uppercase font-medium text-4xl font-luck">
              {"Filmme"}
            </span>
          </Link>

          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default FilmNavbar;
