import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import Aux from "../../hoc/Aux/Aux";
import AddButton from "../../components/AddButton/AddButton";
import DashCard from "../../components/DashCard/DashCard";

const dashboardSection = () => {
  const path = useLocation();
  const token = path.search.slice(7);

  useEffect(() => {
    sessionStorage.setItem("TK", token);

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
        .get("http:/localhost:9000/moms", { headers })
        .then((response) => {
          console.log(response.json);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <Aux>
      <Navbar />
      <section className="container mt-2 mx-auto px-12">
        <div className="flex-col">
          <div className="text-5xl">Welcome ----</div>
          <div className="mt-2">Here are your MOMs</div>
        </div>
        <div className="">
          <DashCard />
        </div>
      </section>
      <AddButton />
    </Aux>
  );
};

export default dashboardSection;
