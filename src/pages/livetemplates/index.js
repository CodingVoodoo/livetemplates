import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import { Grid } from "@material-ui/core";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import List from "../../components/List";
import InfoDialog from "../../components/InfoDialog";

const Products = (props) => {
  const livetemplates = props.data.allMarkdownRemark.edges;
  return (
    <Page>
      <SEO title="Live Templates" />
      <List items={livetemplates} />
      <Grid container justify="flex-end" alignItems="flex-end">
        <InfoDialog/>
      </Grid>
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
