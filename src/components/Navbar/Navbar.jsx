import React, { useState } from "react";
import { Link } from "react-router-dom";

/** Components */
import LogoutModal from "../../UI/Modal/LogoutMarkdownModal";

/** Assets */
import ActaLogo from "../../Assets/Acta_Logo.svg";
import Dropdown from "./Dropdown";

/** Styling */
import "./Navbar.scss";

const navbar = () => {
  const { pathname } = window.location;
  const path = pathname === "/" ? "dashboard" : pathname.substr(1);
  const pagePath = path.split("/")[0];

  const [show, setShow] = useState(false);
  const logoutFunc = () => {
    setShow(true);
  };

  return (
    <>
      <div>
        <div className="md:hidden fixed top-7 right-5 z-50">
          <Dropdown />
        </div>

        <header className="sm:navsection hidden md:block">
          <div className="navsection__navbar">
            <div className="flex items-center">
              <div>
                <Link to="/dashboard">
                  <div className="navsection__navbar__actalogo cursor-pointer">
                    <img src={ActaLogo} alt="ACTA" />
                  </div>
                </Link>
              </div>

              <div>
                <nav className="navsection__navbar__nav">
                  <Link
                    to="/dashboard"
                    className={
                      pagePath === "dashboard"
                        ? "navsection__navbar__nav__navlink mr-5 font-500"
                        : "mr-5 font-500"
                    }
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/moms"
                    className={
                      pagePath === "moms"
                        ? "navsection__navbar__nav__navlink font-500"
                        : "font-500"
                    }
                  >
                    MOMs
                  </Link>
                </nav>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={logoutFunc}
                className="navsection__navbar__button font-500"
              >
                Logout
              </button>
            </div>
          </div>
        </header>
      </div>
      <LogoutModal onClose={() => setShow(false)} show={show} />
    </>
  );
};

export default navbar;
