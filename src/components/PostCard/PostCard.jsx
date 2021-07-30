import React from "react";
import { withRouter } from "react-router-dom";

function postcard({ title, body }) {
  return (
    <div className="my-2 mx-8">
      <div className=" h-64 w-64 bg-white shadow-lg">
        <div className="flex-col">
          <div className="text-center my-4 text-2xl">
            <p>{title}</p>
          </div>
          <div className="text-center pb-12">{body}</div>
          <div className="py-8 text-center">
            {/* {console.log(User)}
            <img src={User.image} alt="google" />
            <a href="/">{User.displayName}</a> */}
            Google Info
          </div>
        </div>
        <div>
          <button
            className="w-32 h-7 m-auto bottom-0 flex justify-center items-center rounded-md bg-primary text-white"
            type="submit"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(postcard);
