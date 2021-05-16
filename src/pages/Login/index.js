import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { login } from "../../actions";

import Loader from "../../Components/UI/Loader";
import TextInput from "../../Components/UI/TextInput";
import Wrapper from "../../Components/UI/Wrapper";
import { GoogleLogin } from "../../Components/SocialLogins";

import sideImage from "../../assets/images/1.jpg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error } = userLogin;
  const { authenticated } = useSelector((state) => state.authentication);
  if (authenticated === "true") {
    return <Redirect to="/account" />;
  }

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Wrapper>
      <div className={styles["login__wrapper"]}>
        {loading &&
          ReactDOM.createPortal(
            <Loader />,
            document.querySelector("#loader-root")
          )}
        <>
          <div
            className={styles[("login__wrapper-children", "login__sideImage")]}
          >
            <img src={sideImage} alt="demo img" />
          </div>
          <div className={styles["login__wrapper-children"]}>
            <h3 className={styles["welcome__text"]}>Welcome to LoremStore</h3>
            {error && <h5>{error}</h5>}
            <form onSubmit={loginHandler}>
              <div className={styles["form__group"]}>
                <TextInput
                  name="email"
                  id="email"
                  type="input"
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
              <div className={styles["forgot__password"]}>
                <Link className="primary__link" to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>
              <div className={styles["login__button"]}>
                <button type="submit" className="primary__button">
                  Sign In
                </button>
              </div>
            </form>
            <hr className={styles["hr__text"]} data-content="OR" />
            <div className={styles["social__login"]}>
              <GoogleLogin />
            </div>
            <div className={styles["new__user"]}>
              New User?{" "}
              <Link className="primary__link" to="/account/register">
                Create Account
              </Link>
            </div>
          </div>
        </>
      </div>
    </Wrapper>
  );
};

export default Login;
