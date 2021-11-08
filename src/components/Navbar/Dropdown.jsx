/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

import Hamburger from "../../Assets/Hamburger.svg";
import useOutsideClick from "../useOutsideClick/useOutsideClick";

import Logout from "../../Assets/Logout.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef(null);

  useOutsideClick(menu, () => {
    setIsOpen(false);
  });

  const logout = () => {
    sessionStorage.removeItem("AM");
    window.location.href = "/";
  };

  return (
    <div className="z-50">
      <div className="flex md:hidden z-50">
        <button
          className="z-50"
          onClick={() => {
            setTimeout(() => {
              setIsOpen(!isOpen);
            }, 100);
          }}
          type="button"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          {!isOpen ? <img className="z-50" src={Hamburger} alt="ham" /> : null}
        </button>
      </div>

      <Transition show={isOpen}>
        <div className="relative z-50">
          <div
            ref={menu}
            className="md:hidden border border-bg-dropdown absolute right-1 top-1 text-white bg-dropdown rounded-md z-50"
            id="mobile-menu"
          >
            <div className="space-y-1 w-full mr-2 flex flex-col z-50">
              <div className="mt-2 pb-1 flex z-50">
                <Link to="/dashboard" className="font-500 w-full px-2 z-50">
                  Dashboard
                </Link>
              </div>

              <div className="flex pb-1 z-50">
                <Link to="/moms" className="font-500 w-full px-2 z-50">
                  MOMs
                </Link>
              </div>

              <div
                onClick={logout}
                className="flex items-center cursor-pointer z-50"
                style={{ marginBottom: "8px" }}
              >
                <div>
                  <button
                    type="button"
                    className="font-500 w-full px-2 outline-none pb-2"
                  >
                    Logout
                  </button>
                </div>
                <div>
                  <img className="pb-2" src={Logout} alt="logout" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default Nav;
