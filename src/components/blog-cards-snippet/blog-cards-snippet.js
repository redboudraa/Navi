import React from "react";
import containerStyles from "./blog-cards-snippet.module.scss";
import logo1 from "../../images/logo_500x500.png";
const snippet = props => {
  return (
    <div className={containerStyles.blogcard}>
      <div className={containerStyles.meta}>
        <div
          className={containerStyles.photo}
          style={{
            backgroundImage: "url(" + logo1 + ")"
          }}
        />
      </div>
      {/* <ul className={containerStyles.details}>
          <li className={containerStyles.author}>
            <a href="#">John Doe</a>
          </li>
          <li className={containerStyles.date}>Aug. 24, 2015</li>
          <li className={containerStyles.tags}>
            <ul>
              <li>
                <a href="#">Learn</a>
              </li>
              <li>
                <a href="#">Code</a>
              </li>
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
            </ul>
          </li>
        </ul>
      */}

      <div className={containerStyles.description}>
        <h1>Qui est Tunav ?</h1>
        <h2>Leader des solutions GPS depuis plus de 12 ans dèjâ !</h2>
        <p>
          Créée en 2004 par Mr. Anis Kalel, Tunav s'est imposée, depuis, comme
          étant l'un des fournisseurs de solutions GPS les plus performantes sur
          le marché. Forte de ses 12 ans d'expérience et de recherches..
        </p>
        <p className={containerStyles.readmore}>
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
  );
};

export default snippet;
