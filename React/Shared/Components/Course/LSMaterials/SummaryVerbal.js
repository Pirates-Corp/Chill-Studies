import React from "react";
import {
  Typography,
  makeStyles,
  Button,
  List,
  ListItem,
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
          <Typography variant="h2">Data Types in Java</Typography>
        </ListItem>
        <ListItem>
          <Typography varient="body2">
            So that was all about the non-primitive data types. Now let’s
            understand the difference between primitive and non-primitive data
            types.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography varient="h4">
            The difference between primitive and non-primitive data types are as
            follows:
          </Typography>
        </ListItem>
        <ListItem>
          <Typography varient="body2">
            Primitive types are predefined in Java.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography varient="body2">
            Non-primitive types are created by the programmer and is not defined
            by Java.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography varient="body2">
            Non-primitive types are created by the programmer and is not defined
            by Java.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography varient="body2">
            Non Primitive types can be used to call methods to perform certain
            operations, while primitive types cannot.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography varient="body2">
            A primitive type always has a value, whereas non-primitive types can
            be null.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography varient="body2">
            A primitive type always has a value, whereas non-primitive types can
            be null. A primitive type starts with a lowercase letter, while
            non-primitive types start with an uppercase letter. The size of a
            primitive type depends on the data type, while non-primitive types
            have all the same size.
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
