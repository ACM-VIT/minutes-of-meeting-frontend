import React from "react";

import EditIconDash from "../../Assets/EditIconDash.svg";
import DeleteLogo from "../../Assets/DeleteLogo.svg";

const DashCard = ({ title, date }) => (
  <div className="flex  my-4 mx-2 DashCard h-16 items-center px-6 xxs:px-3 md:px-12">
    <div className="flex-1 font-500 mr-3">{title}</div>
    <div className="flex-1 font-500 mr-3">{date}</div>
    <div className="flex-none flex items-center">
      <div className="pr-4 md:pr-8">
        <a href="/">
          <img className="w-5 md:w-6" src={DeleteLogo} alt="Delete" />
        </a>
      </div>
      <div>
        <a href="/">
          <img className="w-5 md:w-6" src={EditIconDash} alt="edit" />
        </a>
      </div>
    </div>
  </div>
);

export default DashCard;
