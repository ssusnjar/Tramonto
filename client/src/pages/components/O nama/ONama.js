import React from "react";
import styles from "./ONama.module.css";
import OrangeSection from "../OrangeSection/OrangeSection";
import ClanoviTima from "./ClanoviTima";

class ONama extends React.Component {
  render() {
    return (
      <div>
        <OrangeSection title="Saznajte više" description="O NAMA" />
        <div className={styles.MainContainer}>
          <hr></hr>
          <div className={styles.container}>
            <p className={styles.text}>
              Tramonto Travel je pustolovno – turistička agencija posve nove
              generacije čije stručno vodstvo tvore putnici s više od desetljeća
              putničkog iskustva, a kojima su putovanja strast, ljubav i životni
              stil. Naša misao vodilja je da putovanja nisu samo puki posjet
              lokaciji, već uvijek jedinstveno iskustvo koje poticanjem svih
              naših osjetila ima za cilj oplemeniti naše živote i proširiti
              vidike. U kreaciji, a posebno provedbi naših putovanja, taj cilj
              nastojimo ostvariti prenoseći Vam naša putnička iskustva stečena
              na različitim krajevima svijeta, uvijek i isključivo iz prve ruke.
            </p>
            <p>
              Stoga iskoračite iz svoje zone komfora i zakoračite s nama u
              svijet.
            </p>
          </div>
          <hr></hr>
        </div>
        <ClanoviTima />
      </div>
    );
  }
}

export default ONama;
