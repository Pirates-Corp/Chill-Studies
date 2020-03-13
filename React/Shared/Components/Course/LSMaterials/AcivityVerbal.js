import React from "react";
import courses from "../../../Data/courses";
import {
  Typography,
  makeStyles,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Divider
} from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

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
          <ListItemIcon>
            <ArrowForwardIosRoundedIcon />
          </ListItemIcon>
          <ListItem>
            <Typography variant="subtitle1">
              Int belong to what datatypes ?
            </Typography>
          </ListItem>
          <ListItem>
            {" "}
            <TextField id="q1" label="Answer" />{" "}
          </ListItem>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosRoundedIcon />
          </ListItemIcon>
          <ListItem>
            <Typography variant="subtitle1">
              How much bit does byte takes
            </Typography>
          </ListItem>
          <ListItem>
            <TextField id="q2" label="Answer" />
          </ListItem>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosRoundedIcon />
          </ListItemIcon>
          <ListItem>
            <Typography variant="subtitle1">Array starts from</Typography>
          </ListItem>
          <ListItem>
            <TextField id="q3" label="Answer" />
          </ListItem>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosRoundedIcon />
          </ListItemIcon>
          <ListItem>
            <Typography variant="subtitle1">
              boolean is what kind of datatype ?
            </Typography>
          </ListItem>
          <ListItem>
            <TextField id="q4" label="Answer" />
          </ListItem>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosRoundedIcon />
          </ListItemIcon>
          <ListItem>
            <Typography variant="subtitle1">
              we can't define functions in interface , true or flase?
            </Typography>
          </ListItem>
          <ListItem>
            <TextField id="q5" label="Answer" />
          </ListItem>
        </ListItem>
        <Divider variant="middle" />
      </List>
      <br />

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
