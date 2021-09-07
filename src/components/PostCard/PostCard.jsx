import React from "react";
import { withRouter } from "react-router-dom";
import urls from "../../urls";

function postcard({ title, id, createdAt }) {
  function truncate(str) {
    return str.length > 15 ? `${str.substring(0, 20)}...` : str;
  }

  return (
    <div className="my-2 mx-8">
      <div className="relative h-64 w-64 bg-white rounded-lg border border-black">
        <div className="flex-col">
          <div className="text-center mt-4 text-2xl">
            <p>{truncate(title)}</p>
          </div>
          <div className="text-center">{createdAt}</div>
          <div className="py-8 text-center">
            {/* {console.log(User)}
            <img src={User.image} alt="google" />
            <a href="/">{User.displayName}</a> */}
            Google Info incoming
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
