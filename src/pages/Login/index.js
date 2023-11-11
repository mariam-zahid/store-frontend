import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import styles from "./style.module.css";
import { currentUser } from "../../atoms/UserAtoms";

import Loader from "../../Components/UI/Loader";
import TextInput from "../../Components/UI/TextInput";
import Wrapper from "../../Components/UI/Wrapper";
import { GoogleLogin } from "../../Components/SocialLogins";
import { userLogin } from "../../services/AuthServices";

const lazyDataSrc =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="480" height="640" viewBox="0 0 3 4"%3E%3C/svg%3E';
const Login = () => {
  const [userDetails, setUserDetails] = useAtom(currentUser);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!!userDetails?._id) {
      navigate("/account");
    }
  }, [userDetails._id]);

  const loginHandler = (e) => {
    e.preventDefault();
    setLoginLoading(true);
    userLogin({
      body: { email, password },
    })
      .then((response) => {
        setLoginLoading(false);
        setUserDetails(response?.data);
        setLoginError("");
        navigate("/account");
      })
      .catch((error) => {
        setLoginLoading(false);
        setLoginError(error?.data?.error?.message || "Something went wrong");
      });
  };

  return (
    <Wrapper>
      <div className={styles["login__wrapper"]}>
        {loginLoading &&
          ReactDOM.createPortal(
            <Loader />,
            document.querySelector("#loader-root")
          )}
        <>
          <div
            className={styles[("login__wrapper-children", "login__sideImage")]}
          >
            <img
              src={
                loaded
                  ? "https://shivaz-store.s3.ap-south-1.amazonaws.com/1.jpg"
                  : lazyDataSrc
              }
              alt="demo img"
            />
          </div>
          <div className={styles["login__wrapper-children"]}>
            <h3 className={styles["welcome__text"]}>Welcome to Shivaz</h3>
            {loginError && <h5>{loginError}</h5>}
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
