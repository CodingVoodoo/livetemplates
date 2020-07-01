import withRoot from "../../utils/withRoot";
import React from "react";
import Typography from "@material-ui/core/Typography";
import SEO from "../../components/SEO";
import Page from "../../components/Page";

const About = () => {
  return (
    <Page title="About">
      <SEO title="About" />
      <Typography paragraph>About</Typography>
    </Page>
  );
};

export default withRoot(About);
