/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NavBar.css";

const NavBar = ({ onCategoryChange }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>TECH-BLOG</h1>
      </div>

      <div className="dropdown">
        <button
          className="btn btn-secondary btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <div className="dropbtn">
            <li>
              <button onClick={() => onCategoryChange("all")}>All</button>
            </li>
            <li>
              <button onClick={() => onCategoryChange("gaming")}>Gaming</button>
            </li>
            <li>
              <button onClick={() => onCategoryChange("mobile")}>Mobile</button>
            </li>
            <li>
              <button onClick={() => onCategoryChange("laptop")}>Laptop</button>
            </li>
            <li>
              <button onClick={() => onCategoryChange("camera")}>Camera</button>
            </li>
          </div>
        </ul>
      </div>
      <div>
        <button className="navbtn">Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
