import React from "react";
import { graphql, withPrefix, Link } from "gatsby";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import Layout from "../layouts/index";
import Call from "../components/Call";
import Card from "../components/blog-cards-snippet/blog-cards-snippet";
import Flexboxcard from "../components/flexbox-card/flexbox-card";
import logo1 from "../images/anis-kallel-1.jpg";
import logo2 from "../images/latrace.jpg";
const Home = props => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h1>Renforcez votre activité, équipez votre flotte</h1>
          <p>
            Optez pour un système complet et puissant qui vous permettra de bien
            gérer votre flotte
          </p>
        </div>
      </div>

      <div className="container pt-2">
        <Call button />
      </div>
      <Card />

      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <Flexboxcard
            logo={logo1}
            text="Des valeurs fortes sont au cœur de notre entreprise depuis sa
          création. Elles guident nos actions au quotidien et constituent un
          socle commun que l’ensemble des partenaires et des collaborateurs
          Tunav partagent et s’engagent à respecter La vocation de Tunav n'est
          pas de vendre un produit ou un service mais d'accompagner, d'être le
          partenaire sur qui on peut compter et avec qui on gagne."
            titre="Président Directeur Général Mr. Anis Kallel"
          />
          <br />
          <br />

          <Flexboxcard
            logo={logo2}
            text="LaTrace® est un système de Tracking par GPS/GPRS très complet qui dispose d'une large gamme de fonctionnalités permettant de gérer toute votre flotte de véhicules d'une manière facile et efficace.

            Vous pouvez ainsi avoir une vision globale et détaillée des activités de tous vos véhicules et recevoir en temps réel toutes les informations nécessaires pour une meilleure gouvernance et une gestion intelligente."
            titre="LaTrace®"
          />
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">
              <br />
              <br />
              <br />
              Qu'est ce que LaTrace® peut vous fournir?
            </h2>
          </div>
          {markdown.map(edge => (
            <div
              key={edge.node.frontmatter.path}
              className="col-12 col-md-4 mb-1"
            >
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>
                      {edge.node.frontmatter.title}
                    </Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 text-center">
            <Link className="button button-primary mt-2" to="/services">
              Services
            </Link>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">Nos packs</h2>
          </div>
          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)} />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
