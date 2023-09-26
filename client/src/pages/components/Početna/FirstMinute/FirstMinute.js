import React from "react";
import styles from "./FirstMinute.module.css";
import Austrija from "../../../Img/Austrija.png";

class FirstMinute extends React.Component {
  render() {
    return (
      <div className={styles.FirstMinute}>
        <hr className={styles.hr}></hr>
        <h1 className={styles.title}>FIRST MINUTE PONUDA</h1>
        <img src={Austrija} className={styles.image}></img>
        <button className="orangeBtn">Odaberi</button>
        <hr className={styles.hr}></hr>
      </div>
    );
  }
}

export default FirstMinute;
