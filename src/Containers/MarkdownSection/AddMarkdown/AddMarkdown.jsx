/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../../../components/Navbar/Navbar";
import Aux from "../../../hoc/Aux/Aux";
import MarkdownModal from "../../../UI/Modal/MarkdownModal";

const addMarkdown = () => {
  const [show, setShow] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("# Welcome to MOM Website");

  const token = sessionStorage.getItem("TK");
  if (
    sessionStorage.getItem("TK") === null ||
    sessionStorage.getItem("TK") === ""
  ) {
    window.location.href = "/";
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const notifyError = () => toast.error("Fill all the fields!");
  const notifySuccess = () => toast.success("MOM successfully saved!");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || body.trim() === "") {
      notifyError();
      return;
    }

    axios
      .post(
        process.env.REACT_APP_ALL_MOM,
        {
          title,
          body,
        },
        { headers }
      )
      .then((res) => {
        notifySuccess();
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2500);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <Aux>
      <Navbar />
      <ToastContainer />
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
                onChange={(e) => setTitle(e.target.value)}
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
                Save
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
export default addMarkdown;
