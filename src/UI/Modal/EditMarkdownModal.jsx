import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";

import urls from "../../urls";

/** Styling */
import "./MarkdownModal.css";

import NotFound404 from "../../components/404/404";

const EditModal = ({ show, onClose }) => {
  const [loading, setLoading] = useState(false);

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  const [showError, setShowError] = useState(false);

  const path = useLocation();
  const id = path.pathname.split("/")[3];

  const deleteMom = () => {
    setLoading(true);
    if (id === "" || id === undefined) {
      window.location.href = "/dashboard";
    } else {
      const secret = sessionStorage.getItem("AM");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      };
      axios
        .delete(`${urls.SERVER_BASEURL}/moms/${id}`, { headers })
        .then(() => {
          setLoading(false);
          window.location.href = "/dashboard";
        })
        .catch(() => setShowError(true));
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

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
          <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-body">Are you sure ?</div>
              <div className="modal-footer">
                <button onClick={onClose} type="submit" className="btn-cancel">
                  Cancel
                </button>

                <div onClick={deleteMom}>
                  <button type="submit" className="btn-delete">
                    Delete Now
                  </button>
                </div>
              </div>
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

export default EditModal;
