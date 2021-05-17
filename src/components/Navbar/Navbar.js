import React from "react";
import axios from "axios";

const navbar = () => {
  const logout = () => {
    axios.get("http://localhost:9000/auth/logout").then((res) => {
      // if (res.data === "done") {
      window.location.href = "/";
      // }
    });
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="{null}"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">ACTA</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a href="/dashboard" className="mr-5 hover:text-gray-900">
            Dashboard
          </a>
          <a href="{null}" className="mr-5 hover:text-gray-900">
            MOMs
          </a>
        </nav>
        <button
          type="button"
          onClick={logout}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          LOGOUT
        </button>
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
