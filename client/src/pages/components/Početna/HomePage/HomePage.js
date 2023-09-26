import React from "react";
import pocetna from "../../../Img/Group POCETNA SLIKA.png";
import FirstMinute from "../FirstMinute/FirstMinute";
import Putovanja from "../Putovanja/Putovanja";
import styles from "./HomePage.module.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.pocetna}>
        <img src={pocetna} className={styles.HomeImg} alt="pocetna"></img>
        <FirstMinute />
        <Putovanja />
      </div>
    );
  }
}

export default HomePage;
