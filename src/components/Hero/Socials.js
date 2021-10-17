import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  socials: {
    position: "absolute",
    top: "10px",
    right: "20px",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
  },
  icon: { fontSize: "1.6rem" },
}));

const Socials = () => {
  const classes = useStyles();

  const [socialsIn, setSocialsIn] = useState(false);

  setTimeout(() => {
    setSocialsIn(true);
  }, 1000);

  return (
    <Fade in={socialsIn} timeout={500}>
      <div className={classes.socials}>
        <Tooltip title="Send us an email">
          <IconButton
            color="inherit"
            onClick={() => {}}
          >
            <EmailIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Instagram">
          <IconButton
            color="inherit"
            onClick={() =>
              {}
            }
          >
            <InstagramIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Facebook">
          <IconButton
            color="inherit"
            onClick={() => {}}
          >
            <FacebookIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
      </div>
    </Fade>
  );
};

export default Socials;
