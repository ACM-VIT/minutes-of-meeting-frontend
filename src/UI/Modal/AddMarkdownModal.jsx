import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

/** Styling */
import "./MarkdownModal.css";

const AddModal = ({ show, onClose }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
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
              No, Keep It!
            </button>
            <Link to="/dashboard">
              <div>
                <button type="submit" className="btn-delete">
                  Yes, Cancel!
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddModal;
