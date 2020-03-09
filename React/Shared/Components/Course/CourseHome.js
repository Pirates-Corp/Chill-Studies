import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as Linkto } from 'react-router-dom'
import courses from '../../Data/courses'

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        <Linkto to='/' className={classes.link}>
            Chill Studies
        </Linkto>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  link : {
    textDecoration : 'none',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  handleButton :{
    margin: theme.spacing(4),
    float:'left'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [ 'overview','definitons', 'activity', 'content','visual','summary'];

export default function ClassHome(props) {
  const classes = useStyles();

  const course =  courses.find((course) => props.match.params.course === course.name) 
  

  return (
    course ?  
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              {course.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
          <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to {course.name}!
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Happy Learning
              </Typography>
          </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
            <Grid container spacing={2}>
                {cards.map((card,i) => (
                    <Grid item key={card} xs={12} sm={6} md={4}> 
                        <Linkto className={classes.link} to={`${course.name}/${card}`}>
                            <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image= {course.image}
                                title={`${course.name} ${card}`}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                  {`${card}`}
                                </Typography>
                                <Typography>
                                  This is a begginer level {course.name} course you can start with ease.
                                </Typography>
                            </CardContent>
                            </Card>
                        </Linkto>
                    </Grid>
                ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
          “Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.”
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Richard P. Feynman
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment> 
      :
      <div>
        <h1>404 ERROR</h1>
      </div>
  );
}