import withRoot from "../../utils/withRoot";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import Video from "../../components/Video";

const About = () => {
  return (
    <Page>
      <SEO title="About" />
      <Typography style={{ display: "inline-block" }} paragraph>
        <Grid
          alignItems="center"
          container
          direction="row"
          justify="center"
          spacing={8}
        >
          Write Code Faster Using Live IntelliJ Templates in IntelliJ
          <Video />
        </Grid>
      </Typography>
    </Page>
  );
};

export default withRoot(About);
