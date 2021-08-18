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
    const token = sessionStorage.getItem("TK");

    if (
      sessionStorage.getItem("TK") === null ||
      sessionStorage.getItem("TK") === ""
    ) {
      window.location.href = "/";
    } else {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
        <div className="container mx-auto flex justify-between items-center mt-4 px-4">
          <div className="text-6xl font-600">MOMs</div>
          <div className="flex h-8 justify-between border rounded-xl border-black">
            <input
              className="relative text-sm text-black mx-3 py-1 px-2 w-full md:w-48 focus:outline-none"
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
