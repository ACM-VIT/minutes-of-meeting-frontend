import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";

import Navbar from "../../../components/Navbar/Navbar";
import Aux from "../../../hoc/Aux/Aux";
import MarkdownModal from "../../../UI/Modal/MarkdownModal";

const editMarkdown = () => {
  const [show, setShow] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("# Welcome to MOM Website");

  const path = useLocation();
  const id = path.pathname.split("/")[3];

  const token = sessionStorage.getItem("TK");

  if (
    sessionStorage.getItem("TK") === null ||
    sessionStorage.getItem("TK") === ""
  ) {
    window.location.href = "/";
  } else {
    useEffect(() => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      axios
        .get(`http://localhost:9000/moms/details/edit/${id}`, { headers })
        .then((response) => {
          const { data } = response;
          setTitle(data.title);
          setBody(data.body);
          console.log(data.body);
        })
        .catch((error) => console.error(`Error: ${error}`));
    }, []);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    axios
      .put(
        `http://localhost:9000/moms/${id}`,
        {
          title,
          body,
        },
        { headers }
      )
      .then((res) => {
        console.log(res.data);
        alert("MOM successfully edited!");
      });
  };
  console.log(title);
  console.log(body);
  return (
    <Aux>
      <Navbar />

      <div className="container">
        <div className="my-4">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="border-b mx-12 space-x-0 w-72 border-black">
              <input
                className="font-500 text-black bg-transparent w-72 mr-3 py-1 px-2 leading-tight focus:outline-none "
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={({ target: { value } }) => setTitle(value)}
                placeholder="Title of the MOM"
                aria-label="Title of the MOM"
              />
            </div>
            <div className="container mt-12">
              <div className="mx-12">
                <MDEditor value={body} onChange={setBody} />
              </div>
            </div>
            <div className="flex justify-end mr-12 my-4">
              <button
                type="submit"
                className="inline-flex justify-center font-600 bg-primary border-0 py-2 px-3 w-28 focus:outline-none rounded text-white text-base mt-4 md:mt-0;"
              >
                Update
              </button>

              <div
                onClick={() => setShow(true)}
                className="inline-flex cursor-pointer justify-center ml-4 font-600 bg-primary border-0 py-2 px-3 w-28 focus:outline-none rounded text-white text-base mt-4 md:mt-0;"
              >
                Cancel
              </div>
            </div>
          </form>
        </div>

        <MarkdownModal onClose={() => setShow(false)} show={show} />
      </div>
    </Aux>
  );
};

export default editMarkdown;
