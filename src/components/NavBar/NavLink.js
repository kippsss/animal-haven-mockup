import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  button: {
    fontFamily: "Montserrat, sans-serif",
    margin: (props) => (props.isDrawer ? "10px 10px" : "0 10px"),
    "&::after": {
      background: "#FC5185",
      content: "''",
      position: "absolute",
      width: "100%",
      height: "0.13rem",
      left: "0",
      bottom: "0",
      transform: "scale(0,1)",
      transition: "0.3s ease",
    },
    "&:hover::after": {
      transform: "scale(1,1)",
    },
    "&:hover": {
      backgroundColor: "#FFF",
    },
    justifyContent: (props) => (props.isFAQ ? "flex-start" : "default"),
  },
}));

const NavLink = (props) => {
  const classes = useStyles(props);

  return (
    <Link
      activeClass="active"
      to={props.linkId}
      spy={true}
      smooth={true}
      offset={props.isDrawer ? 8 : -10}
      duration={500}
    >
      <Button
        className={classes.button}
        disableRipple={true}
        onClick={props.onClick}
      >
        {props.text}
      </Button>
    </Link>
  );
};

export default NavLink;
