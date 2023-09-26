import styles from "./Footer.module.css";
import React from "react";
import logo from "../../Img/Logo.png";
import Social from "../../Img/Social media.png";
class Footer extends React.Component {
  render() {
    return (
      <div className={styles.Footer}>
        <footer class={styles.footer}>
          <div class={styles.footerSection}>
            <div class={styles.footerLogo}>
              <div className={styles.logo}>
                <img src={logo} alt="Logo" />
              </div>
            </div>
            <div class={styles.socialIcons}>
              <div className={styles.logo}>
                <img src={Social} alt="Logo" />
              </div>
            </div>
          </div>
          <div class={styles.footerSection}>
            <h2 class={styles.footerTitle}>KONTAKT</h2>
            <p>Email: ime@gmail.com</p>
            <p>Telefon: +38566987</p>
            <p>Adresa: Obala kralja Petra Krešimira IV</p>
          </div>
          <div class={styles.footerSection}>
            <h2 class={styles.footerTitle}>PODRŠKA</h2>
            <ul>
              <li>Opći uvjeti</li>
              <li>Politika zaštite podataka</li>
              <li>Uvjeti korištenja</li>
              <li>Putno osiguranje</li>
              <li>Prigovori</li>
              <li>Osnovna prava</li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
