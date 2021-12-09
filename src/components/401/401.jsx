/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Link } from "react-router-dom";

const UnauthRoute = () => (
  <div className="container mx-auto mt-8">
    <div className="mx-2">
      <div className="text-6xl">401 Not Authorized</div>
      <div className="text-xl mt-2">
        Sorry, you are not allowed to access this page
      </div>
      <Link to="/">
        <div className="mt-2 bg-transparent hover:bg-primary text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-block">
          Go to Login
        </div>
      </Link>
    </div>
  </div>
);

export default UnauthRoute;
