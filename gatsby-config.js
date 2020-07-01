module.exports = {
  pathPrefix: "/live-templates",
  siteMetadata: {
    title: "Live templates",
    menuLinks: [
      {
        name: "Live Templates",
        link: "/livetemplates",
      },
      {
        name: "About",
        link: "/about",
      }
    ],
  },
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {},
          }
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
  ],
};
