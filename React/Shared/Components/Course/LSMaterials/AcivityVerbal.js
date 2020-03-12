import React from "react";
import {
  Typography,
  makeStyles,
  Button,
  List,
  ListItem,
  Divider,
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
          <Typography variant="h2">Data Types in Java</Typography>
        </ListItem>
        <ListItem>
          <Typography varient="body1">1) Primitive data types</Typography>
        </ListItem>
        <ListItem>
          <Typography varient="body1">2) Non - Primitive data types</Typography>
        </ListItem>

        <ListItem>
          <Typography variant="h4">Primitive data types</Typography>
        </ListItem>

        <ListItem>
          <Typography variant="body1">
            In Java, we have eight primitive data types: boolean, char, byte,
            short, int, long, float and double. Java developers included these
            data types to maintain the portability of java as the size of these
            primitive data types do not change from one operating system to
            another.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography variant="h6">Byte</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            This can hold whole number between -128 and 127.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography variant="h6">Short</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            This is greater than byte in terms of size and less than integer.
            Its range is -32,768 to 32767. Default size of this data type: 2
            byte
          </Typography>
        </ListItem>

        <ListItem>
          <Typography variant="h6">Long</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            Used when int is not large enough to hold the value, it has wider
            range than int data type, ranging from -9,223,372,036,854,775,808 to
            9,223,372,036,854,775,807. size: 8 bytes Default value: 0
          </Typography>
        </ListItem>

        <ListItem>
          <Typography variant="h6">Double</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            Sufficient for holding 15 decimal digits size: 8 bytes
          </Typography>
        </ListItem>

        <ListItem>
          <Typography variant="h6">Float</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            Sufficient for holding 6 to 7 decimal digits size: 4 bytes
          </Typography>
        </ListItem>

        <ListItem>
          <Typography variant="h6">Boolean</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">holds either true of false.</Typography>
        </ListItem>

        <Divider variant="middle" />

        <ListItem>
          <Typography variant="h3">Non - Primitive data types</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h6">String</Typography>
        </ListItem>

        <ListItem>
          <Typography variant="h6">Arrays</Typography>
        </ListItem>

        <ListItem>
          <Typography variant="h6">Classes</Typography>
        </ListItem>

        <ListItem>
          <Typography variant="h6">Interface</Typography>
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
  );
}
