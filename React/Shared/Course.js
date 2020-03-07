import React from 'react'
import courses from './courses'

import { Typography, 
    Paper, 
    makeStyles, 
    AppBar, 
    CardContent, 
    CardMedia, 
    Card,
    Toolbar,withStyles } from '@material-ui/core'


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


export default function JavaClass1 (props) {
    const classes = useStyles()

    const course =  courses.find((course) => props.match.params.course === course.name),
        course_no = props.match.params.course_no

    return(
        <div>
            <AppBar position="relative">
                <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    {course.name+' '+course_no}
                </Typography>
                </Toolbar>
            </AppBar>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <div>
                        <iframe width="1280" 
                            height="720" 
                            src="https://www.youtube.com/embed/I2wvhRUVNTM" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>                    
                        </iframe>
                    </div >
                    <Typography gutterBottom variant="h5" component="h2">
                        Hello World
                    </Typography>
                    <Typography>
                        Not as a tredition, but as a newbie lets learn whats the so called hello world is.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
