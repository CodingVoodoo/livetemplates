import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import List from "../../components/List";

const Products = (props) => {
  const livetemplates = props.data.allMarkdownRemark.edges;
  console.log(livetemplates)
  return (
    <Page>
      <SEO title="Live Templates" />
      <List items={livetemplates} />
    </Page>
  );
};

export const query = graphql`
  query LiveTemplatesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/livetemplates/" } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            image {
              publicURL
            }
            title
            path
            languages
          }
        }
      }
    }
  }
`;

export default withRoot(Products);
