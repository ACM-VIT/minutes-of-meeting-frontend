import React from "react";

const button = () => {
  const addButtonHandler = () => {
    window.open("http://localhost:3000/mom/add", "_self");
  };
  return (
    <div>
      <button
        type="button"
        className="fixed bottom-10 right-10 inline-flex items-center justify-center w-12 h-12 mr-2 text-indigo-100 transition-colors duration-150 bg-black rounded-full focus:shadow-outline"
        onClick={addButtonHandler}
      >
        <i className="fas fa-plus" />
      </button>
    </div>
  );
};
export default button;
