import React from "react";
import styles from "./BlogPost.module.css";
import Dublin from "../../Img/Dublin.png";
import { Link } from "react-router-dom";
export default function BlogPost({ title, summary, cover, conten }) {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.Blog}>
          <div className={styles.left}>
            <p className={styles.naslov}>
              10 najboljih stvari koje možete raditi u San Franciscu
            </p>

            <p className={styles.tekst}>
              San Francisco jedno je od mjesta na svijetu koje se najviše snima,
              fotografira i instagramira, a ovo su najbolje stvari koje možete
              učiniti...
            </p>
          </div>
          <div className={styles.Right}>
            <div className={styles.Background}></div>
            <img src={Dublin} className={styles.image}></img>
            <button className={styles.Orangebutton}>Saznajte više</button>
          </div>
        </div>
      </div>
      <hr className={styles.horizontalLine} />
    </div>
  );
}
