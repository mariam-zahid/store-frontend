import React from "react";
import styles from "./style.module.css";

export const GoogleLogin = () => {
  return (
    <div className={styles["social__btn"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["social__btn-icon"]}>
          <img
            className={styles["icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
          />
        </div>
        <p className={styles["social__btn-text"]}>Sign in with Google</p>
      </div>
    </div>
  );
};
