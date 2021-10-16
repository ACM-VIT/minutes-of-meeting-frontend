/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => (
  <div className="container mx-auto mt-8">
    <div className="mx-2">
      <div className="text-6xl">404 Not Found</div>
      <div className="text-xl mt-2">
        We're sorry, this resource is not found.
      </div>
      <Link to="/dashboard">
        <div className="mt-2 bg-transparent hover:bg-primary text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-block">
          Go to Dashboard
        </div>
      </Link>
    </div>
  </div>
);

export default NotFound404;
