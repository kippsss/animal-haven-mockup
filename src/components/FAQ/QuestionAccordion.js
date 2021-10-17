import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  question: { fontFamily: "Montserrat", fontWeight: '500' },
}));

const QuestionAccordion = (props) => {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.question} variant="subtitle1">
          {props.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">{props.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default QuestionAccordion;
