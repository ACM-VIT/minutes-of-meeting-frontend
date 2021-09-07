import React from "react";
import urls from "../../urls";

const button = () => {
  const addButtonHandler = () => {
    window.open(`${urls.CLIENT_BASEURL}/mom/add`, "_self");
  };
  return (
    <div>
      <button
        type="button"
        className="fixed bottom-6 right-4 inline-flex items-center justify-center w-12 h-12 mr-2 text-indigo-100 transition-colors duration-150 bg-black rounded-full focus:shadow-outline"
        onClick={addButtonHandler}
      >
        <i className="fas fa-plus" />
      </button>
    </div>
  );
};
export default button;
