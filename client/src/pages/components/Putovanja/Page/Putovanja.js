import React from "react";
import styles from "./Putovanja.module.css";
import OrangeSection from "../../OrangeSection/OrangeSection";
import SearchBar from "../SearchBar/SearchBar";
import Travel from "../Travel/Travel";
// import Slider from "../../Slider/Slider";
import MultiRangeSlider from "../../multiRangeSlider/MultiRangeSlider";

class Putovanja extends React.Component {
  render() {
    return (
      <div>
        <OrangeSection
          title="PONUDA PUTOVANJA"
          description="Sve avanture na jednom mjestu"
        />
        <div className={styles.SearchBar}>
          <SearchBar />
        </div>
        {/* <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        /> */}
        <Travel />
      </div>
    );
  }
}

export default Putovanja;
