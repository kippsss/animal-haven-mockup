import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  adoptionCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: '20px',
    [theme.breakpoints.only("sm")]: {
      flexDirection: (props) => (props.rowReverse ? "row-reverse" : "row"),
    },
  },
  visual: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    minWidth: "140px",
  },
  image: { width: "50px", margin: "10px" },
  step: {
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
  },
  description: { textAlign: "justify", padding: "20px" },
}));

const Adoption = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.adoptionCard}>
      <div className={classes.visual}>
        <img className={classes.image} src={props.image} alt="" />
        <Typography className={classes.step} variant="h6">
          {props.step}
        </Typography>
      </div>
      <Typography className={classes.description} variant="body1">
        {props.description}
      </Typography>
    </div>
  );
};

export default Adoption;
