import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { register } from "../../actions";
import styles from "./style.module.css";

import Loader from "../../Components/UI/Loader";
import sideImage from "../../assets/images/1.jpg";
import Wrapper from "../../Components/UI/Wrapper";
import TextInput from "../../Components/UI/TextInput";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error } = userRegister;
  const { authenticated } = useSelector((state) => state.authentication);
  if (authenticated === "true") {
    return <Redirect to="/account" />;
  }

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(register({ firstName, lastName, email, password }));
  };
  return (
    <Wrapper>
      <div className={styles["register__wrapper"]}>
        <>
          {loading &&
            ReactDOM.createPortal(
              <Loader />,
              document.querySelector("#loader-root")
            )}
          <div
            className={
              styles[("register__wrapper-children", "register__sideImage")]
            }
          >
            <img src={sideImage} alt="demo img" />
          </div>
          <div className={styles["register__wrapper-children"]}>
            <h3 className={styles["welcome__text"]}>Create An Account</h3>
            {error && <h5>{error}</h5>}
            <form onSubmit={registerHandler}>
              <div className={styles[""]}>
                <TextInput
                  name="firstName"
                  id="firstName"
                  type="input"
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextInput
                  name="lastName"
                  id="lastName"
                  type="input"
                  label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextInput
                  name="email"
                  id="email"
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextInput
                  name="password"
                  id="password"
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles["register__button"]}>
                <button type="submit" className="primary__button">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </>
      </div>
    </Wrapper>
  );
};

export default Register;
