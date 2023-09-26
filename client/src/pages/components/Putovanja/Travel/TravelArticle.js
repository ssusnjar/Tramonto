import React from "react";
import styles from "./TravelArticle.module.css";
import Amsterdam from "../../../Img/Amsterdam.png";
import London from "../../../Img/London.png";
import Prag from "../../../Img/Prag.png";
import date from "../../../Img/Date.svg";

class Travel extends React.Component {
  render() {
    const { imgsource } = this.props;
    return (
      <div>
        <div className={styles.ime}>
          <img src={imgsource} alt="Slika grada" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <div className={styles.cityInfo}>
              <div className={styles.imeGrada}>Amsterdam</div>
              <div className={styles.Cijena}>Od 250 €</div>
            </div>
            <div className={styles.dateInfo}>
              <img
                src={date}
                alt="Kalendarska ikona"
                className={styles.calendarIcon}
              />
              <span>22.04.2023 - 30.04.2023</span>
            </div>
            <button className={styles.orangeBtn}>Odaberi</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Travel;
