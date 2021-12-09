/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "react-loading-overlay";

import urls from "../../../urls";

import Navbar from "../../../components/Navbar/Navbar";
import AddMarkdownModal from "../../../UI/Modal/AddMarkdownModal";
import NotFound404 from "../../../components/404/404";

// Styles
import "../../../styles/editoraddmarkdown.css";

const addMarkdown = () => {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("# Welcome to MOM Website");

  const secret = sessionStorage.getItem("AM");
  if (
    sessionStorage.getItem("AM") === null ||
    sessionStorage.getItem("AM") === ""
  ) {
    window.location.href = "/";
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${secret}`,
  };

  const notifyError = () => toast.error("Fill all the fields!");

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    if (title.trim() === "" || body.trim() === "") {
      setBtnDisable(false);
      notifyError();
      setLoading(false);
      return;
    }

    setBtnDisable(true);
    axios
      .post(
        `${urls.SERVER_BASEURL}/moms`,
        {
          title,
          body,
        },
        { headers }
      )
      .then(() => {
        window.location.href = "/dashboard";
        setLoading(false);
      })
      .catch(() => setShowError(true));
  };

  if (loading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <>
      <LoadingOverlay
        className="h-screen"
        active={loading}
        spinner
        text="Loading..."
      >
        <div className={showError === true ? "hidden" : ""}>
          <Navbar />
          <ToastContainer />
          <div className="container mx-auto md:mt-0 mt-16">
            <div className="my-4">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="border-b space-x-0 w-72 border-black mx-2">
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
                <div className="container main-container mt-12">
                  <div className="mx-2 main-container">
                    <MDEditor value={body} onChange={setBody} />
                  </div>
                </div>
                <div className="flex justify-end my-4 mx-2">
                  <div
                    onClick={() => setShow(true)}
                    className="inline-flex cursor-pointer justify-center font-600 bg-primary border-0 py-2 px-3 w-28 focus:outline-none rounded text-white text-base mt-4 md:mt-0"
                  >
                    Cancel
                  </div>
                  <button
                    type="submit"
                    className={`inline-flex justify-center font-600 bg-primary border-0 py-2 px-3 w-28 ml-4 focus:outline-none rounded text-white text-base mt-4 md:mt-0 ${
                      btnDisable === false ? "" : "btn-disable"
                    }
                  `}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>

            <AddMarkdownModal onClose={() => setShow(false)} show={show} />
          </div>
        </div>
      </LoadingOverlay>
      <div className={showError === true ? "" : "hidden"}>
        <NotFound404 />
      </div>
    </>
  );
};
export default addMarkdown;
