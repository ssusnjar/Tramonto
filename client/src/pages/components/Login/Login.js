import React from "react";
import styles from "./Login.module.css";
import OrangeSection from "../OrangeSection/OrangeSection";
import Lock from "../../Img/TRAMONTO/Lock.svg";
import User from "../../Img/user.svg";
import { useState } from "react";
import { Navigate } from "react-router-dom";
function Login(ev) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <OrangeSection title="PRIJAVA" />
      <form onSubmit={login}>
        <div className={styles.loginContainer}>
          <div className={styles.loginBox}>
            <h1 className={styles.title}>PRIJAVA</h1>
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
            <button type="submit" className={styles.button}>
              Prijavi se
            </button>
            <p className={styles.registerLink}>
              Nemate korisnički račun? <a href="/Register">Registrirajte se</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
