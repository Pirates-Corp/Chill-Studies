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


const handleSubmit = (e,props,startTime) => {
    e.preventDefault()
    const sec = (Date.now() - startTime)/1000
    console.log(Math.round(sec/60))
    props.history.push(  '/'+ props.match.params.course +'/summary')
}

const handleSkip = (e,props,startTime) => {
    e.preventDefault()
    props.history.push(  '/'+ props.match.params.course +'/summary')
}

export default function Summary (props) {
    const classes = useStyles()

    const startTime = Date.now()

    const course =  courses.find((course) => props.match.params.course === course.name),
        category = props.match.params.category

    return(
        <form  autoComplete="off" noValidate>
            <List >
                <ListItem>
                    <ListItem >
                        <Typography variant='h5'>
                            Lets see if you can find the abbreviation for JVM
                        </Typography>
                    </ListItem>
                </ListItem> 
                <Divider variant="middle" />
            </List>
            <br/>
            <Button variant="contained" color="primary" className={classes.heroButtons} onClick={(e)=>{ handleSubmit(e,props,startTime) }}>
                Submit
            </Button>
        </form>
    )
}
