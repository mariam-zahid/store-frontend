import { useAtom } from "jotai";
import React from "react";
import { Link } from "react-router-dom";
import { mobileNavVisible } from "../../atoms/UIAtoms";
import { currentUser as userAtom } from "../../atoms/UserAtoms";
import styles from "./style.module.css";

const MobileNav = ({ innerRef }) => {
  const [isOpen, setIsOpen] = useAtom(mobileNavVisible);
  const [currentUser] = useAtom(userAtom);
  const onNavigationClick = () => {
    setIsOpen(false);
  };
  return (
    <nav ref={innerRef} className={styles["navbar"]}>
      <ul className={`${isOpen && styles["mobile-nav"]}`}>
        <li onClick={onNavigationClick} className={styles["nav-item"]}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={onNavigationClick} className={styles["nav-item"]}>
          <Link to="/shop">Shop</Link>
        </li>
        <li onClick={onNavigationClick} className={styles["nav-item"]}>
          <Link to="/cart">Cart</Link>
        </li>
        <li onClick={onNavigationClick} className={styles["nav-item"]}>
          {currentUser._id ? (
            <Link to="/account">Account</Link>
          ) : (
            <Link to="/account/login">Login</Link>
          )}
        </li>
        <li onClick={onNavigationClick} className={styles["nav-item"]}>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
