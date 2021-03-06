import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Menu from "./Menu";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const Header = props => {
  return (
    <AppBar id="appBar">
      <Toolbar>
        <Grid alignItems="center" container justify="center" spacing={8}>
          <Grid item>
            <Hidden smDown>
              <Typography component="span" variant="caption">
                <Menu />
              </Typography>
            </Hidden>
          </Grid>
        </Grid>
        <Grid item />
      </Toolbar>
    </AppBar>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
);
