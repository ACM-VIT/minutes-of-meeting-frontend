import React from "react";
import { Link } from "react-router-dom";

const button = () => (
  <div>
    <Link to="/mom/add">
      <button
        type="button"
        className="fixed bottom-6 right-4 inline-flex items-center justify-center w-12 h-12 mr-2 text-indigo-100 transition-colors duration-150 bg-black rounded-full focus:shadow-outline"
      >
        <i className="fas fa-plus" />
      </button>
    </Link>
  </div>
);

export default button;
