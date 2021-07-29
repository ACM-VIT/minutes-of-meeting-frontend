import React from "react";
import MDEditor from "@uiw/react-md-editor";

export default function MarkDown() {
  const [value, setValue] = React.useState("# Welcome to MOM Website");
  return (
    <div className="container m-auto">
      <MDEditor className="" value={value} onChange={setValue} />
    </div>
  );
}
