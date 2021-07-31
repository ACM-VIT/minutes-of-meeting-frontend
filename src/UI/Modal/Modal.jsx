import React, { useEffect } from "react";

/** Styling */
import "./Modal.css";

const Modal = ({ show, onClose }) => {
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
    <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">Are you sure ?</div>
        <div className="modal-footer">
          <button onClick={onClose} type="submit" className="btn-cancel">
            Cancel
          </button>

          <a href="/dashboard">
            <button type="submit" className="btn-delete">
              Delete now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
