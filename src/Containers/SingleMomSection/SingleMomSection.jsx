/* eslint-disable no-underscore-dangle */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import Navbar from "../../components/Navbar/Navbar";
import AddButton from "../../components/AddButton/AddButton";

const SingleMomSection = () => {
  const [singleMom, setSingleMom] = useState([]);

  const path = useLocation();
  const id = path.pathname.split("/")[2];
  useEffect(() => {
    axios
      .get(`http://localhost:9000/moms/details/${id}`)
      .then((response) => {
        const { data } = response;
        setSingleMom(data);
        //   setTitle(data.title);
        //   setBody(data.body);
        console.log(data);
        //   console.log(setBody);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  const date = moment(singleMom.createdAt).format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
  );

  return (
    <>
      <Navbar />
      <section className="container h-full mx-auto px-12">
        <div className="flex h-full justify-between">
          <div className="container h-full bg-mom">
            <div className="px-8 pt-8 text-5xl">{singleMom.title}</div>
            <div className="px-8 pt-2">{date}</div>
            <div className="p-8">{singleMom.body}</div>
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
