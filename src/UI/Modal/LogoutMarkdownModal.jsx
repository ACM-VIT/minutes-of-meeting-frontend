/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import urls from "../../urls";

/** Styling */
import "./MarkdownModal.css";

import NotFound404 from "../../components/404/404";

const LogoutModal = ({ show, onClose }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  const [showError, setShowError] = useState(false);

  const logout = () => {
    const notifySuccess = () => toast.success("Logout successfully!");
    notifySuccess();

    const secret = sessionStorage.getItem("AM");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${secret}`,
    };

    axios.get(urls.GOOGLE_LOGOUT, { headers }).then((res) => {
      sessionStorage.removeItem("AM");
      window.location.href = "/";
    });
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <div className={showError === true ? "hidden" : ""}>
        <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body">Are you sure?</div>
            <div className="modal-footer">
              <button onClick={onClose} type="submit" className="btn-cancel">
                No
              </button>

              <div onClick={logout}>
                <button type="submit" className="btn-delete">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={showError === true ? "" : "hidden"}>
        <NotFound404 />
      </div>
    </>
  );
};

export default LogoutModal;
