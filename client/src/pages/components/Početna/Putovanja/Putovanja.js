import React from "react";
import styles from "./Putovanja.module.css";
import Offer from "../TravelOffer/Slider";
import { Link } from "react-router-dom";
class Putovanja extends React.Component {
  render() {
    return (
      <div className={styles.Putovanja}>
        <h1 className={styles.title}>PUTOVANJA</h1>
        <Offer />
        <Link to="/putovanja">
          <button className="orangeBtn">Pogledaj više</button>
        </Link>
      </div>
    );
  }
}

export default Putovanja;
