import React, { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import urls from "../../urls";

/** Styling */
import "./MarkdownModal.css";

const DashModal = ({ show, onClose, id }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  const deleteMom = () => {
    const notifySuccess = () =>
      toast.success("MOM successfully deleted! Redirecting to Dashboard");

    const secret = sessionStorage.getItem("AM");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${secret}`,
    };
    axios
      .delete(`${urls.SERVER_BASEURL}/moms/${id}`, { headers })
      .then(() => {
        notifySuccess();
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2500);
      })
      .catch((error) => console.error(`Error: ${error}`));
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
      <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-body">Are you sure ?</div>
          <div className="modal-footer">
            <button onClick={onClose} type="submit" className="btn-cancel">
              Cancel
            </button>

            <div onClick={deleteMom}>
              <button type="submit" className="btn-delete">
                Delete now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashModal;
