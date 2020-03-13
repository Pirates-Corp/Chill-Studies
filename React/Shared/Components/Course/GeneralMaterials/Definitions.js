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
import axios from "axios";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
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
  },
  Text: {
    display: "block"
  }
}));

const handleSubmit = async (e, props, startTime, score) => {
  e.preventDefault();
  score *= 2;

  score = score > 9 ? 9 : score 
  time = time >= 9 ? 9 : time
  
  let time = Math.round((Date.now() - startTime) / 1000 / 10); 

  const authToken = sessionStorage.getItem("auth");

  try {
    const res = await axios.patch(
      "http://127.0.0.1:8000/api/v1/student/ml/post/" + authToken,
      {
        D: score,
        D_T: time
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

  props.history.push("/course/" + props.match.params.course + "/Activity");
};

export default function Definitions(props) {
  const classes = useStyles();

  const startTime = Date.now();

  const [java, setJava] = useState(false);

  const handleJava = () => {
    setJava(true);
  };

  const [jvm, setJvm] = useState(false);

  const handleJvm = () => {
    setJvm(true);
  };

  const [jdk, setJdk] = useState(false);

  const handleJdk = () => {
    setJdk(true);
  };

  const [jre, setJre] = useState(false);

  const handleJre = () => {
    setJre(true);
  };

  const [jar, setJar] = useState(false);

  const handleJar = () => {
    setJar(true);
  };

  return (
    <Container maxWidth="sm">
      <form autoComplete="off" noValidate>
        <List>
          <Paper className={classes.heroButtons}>
            <ListItem onClick={handleJava}>
              <Typography variant="h5" gutterBottom>
                Java
              </Typography>
            </ListItem>
            {java ? (
              <React.Fragment>
                <ListItem>
                  <Typography variant="body1" gutterBottom>
                    Java is a high-level programming language developed by Sun
                    Microsystems. It was originally designed for developing
                    programs for set-top boxes and handheld devices, but later
                    became a popular choice for creating web applications.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" gutterBottom>
                    The Java syntax is similar to C++, but is strictly an
                    object-oriented programming language. For example, most Java
                    programs contain classes, which are used to define objects,
                    and methods, which are assigned to individual classes. Java
                    is also known for being more strict than C++, meaning
                    variables and functions must be explicitly defined. This
                    means Java source code may produce errors or "exceptions"
                    more easily than other languages, but it also limits other
                    types of errors that may be caused by undefined variables or
                    unassigned types.
                  </Typography>
                </ListItem>
              </React.Fragment>
            ) : null}
          </Paper>
          <Paper className={classes.heroButtons}>
            <ListItem onClick={handleJvm}>
              <Typography variant="h5">JVM</Typography>
            </ListItem>
            {jvm ? (
              <React.Fragment>
                <ListItem>
                  <Typography variant="body1">
                    JVM(Java Virtual Machine) acts as a run-time engine to run
                    Java applications. JVM is the one that actually calls the
                    main method present in a java code. JVM is a part of
                    JRE(Java Runtime Environment).
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">
                    Java applications are called WORA (Write Once Run Anywhere).
                    This means a programmer can develop Java code on one system
                    and can expect it to run on any other Java enabled system
                    without any adjustment. This is all possible because of JVM.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">
                    When we compile a .java file, .class files(contains
                    byte-code) with the same class names present in .java file
                    are generated by the Java compiler. This .class file goes
                    into various steps when we run it. These steps together
                    describe the whole JVM.
                  </Typography>
                </ListItem>
              </React.Fragment>
            ) : null}
          </Paper>
          <Paper className={classes.heroButtons}>
            <ListItem onClick={handleJre}>
              <Typography variant="h5">JRE</Typography>
            </ListItem>
            {jre ? (
              <React.Fragment>
                <ListItem>
                  <Typography variant="body1">
                    JRE stands for “Java Runtime Environment” and may also be
                    written as “Java RTE.” The Java Runtime Environment provides
                    the minimum requirements for executing a Java application;
                    it consists of the Java Virtual Machine (JVM), core classes,
                    and supporting files.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">
                    Java Runtime Environment (to say JRE) is an installation
                    package which provides environment to only run(not develop)
                    the java program(or application)onto your machine. JRE is
                    only used by them who only wants to run the Java Programs
                    i.e. end users of your system.
                  </Typography>
                </ListItem>
              </React.Fragment>
            ) : null}
          </Paper>
          <Paper className={classes.heroButtons}>
            <ListItem onClick={handleJdk}>
              <Typography variant="h5">JDK</Typography>
            </ListItem>
            {jdk ? (
              <React.Fragment>
                <ListItem>
                  <Typography variant="body1">
                    The Java Development Kit (JDK) is a software development
                    environment used for developing Java applications and
                    applets. It includes the Java Runtime Environment (JRE), an
                    interpreter/loader (Java), a compiler (javac), an archiver
                    (jar), a documentation generator (Javadoc) and other tools
                    needed in Java development.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">
                    Java Development Kit (in short JDK) is Kit which provides
                    the environment to develop and execute(run) the Java
                    program. JDK is a kit(or package) which includes two things
                    Development Tools(to provide an environment to develop your
                    java programs) JRE (to execute your java program). became a
                    popular choice for creating web applications.
                  </Typography>
                </ListItem>
              </React.Fragment>
            ) : null}
          </Paper>
          <Paper className={classes.heroButtons}>
            <ListItem onClick={handleJar}>
              <Typography variant="h5">JAR</Typography>
            </ListItem>
            {jar ? (
              <React.Fragment>
                <ListItem>
                  <Typography variant="body1">
                    Java is a high-level programming language developed by Sun
                    Microsystems. It was originally designed for developing
                    programs for set-top boxes and handheld devices, but later
                    became a popular choice for creating web applications.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">
                    Java is a high-level programming language developed by Sun
                    Microsystems. It was originally designed for developing
                    programs for set-top boxes and handheld devices, but later
                    became a popular choice for creating web applications.
                  </Typography>
                </ListItem>
              </React.Fragment>
            ) : null}
          </Paper>
          <Divider variant="middle" />
        </List>
        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.handleButton}
          onClick={e => {
            let score = 0;

            java ? score++ : score;
            jdk ? score++ : score;
            jre ? score++ : score;
            jar ? score++ : score;
            jvm ? score++ : score;

            handleSubmit(e, props, startTime, score);
          }}
        >
          Next
        </Button>
      </form>
    </Container>
  );
}
