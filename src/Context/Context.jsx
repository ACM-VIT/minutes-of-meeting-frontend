// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";
// import PropTypes from "prop-types";

// export const authContext = createContext({});

// const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({ loading: true, data: null });

//   // const setAuthData = (data) => {
//   //   setAuth({ data: data });
//   // };

//   useEffect(() => {
//     axios
//       .get("http://localhost:9000/getuser", {
//         withCredentials: true,
//         headers: { "Access-Control-Allow-Origin": "*" },
//       })
//       .then((res) => {
//         console.log(res);
//         if (res.data) {
//           setAuth(res.data);
//         }
//       });
//   }, []);

//   // const setAuthData = (data) => {
//   //   setAuth({ data: data });
//   // };

//   // useEffect(() => {
//   //   setAuth({
//   //     loading: false,
//   //     data: JSON.parse(window.localStorage.getItem("authData")),
//   //   });
//   // }, []);

//   // useEffect(() => {
//   //   window.localStorage.setItem("authData", JSON.stringify(auth.data));
//   // }, [auth.data]);
//   AuthProvider.propTypes = {
//     children: PropTypes.node.isRequired,
//   };

//   return (
//     <authContext.Provider value={{ auth }}>{children}</authContext.Provider>
//   );
// };

// export default AuthProvider;
