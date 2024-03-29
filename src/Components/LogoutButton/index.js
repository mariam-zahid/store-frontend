import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import styles from "./style.module.css";
import Button from "../UI/Button";

const LogoutButton = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const logoutHandler = () => {
    // dispatch(logout());
    setLoggedOut(true);
  };

  if (loggedOut) {
    return <Navigate to="/account/login" push={true} />;
  }
  return (
    <div className={styles["logout__button"]}>
      <Button action={logoutHandler}>Logout</Button>
    </div>
  );
};

export default LogoutButton;
