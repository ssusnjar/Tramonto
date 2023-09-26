import React from "react";
import styles from "./SearchBar.module.css";
import Search from "../../../Img/Search_alt.svg";

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        class={styles.searchInput}
        placeholder="Pretraži putovanja..."
      ></input>
      <button class={styles.searchButton}>
        <img src={Search} alt="Search Icon"></img>
      </button>
    </div>
  );
};

export default SearchBar;
