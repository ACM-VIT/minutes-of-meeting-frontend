import React from "react";
import { withRouter } from "react-router-dom";

import urls from "../../urls";

function postcard({ title, id, createdAt, displayName, image }) {
  function truncate(str) {
    return str.length > 15 ? `${str.substring(0, 20)}...` : str;
  }

  return (
    <div className="my-2 mx-8">
      <div className="relative h-64 w-64 bg-white rounded-lg border border-black">
        <div className="flex-col">
          <div className="text-center flex-1 mt-4 text-2xl">
            <p>{truncate(title)}</p>
          </div>
          <div className="text-center flex-1">{createdAt}</div>
          <div className="flex-1">
            <a href="/">
              <div className="mt-8 rounded-2xl w-48 ml-8 flex items-center bg-gray-200">
                <div>
                  <img
                    src={image}
                    className="w-8 mr-2 rounded-3xl"
                    alt="google"
                  />
                </div>
                <div className="ml-5">{displayName}</div>
              </div>
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 mb-4 justify-center ml-16">
          <a
            href={`${urls.CLIENT_BASEURL}/user/${id}`}
            className="w-32 h-7 m-auto bottom-0 flex justify-center items-center rounded-md bg-primary text-white"
            type="submit"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default withRouter(postcard);
