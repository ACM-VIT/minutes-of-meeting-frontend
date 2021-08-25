/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import Navbar from "../../components/Navbar/Navbar";
import AddButton from "../../components/AddButton/AddButton";
import PostCard from "../../components/PostCard/PostCard";
import SearchIcon from "../../Assets/SearchIcon.svg";

const AllMomSection = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const [allMoms, setAllMoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      axios
        .get(`${url}moms`, { headers })
        .then((response) => {
          const allMomsObj = response.data;
          setAllMoms(allMomsObj.moms);
        })
        .catch((error) => console.error(`Error: ${error}`));
    }
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="container mx-auto flex flex-col md:flex md:flex-row md:justify-between md:items-center mt-4">
          <div className="text-3xl xs:text-4xl sm:text-6xl font-600 px-2 xss:px-2 sm:px-0 order-2 md:order-1">
            MOMs
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
        <div className="container mx-auto flex flex-wrap mt-3">
          {allMoms
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              }
              if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
            })
            .map((val) => (
              <PostCard
                title={val.title}
                id={val._id}
                key={val._id}
                createdAt={moment(val.createdAt).format("MMM Do YY")}
              />
            ))}
        </div>

        <AddButton />
      </div>
    </>
  );
};
export default AllMomSection;
