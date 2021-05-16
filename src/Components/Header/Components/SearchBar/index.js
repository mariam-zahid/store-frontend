import React from "react";
import styles from "./style.module.css";

import { ReactComponent as SearchIcon } from "../../../../assets/icons/search.svg";

const SearchBar = () => {
  return (
    <div className={styles.search__field}>
      <SearchIcon />
      <input
        className={styles["search__field-input"]}
        placeholder="search the store..."
        type="text"
      />
    </div>
  );
};

export default SearchBar;
