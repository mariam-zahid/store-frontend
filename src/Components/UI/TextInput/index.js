import React from "react";
import styles from "./style.module.css";

const TextInput = ({ name, id, type, label, value, onChange }) => {
  return (
    <div className={styles["form__group"]}>
      <input
        type={type}
        className={styles["form__field"]}
        placeholder={label}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
      <label htmlFor={id} className={styles["form__label"]}>
        {label}
      </label>
    </div>
  );
};

export default TextInput;
