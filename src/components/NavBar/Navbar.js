import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuButton from './MenuButton';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import paws_logo from "../../images/paws_logo.png";
import NavLink from "./NavLink";

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "sticky",
    zIndex: "1",
    backgroundColor: "white",
    boxShadow: "0 0 0",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  pawsLogo: {
    height: "40px",
    margin: "0px 20px",
  },
  buttonsBar: {
    display: "flex",
    width: "360px",
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles();

  const menuButton = useMediaQuery(theme.breakpoints.down("sm"));

  return menuButton ? (
    <MenuButton />
  ) : (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.buttonsBar}>
          <NavLink text="About Us" linkId="about" />
          <NavLink text="Adoption" linkId="adoption" />
          <NavLink text="Our Dogs" linkId="dogs" />
        </div>
        <img
          className={classes.pawsLogo}
          src={paws_logo}
          alt="Paws Logo"
        />
        <div className={classes.buttonsBar}>
          <NavLink text="Volunteer" linkId="volunteer" />
          <NavLink text="FAQ" linkId="FAQ" />
          <NavLink text="Contact Us" linkId="contact" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
