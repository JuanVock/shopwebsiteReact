import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../image/giphy.gif";

import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, googleLogin, logOut } = useAuth();

  /*const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };*/

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={imgLogo} width={50} height={50}></img>
      </Link>
      <ul>
        <li className="active">
          <Link to="/pricing">Clothing</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <button onClick={toggle}>{state ? logOut() : googleLogin()} </button>
        </li> */}
      </ul>
    </nav>
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const el_autohide = document.querySelector(".autohide");

  // add padding-top to bady (if necessary)
  const navbar_height = document.querySelector(".navbar").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if
});
