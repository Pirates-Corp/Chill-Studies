import React, { useEffect,useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios";
import { Link as Linkto } from "react-router-dom";
import SignUp from "./Signup";
import {
  Container,
  Avatar,
  makeStyles,
  Typography,
  Grid,
  Box,
  Paper,
  TextField,
  CssBaseline,
  Button
} from "@material-ui/core";
import { connect } from "react-redux";

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
  root: {
    height: "100vh"
  },
  link: {
    textDecoration: "none",
    marginTop: "5px%"
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

async function handleClick(e, props) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log('res');

  try {
    const res = await axios.post(
      "http://chillstudies.ddns.net:8000/api/v1/student/login",
      {
        studentId: email,
        password: password
      }
    );

    if (res.status === 201) {
      sessionStorage.setItem("auth", res.data.data.student._id);
      props.history.push("/dashboard");
    } else {
      alert("Pls Enter Valid Details");
    }
  } catch (err) {
    alert('Login Failed. Try Again');
  }
}

const Login = (props) => {
  const classes = useStyles();

  const [signIn, setSingIn] = useState(true);

  const signupToggle = () => {
    signIn ? setSingIn(false) : setSingIn(true);
  };

  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setAuth(sessionStorage.getItem("auth"));
  });

  console.log(props)

  return (
    <React.Fragment>
      {auth ? (
        props.history.push("/dashboard")
      ) : (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper}>
            {signIn ? (
              <Container component="main" maxWidth="sm">
                <CssBaseline />
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <form className={classes.form} noValidate>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={e => {
                        handleClick(e, props);
                      }}
                    >
                      Sign In
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      className={classes.submit}
                      onClick={e => {
                        e.preventDefault();
                        signupToggle();
                      }}
                    >
                      Sign Up
                    </Button>
                    <Box mt={5}>
                      <Copyright />
                    </Box>
                  </form>
                </div>
              </Container>
            ) : (
                <SignUp signupToggle={signupToggle} {...props}/>  
            )}
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps,mapDispatchToProps)(Login)
