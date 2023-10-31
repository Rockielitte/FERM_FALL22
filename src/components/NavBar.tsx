import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { dataCredential } from "../types";
import { useUserStore, useUserStore1 } from "../store";

import { BiLogOut } from "react-icons/bi";
function FilmNavbar() {
  const { user, update } = useUserStore1((state) => {
    return { user: state.user, update: state.update };
  });
  return (
    <div className="">
      <nav className="blue-grey darken-4 ">
        <div className="nav-wrapper flex gap-2 items-center justify-between">
          <Link to={"/"}>
            <span className="px-4 uppercase font-medium text-4xl font-luck">
              {"Filmme"}
            </span>
          </Link>
          <ul className="right hide-on-med-and-down m-auto flex gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {user.email == "truongquang2121@gmail.com" && (
              <li>
                <Link to="/manageFilms">Film Management</Link>
              </li>
            )}
          </ul>
          <div className="px-2">
            {user.email ? (
              <div className="flex gap-2 items-center px-2">
                <img
                  src={user.picture}
                  className="w-10 rounded-full shadow-lg"
                />
                <span className="text-sm font-semibold">{user.name}</span>

                <BiLogOut
                  className="text-4xl p-2 rounded-full bg-red-400 border  shadow-lg cursor-pointer "
                  onClick={() => {
                    update({} as dataCredential);
                  }}
                />
              </div>
            ) : (
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  toast.success("Login successfully");
                  const usProfile: dataCredential = jwtDecode(
                    credentialResponse.credential as string
                  );
                  update(usProfile);
                  console.log(usProfile);
                }}
                onError={() => {
                  console.log("Login Failed");
                  toast.success("Login failed");
                }}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default FilmNavbar;
