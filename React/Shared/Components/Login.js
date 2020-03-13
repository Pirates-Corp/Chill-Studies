import React from "react";
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
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button
} from "@material-ui/core";

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

  try {
    const res = await axios.post("http://127.0.0.1:8000/api/v1/student/login", {
      studentId: email,
      password: password
    });

    if (res.status === 201) {
      sessionStorage.setItem("auth", res.data.data.student._id);
      props.history.push("/dashboard");
    } else {
      alert("Pls Enter Valid Details");
    }
  } catch (err) {
    alert(err);
  }
}

export default function Login(props) {
  const classes = useStyles();

  const [signIn, setSingIn] = React.useState(true);

  const handleSignup = () => {
    signIn ? setSingIn(false) : setSingIn(true);
  };

  return (
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
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
                {/* <Linkto className={classes.link} to="/signup"> */}
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  className={classes.submit}
                  onClick={e => {
                    e.preventDefault();
                    handleSignup();
                  }}
                >
                  Sign Up
                </Button>
                {/* </Linkto> */}
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Container>
        ) : (
          <SignUp handleSignup={handleSignup} />
        )}
      </Grid>
    </Grid>
  );
}
