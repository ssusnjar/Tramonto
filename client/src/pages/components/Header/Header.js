import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../Img/Logo.png";
import user from "../../Img/user-2.svg";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    });
  }, []);
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navlist}>
            <li>
              <Link to="/">POČETNA</Link>
            </li>
            <li>
              <Link to="/putovanja">PUTOVANJA</Link>
            </li>
            <li>
              <Link to="/podrska">PODRŠKA</Link>
            </li>
            <li>
              <Link to="/oNama">O NAMA</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li className={styles.usericon}>
              <div className={styles.usericon}>
                <img src={user} alt="Korisnik" />
                <div className={styles.menu}>
                  <div className={styles.drop}>
                    <Link to="/Login">Prijava</Link>
                  </div>
                  <div className={styles.drop}></div>
                  <Link to="/kosarica">Košarica</Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
