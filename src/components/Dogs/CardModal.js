import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalDiv: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    minWidth: "300px",
    height: "80%",
    overflow: "auto",
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "80%",
    alignSelf: "center",
  },
  contentDiv: { padding: "20px" },
  dogName: { fontFamily: "Montserrat, sans-serif" },
  description: { margin: "7px 0" },
}));

const CardModal = (props) => {
  const classes = useStyles();

  const outputDate = (utc_date) => {
    const [date, ] = utc_date.split("T");
    const [year, month, day] = date.split("-");
    const newDate = day + " / " + month + " / " + year;
    return newDate;
  };
  return (
    <Modal
      className={classes.modal}
      open={props.isOpen}
      onClose={props.closeModalHandler}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.isOpen}>
        <div className={classes.modalDiv}>
          <img
            className={classes.image}
            src={props.dogObject.image}
            alt={props.dogObject.name}
          />
          <div className={classes.contentDiv}>
            <Typography className={classes.dogName} variant="h3">
              {props.dogObject.name}
            </Typography>
            <Typography className={classes.dogName} variant="subtitle1">
              Breed: {props.dogObject.breed}
            </Typography>
            <Typography className={classes.dogName} variant="subtitle1">
              D.O.B: {outputDate(props.dogObject.dob)}
            </Typography>
            <Typography className={classes.dogName} variant="subtitle1">
              HDB Approved: {props.dogObject.hdb_approved ? "Yes" : "No"}
            </Typography>
            <Typography className={classes.description} variant="body1">
              {props.dogObject.description}
            </Typography>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default CardModal;
