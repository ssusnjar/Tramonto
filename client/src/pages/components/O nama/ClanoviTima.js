import React from "react";
import styles from "./ClanoviTima.module.css";
import Facebook from "../../Img/Facebook.png";
import Instagram from "../../Img/instagram.png";
import Ivana from "../../Img/Ivana.png";
import Ksenija from "../../Img/Ksenija.png";
import Andrej from "../../Img/Andrej.png";

class ClanoviTima extends React.Component {
  render() {
    return (
      <div className={styles.MainContainer}>
        <p className={styles.Naslov}> ČLANOVI TIMA</p>
        <div className={styles.ArticleContainer}>
          <div className={styles.container}>
            <div className={styles.UserContainer}>
              <img src={Andrej} className={styles.img}></img>
              <p className={styles.ime}>Andrej Filipovic</p>
              <p className={styles.about}>
                Nagrađivani je hrvatski travel-bloger i putnički influencer koji
                na sebi jedinstven način, izravno i bez uvijanja, donosi priče s
                dalekih putničkih destinacija.
              </p>
              <div className={styles.socialMedia}>
                <img src={Facebook}></img>
                <img src={Instagram}></img>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.UserContainer}>
              <img src={Ksenija} className={styles.img}></img>
              <p className={styles.ime}>Ksenija Horvat</p>
              <p className={styles.about}>
                Nagrađivani je hrvatski travel-bloger i putnički influencer koji
                na sebi jedinstven način, izravno i bez uvijanja, donosi priče s
                dalekih putničkih destinacija.
              </p>
              <div className={styles.socialMedia}>
                <img src={Facebook}></img>
                <img src={Instagram}></img>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.UserContainer}>
              <img src={Ivana} className={styles.img}></img>
              <p className={styles.ime}> Ivana Kovač</p>
              <p className={styles.about}>
                Nagrađivani je hrvatski travel-bloger i putnički influencer koji
                na sebi jedinstven način, izravno i bez uvijanja, donosi priče s
                dalekih putničkih destinacija.
              </p>
              <div className={styles.socialMedia}>
                <img src={Facebook}></img>
                <img src={Instagram}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClanoviTima;
