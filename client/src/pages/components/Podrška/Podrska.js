import React from "react";
import Amsterdam from "../../Img/Amsterdam.png";
import OrangeSection from "../OrangeSection/OrangeSection";
import styles from "../Podrška/Podrska.module.css";
import Podrska from "../../Img/Podrska.png";
import ikona1 from "../../Img/pinPodrska1.svg";
import ikona2 from "../../Img/PinPodrska2.svg";
import ikona3 from "../../Img/PinPOdrska3.svg";
import Forma from "./Forma";

class Putovanja extends React.Component {
  render() {
    return (
      <div>
        <OrangeSection
          title="KORISNIČKA PODRŠKA"
          description="Obratite nam se s povjerenjem"
        />
        <div className={styles.page}>
          <div className={styles.KontaktContainer}>
            <img src={Podrska} className={styles.Podrska}></img>
            <div className="tekst">
              <hr></hr>
              <p className={styles.Naslov}>KONTAKTIRAJTE NAS</p>
              <div className={styles.rowcontainer}>
                <img src={ikona1} className={styles.ikona}></img>
                <p>Obala kralja Petra Krešimira IV, 23000 Zadar </p>
              </div>
              <div className={styles.rowcontainer}>
                <img src={ikona2} className={styles.ikona}></img>
                <p>+38566987547 </p>
              </div>
              <div className={styles.rowcontainer}>
                <img src={ikona3} className={styles.ikona}></img>
                <p>ime@gmail.com </p>
              </div>
            </div>
          </div>
        </div>
        <Forma />
      </div>
    );
  }
}

export default Putovanja;
