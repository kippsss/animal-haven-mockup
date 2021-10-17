import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Page from "../UI/Page";
import about_image from "../../images/about_image.jpg";

const useStyles = makeStyles((theme) => ({
  aboutDiv: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  aboutImage: {
    objectFit: "cover",
    width: "50%",
    margin: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  contentDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  header: { fontFamily: "Julius Sans One, sans-serif", marginBottom: "15px" },
  paragraph: { textAlign: "justify" },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Page>
      <div className={classes.aboutDiv}>
        <img
          className={classes.aboutImage}
          src={about_image}
          alt="Animal Haven"
        />
        <div className={classes.contentDiv}>
          <Typography className={classes.header} variant="h3">
            Who are we?
          </Typography>
          <Typography className={classes.paragraph} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            consequat cursus velit, quis feugiat lorem tincidunt nec. Ut
            tincidunt odio risus, et blandit sapien rhoncus bibendum.
            Suspendisse hendrerit efficitur sapien, eget dignissim enim congue
            a. Cras at mi faucibus, sodales augue eget, finibus enim. Maecenas
            non sem id ante pellentesque dignissim ac ac lectus. Nunc id
            molestie nulla, nec vestibulum lorem. Sed dui neque, eleifend eu
            ante a, pellentesque lobortis ligula. Ut at risus eu magna lobortis
            tempor. Donec maximus, ante id commodo euismod, metus ligula
            condimentum nibh, condimentum volutpat purus lectus et est.
          </Typography>
        </div>
      </div>
    </Page>
  );
};

export default About;
