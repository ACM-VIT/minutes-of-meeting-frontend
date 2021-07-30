import React, { Component } from "react";
// import { useHistory } from "react-router";
// import axios from "axios";
// import { authContext } from "../../Context/Context";
import Aux from "../../hoc/Aux/Aux";

/** Style */
import "./LandingSection.scss";

/** Assets */
import googleLogo from "../../Assets/Google.svg";
import actaLogo from "../../Assets/Acta_Logo.svg";
import landingLeaf from "../../Assets/Landing_Leaf.svg";
import landingLeft from "../../Assets/Landing_Left.svg";

// const login = () => {
//   const { setAuthData } = useContext(authContext);

class LandingSection extends Component {
  loginHandler(event) {
    event.preventDefault();
    // window.location.assign("http://localhost:9000/auth/google");
    window.open(process.env.REACT_APP_GOOGLE_URL, "_self");

    // axios
    //   .get("http://localhost:9000/getuser", {
    //     headers: { "Access-Control-Allow-Origin": "*" },
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     if (res.data) {
    //       setAuthData(res.data);
    //     }
    //   });
    // history.replace("/dashboard");
    // setAuthData(email);
  }
  // };

  render() {
    return (
      <section className="landSection">
        <a href="/">
          <div>
            <img
              className="absolute pt-8 pl-16"
              src={actaLogo}
              alt="ActaLogo"
            />
          </div>
        </a>
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
