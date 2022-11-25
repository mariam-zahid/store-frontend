import React from "react";
import styles from "./style.module.css";

const Container = (props) => {
  return <div className={styles.container} style={props.style}>{props.children}</div>;
};

export default Container;
