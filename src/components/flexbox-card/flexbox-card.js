import React from "react";
import containerStyles from "./flexbox-card.module.css";
import logo1 from "../../images/anis-kallel-1.jpg";
const flex = props => {
  return (
    <div className={containerStyles.container}>
      <div
        className={containerStyles.imag}
        style={{ backgroundImage: "url(" + logo1 + ")" }}
      />
      <div className={containerStyles.textcontainer}>
        <span className={containerStyles.spanc} />
        <h1 className={containerStyles.h1}>Web Development</h1>
        <p className={containerStyles.p}>
          Get the lastest and trending web development project's source code,
          first see preview if you need then get the code.
        </p>
        <a
          className={containerStyles.a}
          href="https://webdevtrick.com"
          target="_blank"
        >
          Visit Webdevtrick
        </a>
      </div>
    </div>
  );
};

export default flex;
