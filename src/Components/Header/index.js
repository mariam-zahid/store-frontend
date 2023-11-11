import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import styles from "./style.module.css";

import Container from "../UI/Container";
import SearchBar from "./Components/SearchBar";

import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as ShoppingCartIcon } from "../../assets/icons/shopping-cart.svg";
import { mobileNavVisible } from "../../atoms/UIAtoms";
import logo from "../../assets/images/primary_logo_green.png";
import Button from "../UI/Button";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useAtom(mobileNavVisible);
  return (
    <div
      className={`${styles["menu-toggle"]} ${styles["mobile-menu"]} ${
        isOpen ? styles["is-active"] : ""
      }`}
      // id="mobile-menu"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

const Header = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      {/* <div> */}
      <header className={styles.headerContainer}>
        <Container style={{ position: "sticky", top: 0 }}>
          <div className={styles.searchBar}>{/* <SearchBar /> */}</div>

          <Link style={{ height: "70px" }} to="/" className={` ${styles.logo}`}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              src={logo}
              alt="Primary Logo"
            />
          </Link>

          <div className={styles.links}>
            {/* <Link to="/contact">Contact Us</Link> */}
            <Link to="/wishlist" className={styles.link}>
              <HeartIcon />
            </Link>
            <Link to="/account" className={styles.link}>
              <UserIcon />
            </Link>
            <Link to="/cart" className={styles.link}>
              <ShoppingCartIcon />
            </Link>
          </div>
          <HamburgerMenu />
        </Container>
      </header>
    </>
  );
};

export default Header;
