/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from "react";
import LoadingOverlay from "react-loading-overlay";

import urls from "../../urls";
/** Style */
import "./LandingSection.scss";

/** Assets */
import googleLogo from "../../Assets/Google.svg";
import actaLogo from "../../Assets/Acta_Logo.svg";
import landingLeaf from "../../Assets/Landing_Leaf.svg";
import landingLeft from "../../Assets/Landing_Left.svg";
import Illustration from "../../Assets/Illustration.svg";

const LandingSection = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const key = sessionStorage.getItem("AM");
    if (key) {
      window.location.href = "/dashboard";
    }
  }, []);

  const logoToggle = () => {
    setLoading(true);
    if (
      sessionStorage.getItem("AM") === null ||
      sessionStorage.getItem("AM") === ""
    ) {
      window.location.href = "/";
    } else {
      window.location.href = "/dashboard";
    }
  };

  const loginHandler = (event) => {
    setLoading(true);
    event.preventDefault();
    window.open(urls.GOOGLE_URL, "_self");
  };

  if (loading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <LoadingOverlay
      className="h-screen"
      active={loading}
      spinner
      text="Loading..."
    >
      <section className="md:landSection xxs:h-screen xxs:flex xxs:items-center">
        <div className="container mx-auto">
          <div className="flex justify-center items-center md:absolute mt-6 ml-2">
            <img
              src={actaLogo}
              alt="ActaLogo"
              onClick={logoToggle}
              className="cursor-pointer"
            />
          </div>

          {/* Mobile view styling  */}
          <div className="md:hidden">
            <p className="font-600 text-center text-2xl mt-5">
              Let’s get started!
            </p>
          </div>
          <div className="flex justify-center mt-16 md:hidden">
            <img
              src={Illustration}
              alt="illustration"
              className="xs:w-11/12 sm:w-8/12 w-64"
            />
          </div>
          <div className="md:hidden mt-16 mb-12 xs:mt-20 flex justify-center">
            <button
              type="button"
              className="landsection__full__loginSec__btn"
              onClick={loginHandler}
            >
              <img
                className="w-14 xs:w-14  sm:pl-6 xs:pl-6 pl-6"
                src={googleLogo}
                alt="google"
              />
              <span className="text-xl sm:pr-6 lg:text-2xl xs:pr-7 pr-6">
                Signin with Google
              </span>
            </button>
          </div>
        </div>

        {/* Desktop view */}
        <div className="landsection__full">
          <div className="hidden md:block">
            <img
              className="ml-16 md:w-10/12 lg:w-9/12"
              src={landingLeft}
              alt="LandingLeft"
            />
            <img
              className="absolute bottom-0 ml-16 w-64"
              src={landingLeaf}
              alt="LandingLeaf"
            />
          </div>
          <div className="hidden md:block">
            <div className="landsection__full__rightLeaf">
              <img
                className="landsection__full__rightLeaf__image"
                src={landingLeaf}
                alt="LandingLeaf"
              />
            </div>
            <div className="landsection__full__loginSec">
              <div>
                <p className="text-5xl lg:text-7xl font-600">Hello, </p>
                <p className="text-5xl lg:text-7xl mt-0 xl:mt-8 font-600">
                  Welcome Back
                </p>
              </div>
              <div className="mt-16">
                <button
                  type="button"
                  className="landsection__full__loginSec__btn"
                  onClick={loginHandler}
                >
                  <img
                    className="md:pl-11 lg:pl-12"
                    src={googleLogo}
                    alt="google"
                  />
                  <span className="md:pr-11 mdplus:pr-8 md:text-xl lgplus:pr-8 lgplus:text-xl lg:pr-12 text-xl lg:text-2xl">
                    Signin with Google
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LoadingOverlay>
  );
};

export default LandingSection;
