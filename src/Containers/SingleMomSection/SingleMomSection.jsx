import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";

const SingleMomSection = () => {
  const path = useLocation();
  const id = path.pathname.split("/")[2];

  axios
    .get(`http://localhost:9000/moms/details/${id}`)
    .then((response) => {
      const { data } = response;
      console.log(data);
    })
    .catch((error) => console.error(`Error: ${error}`));

  return (
    <>
      <div>Single Mom Section</div>
      <div>asda</div>
    </>
  );
};

export default SingleMomSection;
