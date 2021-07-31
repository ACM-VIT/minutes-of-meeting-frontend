import React from "react";

import EditIconDash from "../../Assets/EditIconDash.svg";

const DashCard = () => (
  <div className="flex justify-between my-4 DashCard h-16 items-center px-12">
    <div>title</div>
    <div>date</div>
    <div>
      <a href="/">
        <img className="w-6" src={EditIconDash} alt="edit" />
      </a>
    </div>
  </div>
);

export default DashCard;
