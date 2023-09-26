import React from "react";
import styles from "./Register.module.css";
import OrangeSection from "../OrangeSection/OrangeSection";
import Lock from "../../Img/TRAMONTO/Lock.svg";
import User from "../../Img/user.svg";
import Mail from "../../Img/Mail logo.svg";
import { useState } from "react";

function Register(ev) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status !== 200) {
      alert("register failed");
    } else {
      alert("register success");
    }
  }

  return (
    <div>
      <OrangeSection title="REGISTRACIJA" />
      <form onSubmit={register}>
        <div className={styles.loginContainer}>
          <div className={styles.loginBox}>
            <h1 className={styles.title}>REGISTRACIJA</h1>
            <div className={styles.form}>
              <div className={styles.inputContainer}>
                <img src={User} className={styles.icon} />
                <input
                  type="text"
                  placeholder="Korisničko ime"
                  className={styles.input}
                  value={username}
                  onChange={(ev) => setUsername(ev.target.value)}
                />
              </div>
            </div>
            <div className={styles.form}>
              <div className={styles.inputContainer}>
                <img src={Mail} className={styles.icon} />
                <input
                  type="text"
                  placeholder="E-mail"
                  className={styles.input}
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </div>
            </div>
            <div className={styles.form}>
              <div className={styles.inputContainer}>
                <img src={Lock} className={styles.icon} />
                <input
                  type="password"
                  placeholder="Lozinka"
                  className={styles.input}
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </div>
            </div>
            <div className={styles.form}>
              <div className={styles.inputContainer}>
                <img src={Lock} className={styles.icon} />
                <input
                  type="password"
                  placeholder="Ponovite lozinku"
                  className={styles.input}
                />
              </div>
            </div>
            <button className={styles.button}>Registriraj se</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
