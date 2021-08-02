import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
/** Assets */
import ActaLogo from "../../Assets/Acta_Logo.svg";

/** Styling */
import "./Navbar.scss";

const navbar = () => {
  const { pathname } = window.location;
  const path = pathname === "/" ? "dashboard" : pathname.substr(1);
  const pagePath = path.split("/")[0];

  const logout = () => {
    axios.get(process.env.REACT_APP_GOOGLE_LOGOUT).then((res) => {
      window.location.href = "/";
    });
  };

  return (
    <header className="navsection">
      <div className="navsection__navbar">
        <div className="flex items-center">
          <div>
            <a href="/" className="navsection__navbar__actalogo">
              <img src={ActaLogo} alt="ACTA" />
            </a>
          </div>
          <div>
            <nav className="navsection__navbar__nav">
              <a
                href="/dashboard"
                className={
                  pagePath === "dashboard"
                    ? "navsection__navbar__nav__navlink mr-5"
                    : ""
                }
              >
                Dashboard
              </a>
              <a
                to="/moms"
                href="/moms"
                className={
                  pagePath === "moms"
                    ? "navsection__navbar__nav__navlink ml-5"
                    : ""
                }
              >
                MOMs
              </a>
            </nav>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={logout}
            className="navsection__navbar__button"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </header>
  );
};

export default navbar;
