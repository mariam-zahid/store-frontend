import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar__links"]}>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/new-arrivals">
            New Arrivals
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/lorem-exclusive">
            Lorem Exclusive
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/men">
            Men
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/women">
            Women
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/ethnic">
            Ethnic
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/couture">
            Couture
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/bridal">
            Bridal
          </Link>
        </li>
        <li className={styles[["navbar__link"]]}>
          <Link className="primary__link" to="/latest">
            Latest
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
