import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  makeStyles,
  Typography,
  Box,
  Link,
  CssBaseline,
  TextField,
  Button,
  Avatar
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Link as Linkto } from "react-router-dom";

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">
        <Linkto to="/" className={classes.link}>
          Chill Studies
        </Linkto>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
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

  const name = document.getElementById("name").value,
    email = document.getElementById("email").value,
    password = document.getElementById("password").value,
    confirmPassword = document.getElementById("confirmPassword").value;

  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Provide Valid Informations");
  } else {
    const data = {
      name: name,
      studentId: email,
      password: password,
      passwordConfrim: confirmPassword
    };
    try {
      const res = await axios.post(
        "http://chillstudies.ddns.net:8000/api/v1/student/signup",
        data
      );
      if (res.status === 201) {
        alert("You Successfully Signed Up !!!");
        sessionStorage.setItem("auth", res.data.data.student._id);
      }
    } catch (err) {
      alert('Failed to Sign Up. Try Again');
      console.log(err);
    }
    props.signupToggle();
  }
}

export default function SignUp(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => handleClick(e, props)}
          >
            Sign Up
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.submit}
            onClick={e => {
              props.signupToggle();  
            }}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
