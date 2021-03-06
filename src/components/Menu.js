import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/styles/withStyles";

const styles = (theme) => ({
  menuButton: {
    color: theme.palette.primary.contrastText,
  },
});

const Menu = withStyles(styles)((props) => {
  const {
    classes,
    data: {
      site: {
        siteMetadata: { menuLinks },
      },
    },
  } = props;
  return (
    <>
      {menuLinks.map((link) => (
        <Link key={link.name} to={link.link}>
          <Button className={classes.menuButton}>{link.name}</Button>
        </Link>
      ))}
    </>
  );
});

export default () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(data) => <Menu data={data} />}
  />
);
