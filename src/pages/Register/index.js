import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";

import styles from "./style.module.css";

import Loader from "../../Components/UI/Loader";
import sideImage from "../../assets/images/1.jpg";
import Wrapper from "../../Components/UI/Wrapper";
import TextInput from "../../Components/UI/TextInput";
import { currentUser } from "../../atoms/UserAtoms";
import { userSignup } from "../../services/AuthServices";

const Register = () => {
  const [userDetails, setUserDetails] = useAtom(currentUser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!!userDetails?._id) {
      navigate("/account");
    }
  }, [userDetails._id]);

  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    userSignup({
      body: { name, email, password },
    })
      .then((response) => {
        setLoading(false);
        setUserDetails(response?.user);
        setError("");
        navigate("/account");
      })
      .catch((error) => {
        setLoading(false);
        setError(error?.data?.error?.message || "Something went wrong");
      });
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
                  name="name"
                  id="name"
                  type="input"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
