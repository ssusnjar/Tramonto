import React from "react";
import styles from "./User.module.css";

class User extends React.Component {
  render() {
    return (
      <div>
        <h1>Onama naslov</h1>
        <p>tekst</p>
        <button className="orangeBtn">Odaberi</button>
      </div>
    );
  }
}

export default User;
