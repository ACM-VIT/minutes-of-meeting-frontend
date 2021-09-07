import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import urls from "../../urls";

import Navbar from "../../components/Navbar/Navbar";
import Aux from "../../hoc/Aux/Aux";
import AddButton from "../../components/AddButton/AddButton";
import DashCard from "../../components/DashCard/DashCard";
import DashCardHeading from "../../components/DashCardHeading";

const dashboardSection = () => {
  const path = useLocation();
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
      axios
        .get(`${urls.SERVER_BASEURL}/moms`, { headers })
        .then((response) => {
          // Backend route not yet ready, so console logging the response itself as of now
          console.log(response.json);
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
        <div className="flex-col">
          <div className="text-5xl">Welcome ----</div>
          <div className="text-lg mt-2">Here are your MOMs</div>
        </div>
        <div>
          <DashCardHeading />
          <DashCard />
          <DashCard />
        </div>
      </section>
      <AddButton />
    </Aux>
  );
};

export default dashboardSection;
