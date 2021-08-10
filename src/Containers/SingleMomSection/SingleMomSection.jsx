/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";

import Navbar from "../../components/Navbar/Navbar";
import AddButton from "../../components/AddButton/AddButton";
import EditIcon from "../../Assets/EditIcon.svg";

const SingleMomSection = () => {
  const [singleMom, setSingleMom] = useState({ title: "", body: [] });

  const path = useLocation();
  const urlId = path.pathname.split("/")[2];

  const token = sessionStorage.getItem("TK");

  if (
    sessionStorage.getItem("TK") === null ||
    sessionStorage.getItem("TK") === ""
  ) {
    window.location.href = "/";
  } else {
    useEffect(() => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      axios
        .get(process.env.REACT_APP_SINGLE_MOM + urlId, { headers })
        .then((response) => {
          const { data } = response;
          const arrayOfLines = data.body.match(/[^\r\n]+/g);
          data.body = arrayOfLines;
          setSingleMom(data);
        })
        .catch((error) => console.error(`Error: ${error}`));
    }, []);
  }

  const date = moment(singleMom.createdAt).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );
  return (
    <>
      <Navbar />
      <section className="container h-full mx-auto px-12">
        <div className="flex h-full justify-between">
          <div className="container h-full bg-mom">
            <div className="flex">
              <div className="px-8 pt-8 text-5xl">{singleMom.title}</div>
              <a href={`http://localhost:3000/mom/edit/${urlId}`}>
                <img className="pt-10" src={EditIcon} alt="edit" />
              </a>
            </div>
            <div className="px-8 pt-2 pb-4">{date}</div>
            {singleMom.body.map((items, i) => (
              <div key={i} className="px-8 py-1">
                {items}
              </div>
            ))}
          </div>

          <div className="ml-12">
            <div className="h-64 w-64 bg-white rounded-lg border border-black">
              <div className="rounded-full">google image</div>
              <div className="mt-2">DisplayName</div>
            </div>
            <a
              href="/"
              className="flex items-center justify-center w-64 h-8 rounded text-center text-white bg-primary mt-2"
            >
              More from ----
            </a>
          </div>
        </div>
      </section>
      <AddButton />
    </>
  );
};

export default SingleMomSection;
