module.exports = {
  pathPrefix: "/intellij-live-templates",
  siteMetadata: {
    title: "IntelliJ Live templates",
    menuLinks: [
      {
        name: "IntelliJ Live Templates",
        link: "/intellijlivetemplates",
      },
      {
        name: "About",
        link: "/about",
      },
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
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-33179034-6",
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
