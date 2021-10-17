import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../UI/Page";
import PageTitle from "../UI/PageTitle";
import Grid from "@material-ui/core/Grid";
import email_image from "../../images/email.png";
import location_image from "../../images/location.png";
import facebook_image from "../../images/facebook.png";
import instagram_image from "../../images/instagram.png";
import ContactCard from "./ContactCard";

const useStyles = makeStyles((theme) => ({
  gridContainer: { margin: "20px" },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Page>
      <PageTitle>Contact Us</PageTitle>
      <Grid className={classes.gridContainer} container spacing={3}>
        <ContactCard
          image={email_image}
          text="animal_haven@gmail.com"
          onClickHandler={() =>
            {}
          }
        />
        <ContactCard
          image={location_image}
          text="34 Farm Rd, SXX3453"
          onClickHandler={() =>
            {}
          }
        />
        <ContactCard
          image={facebook_image}
          text="@animalHaven"
          onClickHandler={() =>
            {}
          }
        />
        <ContactCard
          image={instagram_image}
          text="@animalHaven"
          onClickHandler={() =>
            {}
          }
        />
        
      </Grid>
    </Page>
  );
};

export default Contact;

// backgroundColor="#64C9CF"
