import React from "react";
import styles from "./Modal.module.scss";
const Modal = (props: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
export default Modal;
