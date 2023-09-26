import React from "react";
import styles from "./Travel.module.css";
import Article from "./TravelArticle";
import Amsterdam from "../../../Img/Amsterdam.png";
import London from "../../../Img/London.png";
import Prag from "../../../Img/Prag.png";

class Travel extends React.Component {
  render() {
    return (
      <div className={styles.Card}>
        <div className={styles.articleContainer}>
          <Article imgsource={Amsterdam} className="article" />
          <Article imgsource={London} className="article" />
          <Article imgsource={Prag} className="article" />
        </div>
        <div className={styles.articleContainer}>
          <Article imgsource={Amsterdam} className="article" />
          <Article imgsource={London} className="article" />
          <Article imgsource={Prag} className="article" />
        </div>
        <div className={styles.articleContainer}>
          <Article imgsource={Amsterdam} className="article" />
          <Article imgsource={London} className="article" />
          <Article imgsource={Prag} className="article" />
        </div>
        <div className={styles.articleContainer}>
          <Article imgsource={Amsterdam} className="article" />
          <Article imgsource={London} className="article" />
          <Article imgsource={Prag} className="article" />
        </div>
      </div>
    );
  }
}

export default Travel;
