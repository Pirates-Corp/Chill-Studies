import React  from "react";
import {
  Typography,
  makeStyles,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Divider
} from "@material-ui/core";
import { connect } from "react-redux";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";

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

  console.log("Vijay");

  props.history.push(path);
};

function DefinitionVerbalOverview(props) {
  const classes = useStyles();
  return (
    <form autoComplete="off" noValidate>
      <List>
        <ListItem>
          <Typography variant="h2">Data Types in Java</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h4"> Primitive Data Types </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            {" "}
            There are eight primitive datatypes supported by Java. Primitive
            datatypes are predefined by the language and named by a keyword. Let
            us now look into the eight primitive data types in detail.{" "}
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosRoundedIcon />
          </ListItemIcon>
          <Typography variant="h6">byte</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRightOutlinedIcon />
          </ListItemIcon>
          <Typography variant="body1">
            Byte data type is an 8-bit signed two's complement integer
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosRoundedIcon />
          </ListItemIcon>
          <Typography variant="h6">short</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRightOutlinedIcon />
          </ListItemIcon>
          <Typography variant="body1">
            Short data type is a 16-bit signed two's complement integer
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosRoundedIcon />
          </ListItemIcon>
          <Typography variant="h6">int</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRightOutlinedIcon />
          </ListItemIcon>
          <Typography variant="body1">
            Int data type is a 32-bit signed two's complement integer.
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosRoundedIcon />
          </ListItemIcon>
          <Typography variant="h6">float</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRightOutlinedIcon />
          </ListItemIcon>
          <Typography variant="body1">
            Float data type is a single-precision 32-bit IEEE 754 floating point
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosRoundedIcon />
          </ListItemIcon>
          <Typography variant="h6">double</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRightOutlinedIcon />
          </ListItemIcon>
          <Typography variant="body1">
            double data type is a double-precision 64-bit IEEE 754 floating
            point
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosRoundedIcon />
          </ListItemIcon>
          <Typography variant="h6">boolean</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRightOutlinedIcon />
          </ListItemIcon>
          <Typography variant="body1">
            boolean data type represents one bit of information
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ArrowForwardIosRoundedIcon />
          </ListItemIcon>
          <Typography variant="h6">char</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRightOutlinedIcon />
          </ListItemIcon>
          <Typography variant="body1">
            char data type is a single 16-bit Unicode character
          </Typography>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="h4"> Reference Datatypes </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRightOutlinedIcon />
          </ListItemIcon>
          <Typography variant="body1">
            Reference variables are created using defined constructors of the
            classes. They are used to access objects. These variables are
            declared to be of a specific type that cannot be changed. For
            example, Employee, Puppy, etc.
          </Typography>
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

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DefinitionVerbalOverview);
