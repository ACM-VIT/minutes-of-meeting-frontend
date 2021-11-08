import React from "react";
import magGlass from "../Assets/Mag_Glass.svg";
const NotFound = () => (
  <div>
    <div className="flex-col items-center justify-center text-center w-72 h-48 mx-auto mt-32">
      <div className="w-16 mx-auto mb-3">
        <img src={magGlass} alt="notFound" />
      </div>
      <div className="text-2xl mb-2">No Matching MOM</div>
      <div className="text-sm text-gray-400">
        There were no MOMs matching your search
      </div>
    </div>
  </div>
);

export default NotFound;
