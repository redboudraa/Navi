const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: "Gatsby Serif",
    description: "my theme",
    contact: {
      phone: "+216 71 807 667",
      email: "tunav@tunav.com"
    },
    menuLinks: [
      {
        name: "Accueil",
        link: "/services"
      },
      {
        name: "Tunav",
        link: "/team"
      },
      {
        name: "Professionnels",
        link: "/testimonials"
      },
      {
        name: "Particuliers",
        link: "/contact"
      },
      {
        name: "Partenariat",
        link: "/contact"
      },
      {
        name: "Blog",
        link: "/contact"
      },
      {
        name: "Contact",
        link: "/contact"
      },
      {
        name: "Login",
        link: "/contact"
      }
    ]
  },

  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: guid ? guid : "UA-XXX-1",
        // Puts tracking script in the head instead of the body
        head: false
      }
    }
  ]
};
