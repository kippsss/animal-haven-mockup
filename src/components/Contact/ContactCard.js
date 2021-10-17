import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  contactDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: { maxWidth: "120px" },
  contactText: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    fontSize: "1.1rem",
    margin: "15px",
    textAlign: "center",
  },
}));

const ContactCard = (props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.contactDiv} item xs={12} sm={6} md={3}>
      <IconButton onClick={props.onClickHandler}>
        <img className={classes.image} src={props.image} alt="" />
      </IconButton>
      <Typography className={classes.contactText}>{props.text}</Typography>
    </Grid>
  );
};

export default ContactCard;
