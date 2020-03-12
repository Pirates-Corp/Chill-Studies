import React, { useState, useEffect } from "react";
import {
  Typography,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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
  },
  root: {
    width: "100%"
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

export default function DefinitionVisualOverview(props) {
  const classes = useStyles();
  return (
    <Container>
      <form autoComplete="off" noValidate>
        <List>
          <ListItem>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  // height="250"
                  image="https://static.javatpoint.com/images/java-data-types.png"
                  title="Variables"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Java Variables
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The Above Diagram Shows the classification of variables in
                    Java
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </ListItem>
          <ListItem>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="centre">Data Type</TableCell>
                    <TableCell align="centre">Default Value</TableCell>
                    <TableCell align="centre">Default size</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="centre">boolean</TableCell>
                    <TableCell align="centre">false</TableCell>
                    <TableCell align="centre">1 bit</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="centre">char</TableCell>
                    <TableCell align="centre"> '\u0000'</TableCell>
                    <TableCell align="centre"> 2 byte</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="centre">byte</TableCell>
                    <TableCell align="centre">0</TableCell>
                    <TableCell align="centre">1 byte</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="centre">short</TableCell>
                    <TableCell align="centre">0</TableCell>
                    <TableCell align="centre">2 bit</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="centre">int</TableCell>
                    <TableCell align="centre">0</TableCell>
                    <TableCell align="centre">4 byte</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="centre">long</TableCell>
                    <TableCell align="centre">0L</TableCell>
                    <TableCell align="centre">8 byte</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="centre">float</TableCell>
                    <TableCell align="centre">0.0f</TableCell>
                    <TableCell align="centre">4 byte</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="centre">double</TableCell>
                    <TableCell align="centre">0.0d</TableCell>
                    <TableCell align="centre">8 byte</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
    </Container>
  );
}
