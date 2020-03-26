import React from "react";
import {
  Typography,
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Button,
  List,
  ListItem,
  Container
} from "@material-ui/core";
import { connect } from "react-redux";

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

  const lsContents = props.learningStyles.find(style => lsType === style.type)
    .contents;

  const path =
    lsContents.indexOf(category) + 1 < lsContents.length
      ? `/course/${course}/ls/${lsType}/${
          lsContents[lsContents.indexOf(category) + 1]
        }`
      : `/course/${course}/home`;

  props.history.push(path);
};

const ContentVisualOverview = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <form autoComplete="off" noValidate>
        <List>
          <ListItem>
            <Typography variant="h2">Data Types in Java</Typography>
          </ListItem>
          <ListItem>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <iframe
                    width="720"
                    height="480"
                    src="https://www.youtube.com/embed/snIUtdg0K30"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <Typography gutterBottom variant="h5" component="h2">
                    Java Data Types
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The Overview of Java Data Types are given in the above video
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
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


const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentVisualOverview);
