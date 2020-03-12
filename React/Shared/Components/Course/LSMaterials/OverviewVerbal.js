import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  makeStyles,
  Button,
  List,
  ListItem,
  Divider,
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

export default function OverviewVerbal(props) {
  const classes = useStyles();
  return (
    <form autoComplete="off" noValidate>
      <List>
        <ListItem>
          <Typography variant="body1">
            There are two data types available in Java
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h6">Primitive Data Types</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">* byte</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">* short</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">* int</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">* long</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">* float</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">* double</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">* boolean</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">* char</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h6">Reference/Object Data Types</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            * Reference variables are created using defined constructors of the
            classes. They are used to access objects. These variables are
            declared to be of a specific type that cannot be changed.
          </Typography>
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
  );
}
