import React  from "react";
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

export default function DefinitionVisualDetailed(props) {
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
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  // height="250"
                  image="https://1.bp.blogspot.com/-E_tUghZLenM/XW_qJ7IEg4I/AAAAAAAAC7I/NInngU0p89gCgpn1hdlaETa1zC4QvE6_ACLcBGAs/s1600/java-data-types.png"
                  title="Variables"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Java Data Types
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
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  // height="250"
                  image="https://1.bp.blogspot.com/-Lx36U7N4DP0/XXCP8TOCkaI/AAAAAAAAC7U/R2MJbpwF6Ao6mek4simcY4e04f0aWSYPQCLcBGAs/s1600/integer-data-types.png"
                  title="Variables"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Java Data Types
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The Above Diagram Shows the classification of Integer
                    datatypes in Java
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
                    <TableCell align="centre">Type</TableCell>
                    <TableCell align="centre">Size</TableCell>
                    <TableCell align="centre">Minimum value</TableCell>
                    <TableCell align="centre">Maximum value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="centre">byte</TableCell>
                    <TableCell align="centre">One byte</TableCell>
                    <TableCell align="centre">-128</TableCell>
                    <TableCell align="centre">127</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="centre">short</TableCell>
                    <TableCell align="centre"> Two bytes</TableCell>
                    <TableCell align="centre"> -32, 768</TableCell>
                    <TableCell align="centre">32, 767</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="centre">int</TableCell>
                    <TableCell align="centre">Four bytes</TableCell>
                    <TableCell align="centre">-2, 147, 483, 648</TableCell>
                    <TableCell align="centre">2, 147, 483, 647</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="centre">long</TableCell>
                    <TableCell align="centre">Eight bytes</TableCell>
                    <TableCell align="centre">
                      -9, 223, 372, 036, 854, 775, 808
                    </TableCell>
                    <TableCell align="centre">
                      9, 223, 372, 036, 854, 775, 807
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </ListItem>
          <ListItem>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  // height="250"
                  image="https://1.bp.blogspot.com/-7yTep7sMX-k/XXI_z9QZnpI/AAAAAAAAC7g/F-usnpO8rpk99e7cWEGj92gZjBy69hoywCLcBGAs/s1600/floating-point-data-types.png"
                  title="Variables"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Java Data Types
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The Above Diagram Shows the classification of floatingpoint
                    datatypes in Java
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
                    <TableCell align="centre">Type</TableCell>
                    <TableCell align="centre">Size</TableCell>
                    <TableCell align="centre">Minimum value</TableCell>
                    <TableCell align="centre">Maximum value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="centre">float</TableCell>
                    <TableCell align="centre">Four byte</TableCell>
                    <TableCell align="centre">3.4e-038</TableCell>
                    <TableCell align="centre">3.4e+038</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="centre">double</TableCell>
                    <TableCell align="centre"> Eight bytes</TableCell>
                    <TableCell align="centre"> 1.7e-308</TableCell>
                    <TableCell align="centre">1.7e+308</TableCell>
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
