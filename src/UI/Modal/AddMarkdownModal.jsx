import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** Styling */
import "./MarkdownModal.css";

const AddModal = ({ show, onClose }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  const notifySuccess = () => toast.success("Redirecting to Dashboard");

  const deleteMom = () => {
    notifySuccess();
    console.log("from addMarkdownModal");
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 2500);
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

export default AddModal;
