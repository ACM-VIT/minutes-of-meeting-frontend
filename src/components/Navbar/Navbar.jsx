import React from "react";
import axios from "axios";

/** Assets */
import ActaLogo from "../../Assets/Acta_Logo.svg";

/** Styling */
import "./Navbar.scss";

const navbar = () => {
  const logout = () => {
    axios.get("http://localhost:9000/auth/logout").then((res) => {
      // if (res.data === "done") {
      window.location.href = "/";
      // }
    });
  };

  return (
    <header className="navsection">
      <div className="navsection__navbar">
        <div className="flex items-center">
          <div>
            <a href="{null}" className="navsection__navbar__actalogo">
              <img src={ActaLogo} alt="ACTA" />
            </a>
          </div>
          <div>
            <nav className="navsection__navbar__nav">
              <a href="/dashboard" className="mr-5 hover:text-gray-900">
                Dashboard
              </a>
              <a href="/moms" className="mr-5 hover:text-gray-900">
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
// {
// const userObject = useContext(authContext);
// const { setAuthData, auth } = useContext(authContext);
// const onLogOut = () => {
//   setAuthData(null);
// }

// const logout = () => {
//   axios
//     .get("http://localhost:9000/auth/logout", {
//       withCredentials: true,
//     })
//     .then((res) => {
//       console.log("[Navbar.js] response");
//       // setAuthData(null);
//       // window.location.href("/");

//       if (res.data === "done") {
//         window.location.href = "/login";
//       }
//     });
// };

// return (

// );
// };
// )

export default navbar;
