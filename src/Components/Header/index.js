import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

import Container from "../UI/Container";
import Topper from "./Components/Topper";
import SearchBar from "./Components/SearchBar";

import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as ShoppingCartIcon } from "../../assets/icons/shopping-cart.svg";

const Header = () => {
  return (
    <>
      <Topper />
      <header className={styles.headerContainer}>
        <Container>
          <div className={styles.searchBar}>
            <SearchBar />
          </div>

          <Link to="/" className={` ${styles.logo}`}>
            LOGOIPSUM
          </Link>

          <div className={styles.links}>
            <Link to="/" className={styles.link}>
              <HeartIcon />
            </Link>
            <Link to="/account" className={styles.link}>
              <UserIcon />
            </Link>
            <Link to="/" className={styles.link}>
              <ShoppingCartIcon />
            </Link>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
