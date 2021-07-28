/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

import Navbar from "../../../components/Navbar/Navbar";
import Aux from "../../../hoc/Aux/Aux";
import MarkDown from "../../../components/MarkDown/MarkDown";
import Modal from "../../../UI/Modal/Modal";

const addMarkdown = () => {
  const [show, setShow] = useState(false);

  return (
    <Aux>
      <Navbar />

      <div className="container ml-20 my-4 w-96">
        <form className="">
          <div className="border-b border-black py-2">
            <input
              className="appearance-none font-500 text-black bg-transparent border-none mr-3 py-1 px-2 w-full leading-tight focus:outline-none"
              type="text"
              placeholder="Title of the MOM"
              aria-label="Title of the MOM"
            />
          </div>
        </form>
      </div>

      <MarkDown />

      <div className="flex justify-end mr-20 my-4">
        <button
          type="submit"
          className="inline-flex justify-center font-600 bg-primary border-0 py-2 px-3 w-28 focus:outline-none rounded text-white text-base mt-4 md:mt-0;"
        >
          Save
        </button>
        <button
          type="submit"
          onClick={() => setShow(true)}
          className="inline-flex justify-center ml-4 font-600 bg-primary border-0 py-2 px-3 w-28 focus:outline-none rounded text-white text-base mt-4 md:mt-0;"
        >
          Cancel
        </button>
      </div>
      <Modal onClose={() => setShow(false)} show={show} />
    </Aux>
  );
};

export default addMarkdown;
