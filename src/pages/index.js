import withRoot from "../utils/withRoot";
import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import Button from "@material-ui/core/Button";
import Carousel from "../components/Carousel";
import withStyles from "@material-ui/styles/withStyles";

const styles = () => ({
  root: {
    fontWeight: "bold",
  },
});
const Home = (props) => {
  const intellijlivetemplates = props.data.allMarkdownRemark.edges;
  return (
    <Page title="IntelliJ Live Templates">
      <SEO title="Home">
        <meta
          content="IntelliJ  Live Templates"
          name="description"
        />
      </SEO>

      <Card
        action={
          <Button
            className={props.classes.root}
            color="secondary"
            component={Link}
            to="/intellijlivetemplates"
            variant="contained"
          >
            View All IntelliJ Live Templates
          </Button>
        }
        style={{ minHeight: 523 }}
      >
        <Carousel items={intellijlivetemplates} />
      </Card>
    </Page>
  );
};

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/livetemplates/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            image {
              publicURL
            }
            path
            title
            languages
          }
          excerpt
        }
      }
    }
  }
`;

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Home));
