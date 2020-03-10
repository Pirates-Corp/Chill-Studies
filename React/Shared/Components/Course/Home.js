import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, IconButton } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Link as Linkto } from 'react-router-dom'
import courses from '../../Data/courses'
import AppsIcon from '@material-ui/icons/Apps';
import ls from 'local-storage'

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
  HomeButton : {
    float : 'right'
  },
  handleButton :{
    margin: theme.spacing(4),
    float:'left'
  },
  title: {
    flexGrow: 1,
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



export default function ClassHome(props) {
  const classes = useStyles();

  const path = props.history.location.pathname

  const cards = path==='/dashboard' ? courses : [ 'overview','definitons', 'activity', 'content','visual','summary'];

  let course = (path==='/dashboard') ?  (null) : (courses.find((course) => props.match.params.course === course.name) )

  return (
    <React.Fragment> 
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        { path==='/dashboard' ?  (
          <Typography variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard
        </Typography>
        ):(
          <React.Fragment>
          <Typography variant="h6" color="inherit" noWrap className={classes.title}>
            {course.name}
          </Typography>
          <IconButton edge="start" className={classes.HomeButton} color="inherit" aria-label="home" onClick={ (e) => {
            e.preventDefault()
            props.history.push( '/dashboard')
            } }>
              <Typography gutterBottom variant="body1" >
                Dashboard
              </Typography>
          </IconButton> 
          </React.Fragment>)
        }
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
        <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            { path==='/dashboard' ?  (`Welcome to your Dashboard !`):( `Welcome to ${course.name}!`)}
            </Typography>
            { path==='/dashboard' ? (
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                You can find your subscribed courses below.
              </Typography>):null
            }
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Happy Learning
            </Typography>
        </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={2}>
              {cards.map((card,i) => (
                  <Grid item key={card} xs={12} sm={6} md={4}> 
                      <Linkto className={classes.link} to={ path ==='/dashboard' ? `/course/${card.name}`: `/course/${course.name}/${card}` }>
                          <Card className={classes.card}>
                          <CardMedia
                              className={classes.cardMedia}
                              image= { path ==='/dashboard' ? card.image:course.image}
                              title={path ==='/dashboard' ? card.name : `${course.name} ${card}`}
                          />
                          <CardContent className={classes.cardContent}>
                              <Typography gutterBottom variant="h5" component="h2">
                                {path ==='/dashboard' ? card.name : card }
                              </Typography>
                              <Typography>
                                { path ==='/dashboard' ? card.desc : course.desc}
                              </Typography>
                          </CardContent>
                          </Card>
                      </Linkto>
                  </Grid>
              ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        “Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.”
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Richard P. Feynman
        </Typography>
        <Copyright />
      </footer> 
    </React.Fragment> 
  );
}