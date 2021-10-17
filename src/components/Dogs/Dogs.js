import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useEasybase } from "easybase-react";
import Page from "../UI/Page";
import PageTitle from "../UI/PageTitle";
import Grid from "@material-ui/core/Grid";
import DogCard from "./DogCard";
import amy_image from "../../images/dogs/amy.jpg";
import lila_image from "../../images/dogs/lila.jpg";
import jango_image from "../../images/dogs/jango.jpg";
import mickey_image from "../../images/dogs/mickey.jpg";
import autumn_image from "../../images/dogs/autumn.jpg";

const dogs = [
  {
    name: "Amy",
    breed: "Mongrel",
    age: 8,
    hdbApproved: "No",
    image: amy_image,
    status: "Up For Adoption",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasconsequat cursus velit, quis feugiat lorem tincidunt nec. Ut tinciduntodio risus, et blandit sapien rhoncus bibendum. Suspendisse hendreritefficitur sapien, eget dignissim enim congue a. Cras at mi faucibus,sodales augue eget, finibus enim. Maecenas non seante vestibulum lorem. Sed dui neque, eleifend eu ante a, pellentesquelobortis ligula. Ut at risus eu magna lobortis tempor. Donec maximus,ante id commodo euismod, metus ligula condimentum nibh, condimentumvolutpat purus lectus et est.",
  },
  {
    name: "Lila",
    breed: "Mongrel",
    age: 1,
    hdbApproved: "Yes",
    image: lila_image,
    status: "Up For Adoption",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasconsequat cursus velit, quis feugiat lorem tincidunt nec. Ut tinciduntodio risus, et blandit sapien rhoncus bibendum. Suspendisse hendreritefficitur sapien, eget dignissim enim congue a. Cras at mi faucibus,sodales augue eget, finibus enim. Maecenas non seante vestibulum lorem. Sed dui neque, eleifend eu ante a, pellentesquelobortis ligula. Ut at risus eu magna lobortis tempor. Donec maximus,ante id commodo euismod, metus ligula condimentum nibh, condimentumvolutpat purus lectus et est.",
  },
  {
    name: "Jango",
    breed: "Mongrel",
    age: 8,
    hdbApproved: "Yes",
    image: jango_image,
    status: "Up For Adoption",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasconsequat cursus velit, quis feugiat lorem tincidunt nec. Ut tinciduntodio risus, et blandit sapien rhoncus bibendum. Suspendisse hendreritefficitur sapien, eget dignissim enim congue a. Cras at mi faucibus,sodales augue eget, finibus enim. Maecenas non seante vestibulum lorem. Sed dui neque, eleifend eu ante a, pellentesquelobortis ligula. Ut at risus eu magna lobortis tempor. Donec maximus,ante id commodo euismod, metus ligula condimentum nibh, condimentumvolutpat purus lectus et est.",
  },
  {
    name: "Mickey",
    breed: "Mongrel",
    age: 4,
    hdbApproved: "Yes",
    image: mickey_image,
    status: "Up For Adoption",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasconsequat cursus velit, quis feugiat lorem tincidunt nec. Ut tinciduntodio risus, et blandit sapien rhoncus bibendum. Suspendisse hendreritefficitur sapien, eget dignissim enim congue a. Cras at mi faucibus,sodales augue eget, finibus enim. Maecenas non seante vestibulum lorem. Sed dui neque, eleifend eu ante a, pellentesquelobortis ligula. Ut at risus eu magna lobortis tempor. Donec maximus,ante id commodo euismod, metus ligula condimentum nibh, condimentumvolutpat purus lectus et est.",
  },
  {
    name: "Autumn",
    breed: "Mongrel",
    age: 10,
    hdbApproved: "Yes",
    image: autumn_image,
    status: "Up For Adoption",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasconsequat cursus velit, quis feugiat lorem tincidunt nec. Ut tinciduntodio risus, et blandit sapien rhoncus bibendum. Suspendisse hendreritefficitur sapien, eget dignissim enim congue a. Cras at mi faucibus,sodales augue eget, finibus enim. Maecenas non seante vestibulum lorem. Sed dui neque, eleifend eu ante a, pellentesquelobortis ligula. Ut at risus eu magna lobortis tempor. Donec maximus,ante id commodo euismod, metus ligula condimentum nibh, condimentumvolutpat purus lectus et est.",
  },
];

const useStyles = makeStyles((theme) => ({}));

const Dogs = () => {
  const classes = useStyles();

  const [easybaseData, setEasybaseData] = useState([]);
  const { db }  = useEasybase();

  const mounted = async () => {
    const ebData = await db("DOGS").return().all();
    setEasybaseData(ebData);
    console.log(ebData);
  };

  useEffect(() => {
    mounted();
  }, []);

  return (
    <Page>
      <PageTitle>Our Dogs</PageTitle>
      <Grid className={classes.gridContainer} container spacing={3}>
        {easybaseData.map((dog) => {
          return (
            <DogCard dogObject={dog} key={Math.random() / Math.random()} />
          );
        })}
      </Grid>
    </Page>
  );
};

export default Dogs;
