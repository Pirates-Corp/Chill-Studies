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
  Divider,
} from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
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
  }
}));

const handleSubmit = async (e, props, startTime) => {
  e.preventDefault();
  const q1 = document.getElementById("q1").value.toLowerCase(),
    q2 = document.getElementById("q2").value.toLowerCase(),
    q3 = document.getElementById("q3").value.toLowerCase(),
    q4 = document.getElementById("q4").value.toLowerCase(),
    q5 = document.getElementById("q5").value.toLowerCase();

  let score = 0;

  if (q1.includes("java virtual machine")) score++;
  if (q2.includes("import")) score++;
  if (q3.includes("3")) score++;
  if (q4.includes("java runtime environment")) score++;
  if (q5.includes("java development kit")) score++;

  score *= 2;
  let time = Math.round((Date.now() - startTime) / 1000 / 10); 
  score = score > 9 ? 9 : score; 
  time = time >= 9 ? 9 : time;

  const authToken = sessionStorage.getItem("auth");

  try {
    const res = await axios.patch(
      "http://127.0.0.1:8000/api/v1/student/ml/post/" + authToken,
      {
        A: score,
        A_T: time
      }
    );

    if (res.status === 200) {
      console.log("Successfully Pushed Activity Data");
    } else {
      alert("Problem While Pushing");
    }
  } catch (err) {
    alert(err);
  }

  console.log("score" + score);
  console.log("time" + time);
  props.history.push("/course/" + props.match.params.course + "/Content");
};

export default function Activity(props) {
  const classes = useStyles();

  const startTime = Date.now();

  return (
    <form autoComplete="off" noValidate>
      <List>
        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosRoundedIcon />
          </ListItemIcon>
          <ListItem>
            <Typography variant="subtitle1">
              Lets see if you can find the abbreviation for JVM
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
              Can you find the keyword used to include java packages ?
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
            <Typography variant="subtitle1">
              what could be the value of 'a++' if 'a=2' ?
            </Typography>
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
              Lets see if you can find the abbreviation for JRE
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
              Lets see if you can find the abbreviation for JDK
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
          handleSubmit(e, props, startTime);
        }}
      >
        Next
      </Button>
    </form>
  );
}
