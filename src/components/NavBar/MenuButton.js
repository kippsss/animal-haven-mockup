import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import paws_logo from "../../images/paws_logo.png";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import NavLink from "./NavLink";

const useStyles = makeStyles((theme) => ({
  floatingButton: {
    position: "sticky",
    backgroundColor: "#FC5185",
    color: "#fff",
    margin: "10px",
    top: "20px",
    left: "calc(100vw - 60px)",
    zIndex: "1",
  },
  drawerDiv: {
    display: "flex",
    flexDirection: "column",
    width: "200px",
    margin: "50px 10px",
  },
  pawsLogo: {
    width: "63px",
    margin: "0 20px",
  },
}));

const MenuButton = (props) => {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const onOpenHandler = () => {
    setDrawerOpen(true);
  };

  const onCloseHandler = () => {
    setDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <Fab className={classes.floatingButton} onClick={onOpenHandler}>
        <MenuIcon />
      </Fab>
      <Drawer anchor={"right"} open={drawerOpen} onClose={onCloseHandler}>
        <div className={classes.drawerDiv}>
          <img
            className={classes.pawsLogo}
            src={paws_logo}
            alt="Paws Logo"
          />
          <NavLink
            isDrawer={true}
            text="About Us"
            linkId="about"
            onClick={onCloseHandler}
          />
          <NavLink
            isDrawer={true}
            text="Adoption"
            linkId="adoption"
            onClick={onCloseHandler}
          />
          <NavLink
            isDrawer={true}
            text="Our Dogs"
            linkId="dogs"
            onClick={onCloseHandler}
          />
          <NavLink
            isDrawer={true}
            text="Volunteer"
            linkId="volunteer"
            onClick={onCloseHandler}
          />
          <NavLink
            isFAQ={true}
            isDrawer={true}
            text="FAQ"
            linkId="FAQ"
            onClick={onCloseHandler}
          />
          <NavLink
            isDrawer={true}
            text="Contact Us"
            linkId="contact"
            onClick={onCloseHandler}
          />
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuButton;
