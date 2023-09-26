import React from "react";
import styles from "./OrangeSection.module.css";

const OrangeSection = ({ title, description }) => {
  return (
    <div className={styles.orangeSection}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default OrangeSection;
