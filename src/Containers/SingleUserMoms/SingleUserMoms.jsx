/* eslint-disable react/no-unescaped-entities */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useLocation } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";

import urls from "../../urls";

import Navbar from "../../components/Navbar/Navbar";
import AddButton from "../../components/AddButton/AddButton";
import PostCard from "../../components/PostCard/PostCard";
import SearchIcon from "../../Assets/SearchIcon.svg";
import NotFound from "../../components/NotFound";
import NotFound404 from "../../components/404/404";

const SingleUserMoms = () => {
  const url = urls.SERVER_BASEURL;

  const [singleMoms, setSingleMoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const path = useLocation();
  const id = path.pathname.split("/")[3];

  useEffect(() => {
    if (
      sessionStorage.getItem("AM") === null ||
      sessionStorage.getItem("AM") === ""
    ) {
      window.location.href = "/";
    } else {
      const secret = sessionStorage.getItem("AM");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      };
      setLoading(true);
      axios
        .get(`${url}/moms/user/${id}`, { headers })
        .then((response) => {
          setLoading(false);
          const singleMomsObj = response.data;
          setSingleMoms(singleMomsObj);
        })
        .catch(() => setShowError(true));
    }
  }, []);

  if (loading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const result = singleMoms.filter((val) => {
    if (
      searchTerm !== "" &&
      !val.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      console.log();
    } else {
      return val;
    }
  });

  // To fetch firstname of the user for heading
  const displayNameArr = result.map((val) => val.user.firstName);
  const displayName = displayNameArr[0];
  const resultLength = result.map(() => console.log());

  return (
    <>
      <LoadingOverlay
        className="h-screen"
        active={loading}
        spinner
        text="Loading..."
      >
        <div className={showError === true ? "hidden" : ""}>
          <Navbar />
          <div className="container mx-auto flex flex-col md:flex md:flex-row md:justify-between md:items-center pt-4">
            <div className="text-3xl xs:text-4xl sm:text-6xl font-600 px-2 xss:px-2 order-2 md:order-1">
              {displayName}'s MOMs
            </div>
            <div className="flex h-8 justify-between border rounded-xl border-black w-56 px-2 mr-2 mb-12 md:mb-0 mt-3 md:mt-0 ml-2 md:ml-0 order-1 md:order-2">
              <input
                className="relative text-sm text-black py-1 px-2 w-32 sm:w-48 focus:outline-none"
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <img className="mr-2 w-6" src={SearchIcon} alt="search" />
            </div>
          </div>
          {resultLength.length === 0 && searchTerm.length > 0 ? (
            <NotFound />
          ) : (
            ""
          )}
          <div className="container mx-auto mb-8 z-20">
            <div className="grid justify-items-center xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8 mt-6 z-20">
              {result.map((val) => (
                <PostCard
                  title={val.title}
                  id={val._id}
                  key={val._id}
                  _id={val.user._id}
                  displayName={val.user.displayName}
                  image={val.user.image}
                  createdAt={moment(val.createdAt).format(
                    "hh:mm A Do MMM YYYY"
                  )}
                />
              ))}
            </div>
          </div>

          <AddButton />
        </div>
      </LoadingOverlay>
      <div className={showError === true ? "" : "hidden"}>
        <NotFound404 />
      </div>
    </>
  );
};
export default SingleUserMoms;
