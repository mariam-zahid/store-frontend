import { useAtom } from "jotai";
import React from "react";
import { Link } from "react-router-dom";
import { mobileNavVisible } from "../../atoms/UIAtoms";
import styles from "./style.module.css";

const MobileNav = ({ innerRef }) => {
  const [isOpen, setIsOpen] = useAtom(mobileNavVisible);
  return (
    <nav ref={innerRef} className={styles["navbar"]}>
      <ul className={`${styles["nav"]} ${isOpen && styles["mobile-nav"]}`}>
        <li className={styles["nav-item"]}>
          <a href="/">Home</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/shop">Shop</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/cart">Cart</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/account/login">Login</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/contact-us">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
