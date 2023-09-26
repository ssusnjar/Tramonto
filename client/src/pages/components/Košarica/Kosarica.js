import React from "react";
import OrangeSection from "../OrangeSection/OrangeSection";
import styles from "./Kosarica.module.css";
import LasVegas from "../../Img/Las Vegas.png";

class Kosarica extends React.Component {
  render() {
    return (
      <div>
        <OrangeSection title="KOŠARICA" />
        <div className={styles.title}>
          <span className={styles.spanPutovanje}>Putovanje</span>
          <span className={styles.span1}>Cijena</span>
          <span className={styles.span1}>Broj putnika</span>
          <span className={styles.span1}>Ukupno</span>
        </div>
        <div className={styles.kosarica}>
          <div className={styles.article}>
            <img src={LasVegas} className={styles.image}></img>
            <span className={styles.span}>Las Vegas, 2023</span>
            <span className={styles.spanCijena}>450€</span>
            <input
              type="number"
              min="0"
              value="1"
              className={styles.input}
            ></input>
            <span className={styles.spanCijena2}>450€</span>
            <button className={styles.button}>X</button>
          </div>
        </div>
        <div className={styles.Obutton}>
          <button className={styles.Orangebutton}>IDI NA PLAĆANJE</button>
        </div>
      </div>
    );
  }
}

export default Kosarica;
