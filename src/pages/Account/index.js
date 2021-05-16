import React from "react";
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./style.module.css";

import Wrapper from "../../Components/UI/Wrapper";
import LogoutButton from "../../Components/LogoutButton";

const Account = () => {
  const { authenticated } = useSelector((state) => state.authentication);
  // console.log("authentivated value", typeof authenticated);
  const { userInfo } = useSelector((state) => state.userDetails);
  if (authenticated === "false") return <Redirect to="/account/login" />;
  const { firstName, lastName, email } = userInfo;
  return (
    <Wrapper>
      <h2>My Account</h2>
      Hello, {firstName} {lastName}
      <h4>Personal Info</h4>
      <div>Email: {email}</div>
      <LogoutButton />
    </Wrapper>
  );
};

export default Account;
