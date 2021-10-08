import React from "react";
import { Link, withRouter } from "react-router-dom";

import Clock from "../../Assets/Clock.svg";
import Calendar from "../../Assets/Calendar.svg";

function postcard({ title, id, createdAt, displayName, image, _id }) {
  function truncateTitle(str) {
    return str.length > 15 ? `${str.substring(0, 40)}...` : str;
  }

  const time = createdAt.substr(0, 8);
  const date = createdAt.substr(9);
  return (
    <div className="relative h-56 w-72">
      <Link to={`/user/${id}`}>
        <div className="flex-col bg-dropdown rounded-t-3xl">
          <div className="h-40">
            <div className="font-600 text-white text-xl pt-10 px-6 text-center">
              <p>{truncateTitle(title)}</p>
            </div>
            <div className="absolute bottom-20 flex px-6">
              <div className="flex items-center mr-6">
                <div className="mr-1">
                  <img src={Clock} alt="clock" />
                </div>
                <div className="text-white text-xs">{time}</div>
              </div>
              <div className="flex items-center">
                <div className="mr-1">
                  <img src={Calendar} alt="calendar" />
                </div>
                <div className="text-white text-xs">{date}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to={`/mom/user/${_id}`}>
        <div className="flex items-center bg-white h-16 postBox rounded-b-3xl pl-3">
          <div>
            <img
              src={image}
              className="w-10 h-10 mr-2 rounded-3xl"
              alt="google"
            />
          </div>
          <div className="font-600">{displayName}</div>
        </div>
      </Link>
    </div>
  );
}

export default withRouter(postcard);
