import { Fragment } from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = (props) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("..");
  };

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </Fragment>
  );
};

export default Modal;
