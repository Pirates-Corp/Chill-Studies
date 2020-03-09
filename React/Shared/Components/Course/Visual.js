import React, {useState, useEffect} from 'react'
import courses from '../../Data/courses'
import { Typography, 
    Paper, 
    makeStyles, 
    TextField,
    Button,
    AppBar, 
    CardContent, 
    CardMedia, 
    Card,
    List,
    ListItem,
    ListItemIcon,
    Divider,
    Toolbar,withStyles, Container } from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { S3Control } from 'aws-sdk';


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
      margin: theme.spacing(4),
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


const handleSubmit = (e,props,startTime,score) => {
    e.preventDefault()
    const time = ((Date.now() - startTime)/1000)/60
    if(time > 2.33 && time < 2.40 ) {
        score++;
    } 
    time = Math.round(time)
    console.log("score"+score)
    console.log("time"+time)
    props.history.push(  '/'+ props.match.params.course +'/summary')
}

export default function Visual (props) {
        const classes = useStyles()

        const startTime = Date.now()

        const course =  courses.find((course) => props.match.params.course === course.name),
            category = props.match.params.category

        let score = 0;

        const paused = 0, completed = 0, focused = 0, played = 0;

        return(

        <form  autoComplete="off" noValidate>
            <List >
                <ListItem>
                    <Typography variant='h5'>
                        Hello World
                    </Typography>
                </ListItem> 
                <ListItem>
                <iframe width="1280" height="720" 
                    src="https://www.youtube.com/embed/I2wvhRUVNTM" 
                    frameborder="0" allow="accelerometer; autoplay; 
                    encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    onPause = { () => { paused++ }}
                    onEnded = { () => { completed++ }}
                    onFocus = { () => { focused++ } }
                    onPlay = { () => { played++ } }
                />
                </ListItem> 
                <Divider variant="middle" />
            </List>
            <br/>
            <Button variant="contained" color="primary" className={classes.heroButtons} onClick={(e)=>{ 
                let score = 0;
                paused ? (paused > 3 ? score+=2:score+=1):score
                completed ? (completed > 2 ? score+=4:score+=2):score
                played ? (played > 3 ? score+=2:score+=1):score
                handleSubmit(e,props,startTime,score) 
                }}
            >
                Next
            </Button>
        </form>
    )
}
