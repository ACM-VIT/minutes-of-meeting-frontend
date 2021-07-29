import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Aux from "../../hoc/Aux/Aux";
import AddButton from "../../components/AddButton/AddButton";

const dashboardSection = () => (
  <Aux>
    <Navbar />
    <div>Dashboard incoming</div>
    <AddButton />
  </Aux>
);

export default dashboardSection;
