import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles["footer__wrapper"]}>
      <div className={styles["main__footer"]}>
        <div className={styles["main__footer-links"]}>
          <div className={styles["main__footer-link__column"]}>
            <div className={styles["link__column-header"]}>Shop the site</div>
            <div
              className={`${styles["link__column-data"]} double-line-height`}
            >
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                New Arrivals
              </Link>
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                Ethnic
              </Link>
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                Men
              </Link>
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                Kids
              </Link>
            </div>
          </div>
          <div className={styles["main__footer-link__column"]}>
            <div className={styles["link__column-header"]}>Discover</div>
            <div
              className={`${styles["link__column-data"]} double-line-height`}
            >
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                About Us
              </Link>
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                Blog
              </Link>
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                Lorem Loyalty
              </Link>
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                Reviews
              </Link>
            </div>
          </div>
          <div className={styles["main__footer-link__column"]}>
            <div className={styles["link__column-header"]}>
              Customer Service
            </div>
            <div
              className={`${styles["link__column-data"]} double-line-height`}
            >
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                Contact Us
              </Link>
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                FAQs
              </Link>
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                Custom Orders
              </Link>
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                Shipping Info
              </Link>
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                Return Policy
              </Link>
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                Sizing Info
              </Link>
            </div>
          </div>
          <div className={styles["main__footer-link__column"]}>
            <div className={styles["link__column-header"]}>My account</div>
            <div
              className={`${styles["link__column-data"]} double-line-height`}
            >
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                Login
              </Link>
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                Sign Up
              </Link>
              <Link
                to="/"
                className={`primary__link ${styles["link__column-link"]}`}
              >
                My Wishlist
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["main__footer-misc"]}>
          <div className={styles["misc__column-header"]}>Connect With Us</div>
          <div className={styles["misc__column-social__logins"]}>
            <a
              href="/"
              target="_blank"
              className={`primary__link ${styles["misc__column-social__icon"]}`}
            >
              <FacebookIcon />
            </a>
            <a
              href="/"
              target="_blank"
              className={`primary__link ${styles["misc__column-social__icon"]}`}
            >
              <InstagramIcon />
            </a>
            <a
              href="/"
              target="_blank"
              className={`primary__link ${styles["misc__column-social__icon"]}`}
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={styles["footer__copyright"]}>
        Copyright &copy;{currentYear} | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
