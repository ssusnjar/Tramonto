import React from "react";
import styles from "./BlogPost.module.css";
import Dublin from "../../Img/Dublin.png";
import { Link } from "react-router-dom";
export default function BlogPost({ title, summary, cover, content }) {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.Blog}>
          <div className={styles.left}>
            <Link to={"/post/id"} className={styles.link}>
              <p className={styles.naslov}>{title}</p>
            </Link>
            <p className={styles.tekst}>{summary}</p>
          </div>
          <div className={styles.Right}>
            <div className={styles.Background}></div>
            <Link to={"/post/id"} className={styles.link}>
              <img
                src={`http://localhost:4000/${cover}`}
                className={styles.image}
              ></img>
            </Link>

            <button className={styles.Orangebutton}>Saznajte više</button>
          </div>
        </div>
      </div>
      <hr className={styles.horizontalLine} />
    </div>
  );
}
