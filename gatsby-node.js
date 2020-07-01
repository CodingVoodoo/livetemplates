const path = require("path"),
  fs = require("fs");

// Create pages from markdown files.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return Promise.all(
    ["livetemplates", "about"].map(async item => {
      const result = await graphql(
        `
        query {
          ${item}: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/${item}/" } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                  languages
                }
                excerpt
              }
            }
          }
        }
      `
      );
      return Promise.all(
        result.data[item].edges.map(({ node }) => {
          const component = fs.existsSync(`src/templates/${item}.js`)
            ? 
              path.resolve(`src/templates/${item}.js`)
            :
              path.resolve(`src/templates/general.js`);
          return createPage({
            component,
            path: node.frontmatter.path,
            context: { id: node.id },
          });
        })
      );
    })
  );
};
