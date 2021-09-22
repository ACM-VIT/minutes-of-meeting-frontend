/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import moment from "moment";
import urls from "../../urls";

import Navbar from "../../components/Navbar/Navbar";
import Aux from "../../hoc/Aux/Aux";
import AddButton from "../../components/AddButton/AddButton";
import DashCard from "../../components/DashCard/DashCard";
import DashCardHeading from "../../components/DashCardHeading";

const dashboardSection = () => {
  const path = useLocation();
  const [heading, setHeading] = useState("");
  const [dashCard, setDashCard] = useState([]);

  useEffect(() => {
    const token = path.search.slice(7);
    if (path.search.substring(1, 6) === "token") {
      sessionStorage.setItem("AM", token);
      window.history.pushState({}, document.title, "/dashboard");
    }

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
      const decoded = jwtDecode(secret);
      const { firstName } = decoded;
      setHeading(firstName);
      axios
        .get(`${urls.SERVER_BASEURL}/moms/dashboard`, { headers })
        .then((response) => {
          const dashCardObj = response.data;
          setDashCard(dashCardObj);
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    }
  }, []);

  return (
    <Aux>
      <Navbar />
      <section className="container mt-2 mx-auto">
        <div className="flex-col mx-2">
          <div className="font-600 text-3xl sm:text-5xl">
            {`Welcome ${heading}`}
          </div>
          <div className="font-500 text-md sm:text-lg mt-2">
            Here are your MOMs
          </div>
        </div>
        <div>
          <DashCardHeading />

          {dashCard.map((val) => (
            <DashCard
              title={val.title}
              date={moment(val.createdAt).format("MMM Do YY")}
              key={val._id}
            />
          ))}
        </div>
      </section>
      <AddButton />
    </Aux>
  );
};

export default dashboardSection;
