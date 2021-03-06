/* eslint-disable react/no-unescaped-entities */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import jwtDecode from "jwt-decode";
import LoadingOverlay from "react-loading-overlay";

import urls from "../../urls";

import Navbar from "../../components/Navbar/Navbar";
import AddButton from "../../components/AddButton/AddButton";
import PostCard from "../../components/PostCard/PostCard";
import SearchIcon from "../../Assets/SearchIcon.svg";
import NotFound from "../../components/NotFound";
import NotFound404 from "../../components/404/404";

const AllMomSection = () => {
  const url = urls.SERVER_BASEURL;

  const [allMoms, setAllMoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [addSecret, setAddSecret] = useState();
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      sessionStorage.getItem("AM") === null ||
      sessionStorage.getItem("AM") === ""
    ) {
      window.location.href = "/";
    } else {
      setLoading(true);
      const secret = sessionStorage.getItem("AM");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      };
      const decoded = jwtDecode(secret);
      setAddSecret(decoded);

      axios
        .get(`${url}/moms`, { headers })
        .then((response) => {
          setLoading(false);
          const allMomsObj = response.data;
          setAllMoms(allMomsObj.moms);
        })
        .catch(() => setShowError(true));
    }
  }, []);

  const filteredAllMoms = allMoms.filter((val) => {
    if (val.user._id !== addSecret.id) {
      return val;
    }
  });

  const result = filteredAllMoms.filter((val) => {
    if (
      searchTerm !== "" &&
      !val.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      console.log();
    } else {
      return val;
    }
  });

  if (loading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

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
          <div className="z-20">
            <Navbar />
            <div className="container mx-auto flex flex-col md:flex md:flex-row md:justify-between md:items-center pt-4">
              <div
                className={
                  filteredAllMoms.length > 0
                    ? "text-3xl xs:text-4xl sm:text-6xl font-600 px-2 xss:px-2 order-2 md:order-1"
                    : "text-3xl xs:text-4xl sm:text-6xl font-600 px-2 xss:px-2 order-2 md:order-1 mt-4 md:mt-0"
                }
              >
                MOMs
              </div>

              <div
                className={
                  filteredAllMoms.length > 0
                    ? "flex h-8 justify-between border rounded-xl border-black w-56 px-2 mr-2 mb-12 md:mb-0 mt-3 md:mt-0 ml-2 md:ml-0 order-1 md:order-2"
                    : "hidden"
                }
              >
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
            <div
              className={
                filteredAllMoms.length > 0
                  ? "hidden"
                  : "container mx-auto font-500 text-md sm:text-lg mt-2 px-2"
              }
            >
              There aren't any MOMs to show!
            </div>
            {resultLength.length === 0 && searchTerm.length > 0 ? (
              <NotFound />
            ) : (
              ""
            )}
            <div className="container mx-auto pb-8 z-20">
              <div className="grid justify-items-center xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8 mt-6 z-20">
                {result.map((val) => (
                  <div
                    key={val._id}
                    className={val.user._id === addSecret.id ? "hidden" : ""}
                  >
                    <PostCard
                      title={val.title}
                      id={val._id}
                      _id={val.user._id}
                      displayName={val.user.displayName}
                      image={val.user.image}
                      createdAt={moment(val.createdAt).format(
                        "hh:mm A Do MMM YYYY"
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>

            <AddButton />
          </div>
        </div>
      </LoadingOverlay>
      <div className={showError === true ? "" : "hidden"}>
        <NotFound404 />
      </div>
    </>
  );
};
export default AllMomSection;
