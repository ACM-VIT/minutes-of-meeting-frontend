import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** Styling */
import "./MarkdownModal.css";

const Modal = ({ show, onClose }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  const path = useLocation();
  const id = path.pathname.split("/")[3];

  const notifySuccess = () =>
    toast.success("MOM successfully deleted! Redirecting to Dashboard");

  const deleteMom = () => {
    if (id === "" || id === undefined) {
      window.location.href = "/dashboard";
    } else {
      axios
        .delete(process.env.REACT_APP_ALL_MOM + id)
        .then(
          () => notifySuccess(),
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 2500),
          console.log("MOM deleted")
        )
        .catch((error) => console.error(`Error: ${error}`));
    }
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

export default Modal;
