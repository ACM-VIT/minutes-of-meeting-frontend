import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "react-loading-overlay";

import urls from "../../../urls";

import Navbar from "../../../components/Navbar/Navbar";
import NotFound404 from "../../../components/404/404";

const editMarkdown = () => {
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("# Welcome to Acta");

  const path = useLocation();
  const id = path.pathname.split("/")[3];

  const secret = sessionStorage.getItem("AM");

  if (
    sessionStorage.getItem("AM") === null ||
    sessionStorage.getItem("AM") === ""
  ) {
    window.location.href = "/";
  } else {
    useEffect(() => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      };
      setLoading(true);
      axios
        .get(`${urls.SERVER_BASEURL}/moms/edit/${id}`, { headers })
        .then((response) => {
          setLoading(false);
          const { data } = response;
          setTitle(data.title);
          setBody(data.body);
        })
        .catch(() => setShowError(true));
    }, []);
  }

  if (loading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const notifySuccess = () => toast.success("Updating the MOM!");
  const notifyError = () => toast.error("Fill all the fields!");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(title.trim());
    if (title.trim() === "" || body.trim() === "") {
      notifyError();
      return;
    }
    notifySuccess();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${secret}`,
    };

    axios
      .put(
        `${urls.SERVER_BASEURL}/moms/${id}`,
        {
          title,
          body,
        },
        { headers }
      )
      .then(() => {
        setLoading(false);
        window.location.href = "/dashboard";
      })
      .catch(() => setShowError(true));
  };
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

          <div className="container mx-auto md:pt-0 pt-16">
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
                    onChange={({ target: { value } }) => setTitle(value)}
                    placeholder="Title of the MOM"
                    aria-label="Title of the MOM"
                  />
                </div>
                <div className="container mt-12">
                  <div className="mx-2">
                    <MDEditor value={body} onChange={setBody} />
                  </div>
                </div>
                <div className="flex justify-end my-4 mx-2">
                  <Link to="/dashboard">
                    <div className="inline-flex cursor-pointer justify-center font-600 bg-red-500 border-0 py-2 px-3 w-28 focus:outline-none rounded text-white text-base mt-4 md:mt-0;">
                      Cancel
                    </div>
                  </Link>
                  <button
                    type="submit"
                    className="inline-flex justify-center font-600 bg-primary border-0 py-2 px-3 ml-4 w-28 focus:outline-none rounded text-white text-base mt-4 md:mt-0;"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </LoadingOverlay>
      <div className={showError === true ? "" : "hidden"}>
        <NotFound404 />
      </div>
    </>
  );
};

export default editMarkdown;
