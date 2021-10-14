/* eslint-disable react/no-unescaped-entities */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
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
import SearchIcon from "../../Assets/SearchIcon.svg";
import NotFound from "../../components/NotFound";

const dashboardSection = () => {
  const path = useLocation();

  const [heading, setHeading] = useState("");
  const [dashCard, setDashCard] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const dashCardCount = dashCard.length;

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

  const result = dashCard.filter((val) => {
    if (
      searchTerm !== "" &&
      !val.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      console.log();
    } else {
      return val;
    }
  });

  const resultLength = result.map(() => console.log());

  return (
    <Aux>
      <Navbar />
      <section className="container mt-2 mx-auto">
        <div className="flex flex-col md:flex md:flex-row justify-between">
          <div className="flex-col mx-2 order-2 md:order-1">
            <div
              className={
                dashCardCount === 0
                  ? "font-600 text-3xl sm:text-5xl mt-16 md:mt-0"
                  : "font-600 text-3xl sm:text-5xl"
              }
            >
              {`Welcome ${heading}`}
            </div>

            <div
              className={
                dashCardCount === 0 ||
                (resultLength.length === 0 && searchTerm.length > 0)
                  ? "hidden"
                  : "font-500 text-md sm:text-lg mt-2"
              }
            >
              Here are your MOMs
            </div>
            <div
              className={
                dashCardCount === 0
                  ? "font-500 text-md sm:text-lg mt-2"
                  : "hidden"
              }
            >
              You haven't created any MOM!
            </div>
          </div>
          <div
            className={
              dashCardCount === 0
                ? "hidden"
                : "flex h-8 justify-between border rounded-xl border-black w-56 px-2 mr-2 mb-12 md:mb-0 mt-3 md:mt-0 ml-2 md:ml-0 order-1 md:order-2"
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
        <div className={dashCardCount === 0 ? "hidden" : ""}>
          {resultLength.length === 0 && searchTerm.length > 0 ? (
            <NotFound />
          ) : (
            <DashCardHeading />
          )}

          {result.map((val) => (
            <DashCard
              title={val.title}
              date={moment(val.createdAt).format("Do MMM YYYY")}
              id={val._id}
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
