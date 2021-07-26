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
import landingIllustration from "../../Assets/Landing_Illustration.svg";
import landingLeaf from "../../Assets/Landing_Leaf.svg";
import landingClock from "../../Assets/Landing_Clock.svg";
import landingLamp from "../../Assets/Landing_Lamp.svg";

// const login = () => {
//   const { setAuthData } = useContext(authContext);

class LandingSection extends Component {
  loginHandler(event) {
    event.preventDefault();
    // window.location.assign("http://localhost:9000/auth/google");
    window.open("http://localhost:9000/auth/google", "_self");

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
      <div className="landsection">
        <div>
          <div className="flex justify-between">
            <div className="pl-36 pt-11">
              <img src={actaLogo} alt="Acta" />
            </div>
            <div>
              <img src={landingClock} alt="Clock" />
            </div>
            <div>
              <img src={landingLamp} alt="Lamp" />
            </div>
          </div>
          <div>
            <img
              className="w-72"
              src={landingIllustration}
              alt="Illustration"
            />
          </div>
          <div>
            <img className="w-64" src={landingLeaf} alt="leaf" />
          </div>
        </div>

        <div className="flex-col">
          <div className="flex-end">
            <img
              className="transform rotate-180 "
              src={landingLeaf}
              alt="leaf"
            />
          </div>
          <div className="text-7xl font-600">Hello, Welcome Back</div>
          <div>
            <a href="/">
              <button
                type="button"
                className="flex w-96 h-14 justify-center items-center bg-primary text-white rounded-lg"
              >
                <img className="pr-9" src={googleLogo} alt="google" />
                <span className="text-2xl">Signin with Google</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingSection;
