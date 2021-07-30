/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import AddButton from "../../components/AddButton/AddButton";
import PostCard from "../../components/PostCard/PostCard";

const AllMomSection = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const [allMoms, setAllMoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`${url}moms`)
      .then((response) => {
        const allMomsObj = response.data;
        setAllMoms(allMomsObj.moms);
        console.log(allMoms);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <div className="container m-auto flex justify-between mt-4 px-4">
          <div className="text-6xl font-600">MOMs</div>
          <div className="">
            <input
              className="appearance-none text-black bg-transparent mr-3 border-b border-black py-1 px-2 w-full md:w-72 leading-tight focus:outline-none"
              type="text"
              placeholder="Search any MOM"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          {allMoms
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              }
              if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
            })
            .map((val, key) => (
              <PostCard title={val.title} key={val._id} body={val.body} />
            ))}
        </div>

        <AddButton />
      </div>
    </>
  );
};
export default AllMomSection;
