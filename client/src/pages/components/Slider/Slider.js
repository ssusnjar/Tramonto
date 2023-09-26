// import React, { useState } from "react";
// import styles from "./Slider.module.css";
// import Slider from "react-slider";

// const MIN = 100;
// const MAX = 12000;

// function Sliders() {
//   const [values, setValues] = useState([MIN], [MAX]);

//   console.log("values: ", values);
//   return (
//     <div className={styles.app}>
//       <div className={styles.box}>
//         <h3>Raspon cijene (u eurima):</h3>

//         <div className={styles.values}>
//           €{values[0]} - €{values[1]}
//         </div>

//         <small>Current Range</small>

//         <Slider
//           className={styles.slider}
//           onChange={setValues}
//           value={values}
//           min={MIN}
//           max={MAX}
//         />
//       </div>
//     </div>
//   );
// }
// export default Sliders;
