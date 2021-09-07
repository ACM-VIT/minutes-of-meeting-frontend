import React from "react";
import axios from "axios";
import urls from "../../urls";

/** Assets */
import ActaLogo from "../../Assets/Acta_Logo.svg";
import Dropdown from "./Dropdown";

/** Styling */
import "./Navbar.scss";

const navbar = () => {
  const { pathname } = window.location;
  const path = pathname === "/" ? "dashboard" : pathname.substr(1);
  const pagePath = path.split("/")[0];

  const logout = () => {
    axios.get(urls.GOOGLE_LOGOUT).then(() => {
      sessionStorage.removeItem("AM");
      window.location.href = "/";
    });
  };

  const logoToggle = () => {
    if (
      sessionStorage.getItem("AM") === null ||
      sessionStorage.getItem("AM") === ""
    ) {
      window.location.href = "/";
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div>
      <div className="md:hidden fixed top-8 right-5">
        <Dropdown />
      </div>

      <header className="sm:navsection hidden md:block">
        <div className="navsection__navbar">
          <div className="flex items-center">
            <div>
              <div
                onClick={logoToggle}
                className="navsection__navbar__actalogo cursor-pointer"
              >
                <img src={ActaLogo} alt="ACTA" />
              </div>
            </div>

            <div>
              <nav className="navsection__navbar__nav">
                <a
                  href="/dashboard"
                  className={
                    pagePath === "dashboard"
                      ? "navsection__navbar__nav__navlink mr-5 font-500"
                      : "mr-5 font-500"
                  }
                >
                  Dashboard
                </a>
                <a
                  to="/moms"
                  href="/moms"
                  className={
                    pagePath === "moms"
                      ? "navsection__navbar__nav__navlink font-500"
                      : "font-500"
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
              className="navsection__navbar__button font-500"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default navbar;
