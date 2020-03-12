import React, { useState, useEffect } from "react";
import {
  Typography,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  List,
  ListItem,
  Container
} from "@material-ui/core";
import learningStyles from "../../../Data/learningStyles";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

const handleSubmit = async (e, props) => {
  e.preventDefault();

  const category = props.match.params.category;

  const lsType = props.match.params.ls_type;

  const course = props.match.params.course;

  const lsContents = learningStyles.find(style => lsType === style.type)
    .contents;

  const path =
    lsContents.indexOf(category) + 1 < lsContents.length
      ? `/course/${course}/ls/${lsType}/${
          lsContents[lsContents.indexOf(category) + 1]
        }`
      : `/course/${course}/home`;

  props.history.push(path);
};

export default function SummaryVisual(props) {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <form autoComplete="off" noValidate>
        <List>
          <ListItem>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  // height="250"
                  image="https://i1.wp.com/www.guffo.in/wp-content/uploads/2018/03/3.png?ssl=1"
                  title="Variables"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Java Variables
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The Above Diagram Shows the summary of Java variables 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </ListItem>
        </List>

        <Button
          variant="contained"
          color="primary"
          className={classes.handleButton}
          onClick={e => {
            handleSubmit(e, props);
          }}
        >
          Next
        </Button>
      </form>
    </Container>
  );
}
