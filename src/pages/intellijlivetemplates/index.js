import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import { Grid } from "@material-ui/core";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import List from "../../components/List";
import InfoDialog from "../../components/InfoDialog";

const Products = (props) => {
  const intellijlivetemplates = props.data.allMarkdownRemark.edges;
  return (
    <Page>
      <SEO title="IntelliJ Live Templates" />
      <List items={intellijlivetemplates} />
      <Grid container justify="flex-end" alignItems="flex-end">
        <InfoDialog/>
      </Grid>
    </Page>
  );
};

export const query = graphql`
  query IntellijLiveTemplatesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/intellijlivetemplates/" } }
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
