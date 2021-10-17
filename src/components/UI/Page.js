import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "70px 10%",
    backgroundColor: (props) =>
      props.backgroundColor ? props.backgroundColor : "white",
  },
}));

const Page = (props) => {
  const classes = useStyles(props);

  return <div className={classes.page}>{props.children}</div>;
};

export default Page;
