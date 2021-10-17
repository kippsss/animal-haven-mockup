import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardModal from "./CardModal";

const useStyles = makeStyles((theme) => ({
  buttonBase: {
    display: "block",
    textAlign: "initial",
  },
  cardHeader: { fontFamily: "Montserrat, sans-serif", fontWeight: "500" },
  status: {
    padding: "10px",
    textAlign: "center",
    fontFamily: "Roboto Condensed, sans-serif",
    fontSize: "1rem",
    color: "green",
  },
}));

const DogCard = (props) => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const outputAge = (utc_date) => {
    const [date] = utc_date.split("T");
    const [yyyy, mm, dd] = date.split("-");
    const dateNow = new Date();
    const currentYear = dateNow.getFullYear();
    const currentMonth = dateNow.getMonth() + 1;
    const currentDay = dateNow.getDate();

    const day = parseInt(dd);
    const month = parseInt(mm);
    const year = parseInt(yyyy);
    var adjustment = 0;

    if (month < currentMonth) {
      adjustment = 0;
    } else if (month > currentMonth) {
      adjustment = -1;
    } else {
      if (day <= currentDay) {
        adjustment = 0;
      } else {
        adjustment = -1;
      }
    }

    var ageInYears = currentYear - year + adjustment;

    if (ageInYears <= 0) {
      ageInYears = 0;
    }
    return ageInYears;
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea
          onClick={() => {
            handleOpenModal();
          }}
        >
          <CardMedia
            component="img"
            alt="Dog Card"
            height="250px"
            image={props.dogObject.image}
            title="DogCard"
          />

          <CardContent>
            <Typography
              className={classes.cardHeader}
              gutterBottom
              variant="h5"
            >
              {props.dogObject.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              {props.dogObject.breed}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              {outputAge(props.dogObject.dob)} years old
            </Typography>
          </CardContent>
          <Typography className={classes.status} variant="subtitle2">
            {props.dogObject.up_for_adoption
              ? "Up For Adoption"
              : "Unavailable"}
          </Typography>
        </CardActionArea>
        <CardModal
          isOpen={openModal}
          closeModalHandler={handleCloseModal}
          dogObject={props.dogObject}
        />
      </Card>
    </Grid>
  );
};

export default DogCard;
