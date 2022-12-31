import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Button from "../Button";
import "./style.css";

const Modal = ({
  onClose: onCancel,
  onSubmit,
  show,
  title,
  children,
  submitText,
}) => {
  const [loading, setLoading] = useState(false);
  const onClose = () => {
    setLoading(false);
    onCancel();
  };
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      setLoading(false);
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <i
              onClick={() => {
                onClose();
              }}
            >
              <AiOutlineCloseCircle
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </i>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <Button
              loading={loading}
              action={() => {
                setLoading(true);
                onSubmit()
                  .then(() => {
                    setLoading(false);
                    onClose();
                  })
                  .catch(() => {
                    setLoading(false);
                  });
              }}
              className="button"
            >
              {submitText || "Submit"}
            </Button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
