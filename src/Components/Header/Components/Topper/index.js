import React from "react";
import styles from "./style.module.css";

import Container from "../../../UI/Container";

const Topper = () => {
  return (
    <div className={styles["topper__main"]}>
      <Container>
        <div className={styles["topper__main-number"]}>
          <i className={`fas fa-phone-alt ${styles["topper__main-icon"]}`}></i>+
          1235 2355 98
        </div>
        <div className={styles["topper__main-email"]}>
          <i
            className={`fas fa-paper-plane ${styles["topper__main-icon"]}`}
          ></i>
          test-email@email.com
        </div>
        <div className={styles["topper__main-delivery"]}>
          3-5 Business days delivery
        </div>
      </Container>
    </div>
  );
};

export default Topper;
