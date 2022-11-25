import React from 'react';
import styles from "./style.module.css";

const WrapperContainer = ({children}) => {
  return (
    <div className={styles['wrapper']}>{children}</div>
  )
}

export default WrapperContainer