import withRoot from "../../utils/withRoot";
import React from "react";
import Typography from "@material-ui/core/Typography";
import SEO from "../../components/SEO";
import Page from "../../components/Page";

const About = () => {
  return (
    <Page>
      <SEO title="About" />
      <Typography paragraph>Live Templates for IntelliJ</Typography>
    </Page>
  );
};

export default withRoot(About);
