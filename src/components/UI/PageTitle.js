import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    margin: " 0 0 30px 0",
    fontFamily: "Julius Sans One, sans-serif",
    textAlign: "center",
  },
}));

const PageTitle = (props) => {
  const classes = useStyles();

  return (
    <Typography className={classes.pageTitle} variant="h3">
      {props.children}
    </Typography>
  );
};

export default PageTitle;
