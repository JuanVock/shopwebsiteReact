import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../image/logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="site-title">
          <img src={imgLogo} width={50} height={50}></img>
        </Link>
        <ul>
          <li className="active">
            <Link to="/pricing">Princing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
