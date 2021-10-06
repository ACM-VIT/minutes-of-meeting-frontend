/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import moment from "moment";
import jwtDecode from "jwt-decode";

import urls from "../../urls";

import Navbar from "../../components/Navbar/Navbar";
import AddButton from "../../components/AddButton/AddButton";
import EditIcon from "../../Assets/EditIcon.svg";

const SingleMomSection = () => {
  const [singleMom, setSingleMom] = useState({
    title: "",
    body: [],
  });
  const [imageLogo, setimageLogo] = useState();
  const [firstNameState, setfirstNameState] = useState();
  const [dispName, setDispName] = useState();
  const [idState, setIdState] = useState();
  const [editState, setEditState] = useState(false);
  const [bodyShow, setBodyShow] = useState("");

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
      const decoded = jwtDecode(secret);
      const { id } = decoded;
      axios
        .get(`${urls.SERVER_BASEURL}/moms/${urlId}`, { headers })
        .then((response) => {
          const { data } = response;
          setSingleMom(data);
          setBodyShow(data.body);
          setfirstNameState(response.data.user.firstName);
          setDispName(response.data.user.displayName);
          setimageLogo(response.data.user.image);
          setIdState(response.data.user._id);
          if (id === response.data.user._id) {
            setEditState(true);
          }
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
              <div className={editState === true ? "" : "hidden"}>
                <a href={`${urls.CLIENT_BASEURL}/mom/edit/${urlId}`}>
                  <img className="mr-8" src={EditIcon} alt="edit" />
                </a>
              </div>
            </div>
            <div className="px-4 md:px-8 pt-2 mb-8">{date}</div>
            <MDEditor value={bodyShow} />
          </div>

          <div className="mx-auto md:ml-12 order-1 md:order-2 mb-12 md:mb-0 mt-16 md:mt-0">
            <div className="h-56 w-56 bg-white rounded-lg border border-black">
              <div className="mt-8">
                <div>
                  <img
                    src={imageLogo}
                    alt="google"
                    className="rounded-full mx-auto w-32"
                  />
                </div>
                <div className="mt-3 font-600 text-center">{dispName}</div>
              </div>
            </div>
            <a
              href={`${urls.CLIENT_BASEURL}/mom/user/${idState}`}
              className="flex items-center font-500 justify-center w-56 h-8 rounded text-center text-white bg-primary mt-2"
            >
              More from {firstNameState}
            </a>
          </div>
        </div>
      </section>
      <AddButton />
    </>
  );
};

export default SingleMomSection;
