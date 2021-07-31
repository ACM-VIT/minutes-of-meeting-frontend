import React, { useEffect } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Aux from "../../hoc/Aux/Aux";
import AddButton from "../../components/AddButton/AddButton";

const dashboardSection = () => {
  const path = useLocation();
  const token = path.search.slice(7);

  useEffect(() => {
    localStorage.setItem("Bearer", token);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    // console.log(headers);
    axios
      .get("http:/localhost:9000/moms", {
        headers: headers,
      })
      .then((response) => {
        console.log(response.json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // });
  return (
    <Aux>
      <Navbar />
      <div>Dashboard incoming</div>
      <AddButton />
    </Aux>
  );
};

export default dashboardSection;
