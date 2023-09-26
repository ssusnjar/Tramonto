import React from "react";
import styles from "./TravelOffer.module.css";

const TravelOffer = ({ imageSrc, title, description }) => {
  return (
    <div className={styles.travelOffer}>
      <img src={imageSrc} alt={title} className={styles.offerImage} />
      <div className={styles.title}>{title}</div>
      <p>{description}</p>
    </div>
  );
};

export default TravelOffer;
