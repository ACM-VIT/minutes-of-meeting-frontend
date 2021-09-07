/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";

import urls from "../../urls";

import Navbar from "../../components/Navbar/Navbar";
import AddButton from "../../components/AddButton/AddButton";
import EditIcon from "../../Assets/EditIcon.svg";

const SingleMomSection = () => {
  const [singleMom, setSingleMom] = useState({ title: "", body: [] });

  const path = useLocation();
  const urlId = path.pathname.split("/")[2];

  const secret = sessionStorage.getItem("AM");

  if (
    sessionStorage.getItem("AM") === null ||
    sessionStorage.getItem("AM") === ""
  ) {
    window.location.href = "/";
  } else {
    useEffect(() => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      };
      axios
        .get(`${urls.SERVER_BASEURL}/moms/${urlId}`, { headers })
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
      <section className="container h-full mx-auto">
        <div className="flex flex-col md:flex md:flex-row h-full justify-center mx-4 md:mx-0">
          <div className="container h-full bg-mom order-2 md:order-1">
            <div className="flex pt-8 items-center">
              <div className="px-4 md:px-8 text-3xl md:text-5xl">
                {singleMom.title}
              </div>
              <div>
                <a href={`${urls.CLIENT_BASEURL}/mom/edit/${urlId}`}>
                  <img className="mr-8" src={EditIcon} alt="edit" />
                </a>
              </div>
            </div>
            <div className="px-4 md:px-8 pt-2 mb-8">{date}</div>
            {singleMom.body.map((items, i) => (
              <div key={i} className="px-4 md:px-8 py-1">
                {items}
              </div>
            ))}
          </div>

          <div className="mx-auto md:ml-12 order-1 md:order-2 mb-12 md:mb-0 mt-16 md:mt-0">
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
