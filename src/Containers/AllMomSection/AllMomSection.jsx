/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import AddButton from "../../components/AddButton/AddButton";
import PostCard from "../../components/PostCard/PostCard";

const AllMomSection = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const [allMoms, setAllMoms] = useState([]);

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

  console.log(allMoms);

  return (
    <>
      <div>
        <Navbar />
        <div className="container m-auto text-6xl font-600 mt-4 px-4">MOMs</div>
        <div className="flex flex-wrap">
          {allMoms.map((card) => (
            <PostCard
              title={card.title}
              key={card._id}
              body={card.body}
              //   User={card.User}
            />
          ))}
        </div>
        <AddButton />
      </div>
    </>
  );
};

export default AllMomSection;
