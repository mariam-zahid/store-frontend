import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { currentUser } from "../../atoms/UserAtoms";

import styles from "./style.module.css";

import Wrapper from "../../Components/UI/Wrapper";
import LogoutButton from "../../Components/LogoutButton";

const Account = () => {
  const [userDetails] = useAtom(currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("userDetails: ", !!userDetails?._id, userDetails);
    if (!userDetails?._id) {
      navigate("/account/login");
    }
  }, [userDetails._id]);
  return (
    <Wrapper>
      <h2>My Account</h2>
      Hello, {userDetails?.name}
      <h4>Personal Info</h4>
      <div>Email: {userDetails?.email}</div>
      <LogoutButton />
    </Wrapper>
  );
};

export default Account;
