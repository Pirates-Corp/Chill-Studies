import React, { useState, useEffect } from "react";
import {
  makeStyles,
  IconButton,
  AppBar,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Container
} from "@material-ui/core";
import { Link as Linkto } from "react-router-dom";
import courses from "../../Data/courses";
import learningStyles from "../../../Shared/Data/learningStyles";
import axios from "axios";

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Linkto to="/" className={classes.link}>
        Chill Studies
      </Linkto>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  HomeButton: {
    float: "right"
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "left"
  },
  title: {
    flexGrow: 1
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

const handleRoute = async (props, card, course, lsType) => {
  const path = props.history.location.pathname + "";

  let to = "";

  lsType = path.includes("/home")
    ? (
        await axios.get(
          "http://127.0.0.1:8000/api/v1/student/ml/get/" +
            sessionStorage.getItem("auth")
        )
      ).data
    : lsType;

  to =
    path === "/dashboard"
      ? `/course/${card.name}/home`
      : (to = path.includes("/ls")
          ? `/course/${course.name}/ls/${lsType}/${card}`
          : (to = path.includes("/home")
              ? card.includes("1")
                ? `/course/${course.name}`
                : `/course/${course.name}/ls/${lsType}`
              : (to = `/course/${course.name}/${card}`)));

  props.history.push(to);
};

export default function Home(props) {
  const classes = useStyles();

  const path = props.history.location.pathname + "";

  const chapters = ["Chapter-1", "Chapter-2"];

  const lsType = props.match.params.ls_type;

  const cards = path.startsWith("/dashboard")
    ? courses // its dhashboard
    : path.includes("/home")
    ? chapters // Its Course Home that includes Chapters
    : path.includes("/ls")
    ? learningStyles.find(style => lsType === style.type).contents // Its the LS Predicted Course Chapter Home
    : ["Overview", "Definitons", "Activity", "Content", "Visual", "Summary"]; // Its the default Course Chapter Home

  let course =
    path === "/dashboard"
      ? "valid"
      : courses.find(course => props.match.params.course === course.name);

  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setAuth(sessionStorage.getItem("auth"));
  });

  return (
    <React.Fragment>
      {auth === null ? (
        <h1> login required </h1>
      ) : (
        <React.Fragment>
          {course ? (
            <React.Fragment>
              <CssBaseline />
              <AppBar position="relative">
                <Toolbar>
                  <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                  >
                    {path === "/dashboard" ? "Dashboard" : course.name}
                  </Typography>
                  <React.Fragment>
                    {path === "/dashboard" ? null : (
                      <IconButton
                        edge="start"
                        className={classes.HomeButton}
                        color="inherit"
                        aria-label="home"
                        onClick={e => {
                          e.preventDefault();
                          props.history.push("/dashboard");
                        }}
                      >
                        <Typography gutterBottom variant="body1">
                          Dashboard
                        </Typography>
                      </IconButton>
                    )}

                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="home"
                      onClick={e => {
                        e.preventDefault();
                        sessionStorage.clear();
                        props.history.push("/");
                      }}
                    >
                      <Typography gutterBottom variant="body1">
                        Log Out
                      </Typography>
                    </IconButton>
                  </React.Fragment>
                </Toolbar>
              </AppBar>
              <main>
                <div className={classes.heroContent}>
                  <Container maxWidth="sm">
                    <Typography
                      component="h1"
                      variant="h2"
                      align="center"
                      color="textPrimary"
                      gutterBottom
                    >
                      {path === "/dashboard"
                        ? `Welcome to your Dashboard !`
                        : `Welcome to ${course.name}!`}
                    </Typography>
                    {path === "/dashboard" ? (
                      <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                      >
                        You can find your subscribed courses below.
                      </Typography>
                    ) : null}
                    <Typography
                      variant="h5"
                      align="center"
                      color="textSecondary"
                      paragraph
                    >
                      Happy Learning
                    </Typography>
                  </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                  <Grid container spacing={2}>
                    {cards.map((card, i) => (
                      <Grid
                        item
                        key={card}
                        xs={12}
                        sm={6}
                        md={
                          path.includes("/ls") || path.includes("/home") ? 6 : 4
                        }
                      >
                        <div
                          onClick={e => {
                            handleRoute(props, card, course, lsType);
                          }}
                        >
                          <Card className={classes.card}>
                            <CardMedia
                              className={classes.cardMedia}
                              image={
                                path === "/dashboard"
                                  ? card.image
                                  : course.image
                              }
                              title={
                                path === "/dashboard"
                                  ? card.name
                                  : `${course.name} ${card}`
                              }
                            />
                            <CardContent className={classes.cardContent}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {path === "/dashboard" ? card.name : card}
                              </Typography>
                              <Typography>
                                {path === "/dashboard"
                                  ? card.desc
                                  : course.desc}
                              </Typography>
                            </CardContent>
                          </Card>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </main>
              <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                  “Study hard what interests you the most in the most
                  undisciplined, irreverent and original manner possible.”
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  color="textSecondary"
                  component="p"
                >
                  Richard P. Feynman
                </Typography>
                <Copyright />
              </footer>
            </React.Fragment>
          ) : (
            <h1> 404 Error </h1>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
