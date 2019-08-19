import React from "react";
import containerStyles from "./flexbox-card.module.css";
import logo1 from "../../images/anis-kallel-1.jpg";

const flex = props => {
  return (
    <div className={containerStyles.container}>
      <div
        className={containerStyles.imag}
        style={{ backgroundImage: "url(" + props.logo + ")" }}
      />
      <div className={containerStyles.textcontainer}>
        <span className={containerStyles.spanc} />
        <h3 className={containerStyles.h1}>{props.titre}</h3>
        <p className={containerStyles.p}>{props.text}</p>
        <a
          className={containerStyles.a}
          href="https://webdevtrick.com"
          target="_blank"
        >
          Visit profil
        </a>
      </div>
    </div>
  );
};

export default flex;
