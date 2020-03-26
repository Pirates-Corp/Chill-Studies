import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Typography,
  makeStyles,
  AppBar,
  CardContent,
  Card,
  Toolbar,
  IconButton,
  Container
} from "@material-ui/core";


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
  title: {
    flexGrow: 1
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

function Page(props) {
  const classes = useStyles();

  const course = props.courses.find(
    course => props.match.params.course === course.name
  );
  const category = props.categories.find(
    category => props.match.params.category === category.name
  );

  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setAuth(sessionStorage.getItem("auth"));
  });

  return (
    <React.Fragment>
      {
        auth === null ? (
        <h1> login required </h1>
      ) : (
            <div>
              {course ? (
                <React.Fragment>
                  <AppBar position="relative">
                    <Toolbar>
                      <Typography
                        variant="h6"
                        className={classes.title}
                        color="inherit"
                        noWrap
                      >
                        {course.name + " " + category.name}
                      </Typography>
                      <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="home"
                        onClick={e => {
                          e.preventDefault();
                          props.history.push("/course/" + course.name + "/home");
                        }}
                      >
                        <Typography gutterBottom variant="body1">
                          Course Home
                </Typography>
                      </IconButton>
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
                    </Toolbar>
                  </AppBar>
                  <Card className={classes.card}>
                    <Container maxWidth="md">
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {category.name}
                        </Typography>
                        {<category.component {...props} />}
                        <br />
                      </CardContent>
                    </Container>
                  </Card>
                </React.Fragment>
              ) : (
                  <h1> 404 Error </h1>
                )
              }
            </div> )
      }
      </React.Fragment>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
