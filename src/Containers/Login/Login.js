import React, { Component } from "react";
// import { useHistory } from "react-router";
// import axios from "axios";
// import { authContext } from "../../Context/Context";

import Aux from "../../hoc/Aux/Aux";

// css
import "./Login.css";

// images
import googleLogo from "../../assets/images/Google.png";

// const login = () => {
//   const { setAuthData } = useContext(authContext);

class Login extends Component {
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
      <Aux>
        <div className=" relative flex items-center justify-center h-screen">
          <div className="border-solid border-2 border-white w-2/4 h-2/4 container bg-gray-200">
            <div className="Heading text-right pr-20 pt-8">ACTA</div>
            <button
              type="submit"
              onClick={this.loginHandler}
              className=" Button inline-flex items-center bg-primary hover:bg-red-600 text-black font-bold py-2 px-12 mt-20 mx-auto border border-red-900 rounded sm:ml-2 md:ml-8 "
            >
              <img className="pr-10" src={googleLogo} alt="google" />
              <span className="pr-8 text-lg">Login with Google</span>
            </button>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Login;
