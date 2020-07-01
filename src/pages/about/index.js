import withRoot from "../../utils/withRoot";
import React from "react";
import Typography from "@material-ui/core/Typography";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import Video from "../../components/Video";

const About = () => {
  return (
    <Page>
      <SEO title="About" />
      <Typography paragraph>Write Code Faster Using Live Templates in IntelliJ</Typography>
      <Video/>
    </Page>
  );
};

export default withRoot(About);
