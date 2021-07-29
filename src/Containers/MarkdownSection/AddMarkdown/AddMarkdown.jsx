import React from "react";

import Navbar from "../../../components/Navbar/Navbar";
import Aux from "../../../hoc/Aux/Aux";
import MarkDown from "../../../components/MarkDown/MarkDown";

const addMarkdown = () => (
  <Aux>
    <Navbar />
    <MarkDown />
  </Aux>
);

export default addMarkdown;
