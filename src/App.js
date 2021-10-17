import React from "react";
import { EasybaseProvider } from "easybase-react";
import ebconfig from "./ebconfig";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Adoption from "./components/Adoption/Adoption";
import Dogs from "./components/Dogs/Dogs";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";

const useStyles = makeStyles((theme) => ({
  divider: {
    width: "5%",
    minWidth: "50px",
    margin: "auto",
    border: "0px",
    borderTop: "dotted 7px",
    color: "#D3D3D3",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Hero />
      <div className={classes.root}>
        <Navbar />
        <div id="about" />
        <About />
        <hr className={classes.divider} id="adoption" />
        <Adoption />
        <hr className={classes.divider} id="dogs" />
        <Dogs />
        <hr className={classes.divider} id="FAQ" />
        <FAQ />
        <hr className={classes.divider} id="contact" />
        <Contact />
      </div>
    </EasybaseProvider>
  );
}

export default App;
