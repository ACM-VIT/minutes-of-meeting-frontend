import React, { Component } from "react";

/** Style */
import "./LandingSection.scss";

/** Assets */
import googleLogo from "../../Assets/Google.svg";
import actaLogo from "../../Assets/Acta_Logo.svg";
import landingLeaf from "../../Assets/Landing_Leaf.svg";
import landingLeft from "../../Assets/Landing_Left.svg";

class LandingSection extends Component {
  logoToggle = () => {
    if (
      sessionStorage.getItem("TK") === null ||
      sessionStorage.getItem("TK") === ""
    ) {
      window.location.href = "/";
    } else {
      window.location.href = "/dashboard";
    }
  };

  loginHandler = (event) => {
    event.preventDefault();
    window.open(process.env.REACT_APP_GOOGLE_URL, "_self");
  };

  render() {
    return (
      <section className="landSection">
        <div onClick={this.logoToggle} className="cursor-pointer">
          <div>
            <img
              className="absolute pt-8 pl-16"
              src={actaLogo}
              alt="ActaLogo"
            />
          </div>
        </div>
        <div className="landsection__full">
          <div>
            <img className="ml-16" src={landingLeft} alt="LandingLeft" />
          </div>
          <div>
            <div className="landsection__full__rightLeaf">
              <img
                className="landsection__full__rightLeaf__image"
                src={landingLeaf}
                alt="LandingLeaf"
              />
            </div>
            <div className="landsection__full__loginSec">
              <div>
                <p className="text-7xl font-600">Hello, </p>
                <p className="text-7xl mt-8 font-600">Welcome Back</p>
              </div>
              <div className="mt-16">
                <a href="/">
                  <button
                    type="button"
                    className="landsection__full__loginSec__btn"
                    onClick={this.loginHandler}
                  >
                    <img className="pr-9" src={googleLogo} alt="google" />
                    <span className="text-2xl">Signin with Google</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LandingSection;
