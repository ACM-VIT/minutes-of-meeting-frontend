import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import urls from "../../urls";

import EditIconDash from "../../Assets/EditIconDash.svg";
import DeleteLogo from "../../Assets/DeleteLogo.svg";
import Aux from "../../hoc/Aux/Aux";
import DashMarkdownModal from "../../UI/Modal/DashMarkdownModal";

const DashCard = ({ title, date, id }) => {
  const [show, setShow] = useState(false);
  const deleteFunc = () => {
    setShow(true);
  };

  function truncate(str) {
    return str.length > 15 ? `${str.substring(0, 24)}...` : str;
  }

  return (
    <Aux>
      <ToastContainer />
      <div className="flex my-4 mx-2 DashCard h-16 items-center px-6 xxs:px-3 md:px-12">
        <div className="flex-1 font-500 mr-3">
          <a href={`${urls.CLIENT_BASEURL}/user/${id}`}>{truncate(title)}</a>
        </div>
        <div className="flex-1 font-500 mr-3">{date}</div>
        <div className="flex-none flex items-center">
          <div className="pr-4 md:pr-8 ">
            <div onClick={deleteFunc}>
              <img
                className="w-5 md:w-6 cursor-pointer"
                src={DeleteLogo}
                alt="Delete"
              />
            </div>
          </div>
          <div>
            <a href={`${urls.CLIENT_BASEURL}/mom/edit/${id}`}>
              <img className="w-5 md:w-6" src={EditIconDash} alt="edit" />
            </a>
          </div>
        </div>
      </div>
      <DashMarkdownModal id={id} onClose={() => setShow(false)} show={show} />
    </Aux>
  );
};

export default DashCard;
