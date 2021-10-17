import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../UI/Page";
import PageTitle from "../UI/PageTitle";
import AdoptStep from "./AdoptStep";
import meeting_image from "../../images/meeting.png";
import home_image from "../../images/house.png";
import confirm_image from "../../images/confirmity.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

const Adoption = () => {
  const classes = useStyles();

  return (
    <Page>
      <PageTitle>Adoption</PageTitle>
      <div className={classes.container}>
        <AdoptStep
          step="Contact Us"
          image={meeting_image}
          description="Nunc id molestie nulla, nec
          vestibulum lorem. Sed dui neque, eleifend eu ante a, pellentesque
          lobortis ligula. Ut at risus eu magna lobortis tempor. Donec maximus,
          ante id commodo euismod, metus ligula condimentum nibh, condimentum
          volutpat purus lectus et est."
        />
        <AdoptStep
          rowReverse={true}
          step="Trial Homestay"
          image={home_image}
          description="Nunc id molestie nulla, nec
          vestibulum lorem. Sed dui neque, eleifend eu ante a, pellentesque
          lobortis ligula. Ut at risus eu magna lobortis tempor. Donec maximus,
          ante id commodo euismod, metus ligula condimentum nibh, condimentum
          volutpat purus lectus et est."
        />
        <AdoptStep
          step="Confirmation"
          image={confirm_image}
          description="Nunc id molestie nulla, nec
          vestibulum lorem. Sed dui neque, eleifend eu ante a, pellentesque
          lobortis ligula. Ut at risus eu magna lobortis tempor. Donec maximus,
          ante id commodo euismod, metus ligula condimentum nibh, condimentum
          volutpat purus lectus et est."
        />
      </div>
    </Page>
  );
};

export default Adoption;
