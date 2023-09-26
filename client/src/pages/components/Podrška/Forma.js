import React from "react";
import styles from "./Forma.module.css";
import Lock from "../../Img/TRAMONTO/Lock.svg";
import User from "../../Img/user.svg";
import VasePitanje from "../../Img/vase pitanje.svg";

class Forma extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.FormContainer}>
          <div className={styles.loginBox}>
            <p className={styles.title}>
              Slobodno nam se obratite s Vašim pitanjima!
            </p>
            <hr></hr>
            <div className={styles.form}>
              <div className={styles.inputContainer}>
                <img src={User} className={styles.icon} />
                <input
                  type="text"
                  placeholder="Ime i prezime"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.form}>
              <div className={styles.inputContainer}>
                <img src={Lock} className={styles.icon} />
                <input
                  type="text"
                  placeholder="Lozinka"
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.form}>
              <div className={styles.QinputContainer}>
                <img src={VasePitanje} className={styles.icon} />
                <label htmlFor="question" className={styles.label}>
                  Vaše pitanje
                </label>
                <input type="text" placeholder="" className={styles.pitanje} />
              </div>
            </div>
            <button className={styles.button}>POŠALJI</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Forma;
