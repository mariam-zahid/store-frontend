import React from "react";
import styles from "./style.module.css";

const Loader = () => {
  return (
    <>
      <div className={styles["loader-wrap"]}>
        <div className={styles["loader"]}>
          <span className={styles["loader-item"]}></span>
          <span className={styles["loader-item"]}></span>
          <span className={styles["loader-item"]}></span>
          <span className={styles["loader-item"]}></span>
          <span className={styles["loader-item"]}></span>
          <span className={styles["loader-item"]}></span>
          <span className={styles["loader-item"]}></span>
          <span className={styles["loader-item"]}></span>
          <span className={styles["loader-item"]}></span>
          <span className={styles["loader-item"]}></span>
        </div>
      </div>
    </>
  );
};

export default Loader;
