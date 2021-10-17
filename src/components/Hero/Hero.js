import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import hero_image from "../../images/hero_image.jpg";
import { Typography } from "@material-ui/core";
import Typist from "react-typist";
import Socials from "./Socials";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroDiv: {
    position: "relative",
    width: "100%",
  },
  mainDiv: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  header: {
    fontFamily: "Julius Sans One, sans-serif",
    color: "white",
    animation: "animated-text 2s steps(30,end) 1s 1 normal both",
  },
  arrowDownIcon: {
    position: "absolute",
    left: "50%",
    top: "90%",
    transform: "translate(-50%, -50%)",
    fontSize: "80px",
    color: "#fff",
  },
  heroImage: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
  },
}));

const Hero = () => {
  const classes = useStyles();

  const [arrowIn, setArrowIn] = useState(false);
  

  setTimeout(() => {
    setArrowIn(true);
  }, 1000);

  return (
    <div className={classes.heroDiv}>
      <div className={classes.mainDiv}>
        <Typist cursor={{ show: false }}>
          <Typography className={classes.header} variant="h2">
            Animal Haven
          </Typography>
        </Typist>
        {/* <Socials /> */}
      </div>
      <Fade in={arrowIn} timeout={500}>
        <KeyboardArrowDownIcon className={classes.arrowDownIcon} />
      </Fade>
        <Socials />

      <img className={classes.heroImage} src={hero_image} alt="Hero" />
    </div>
  );
};

export default Hero;
