import React, {useState, useEffect} from 'react'
import courses from '../../Data/courses'
import { Typography, 
    makeStyles, 
    TextField,
    AppBar, 
    CardContent, 
    Card,
    Toolbar,
    IconButton,
    Container } from '@material-ui/core'

import categories from '../../Data/categories'


const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    handleButton :{
      margin: theme.spacing(4),
      float:'right'
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
    title: {
      flexGrow: 1,
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


export default function Page (props) {

    const classes = useStyles()

    const course =  courses.find((course) => props.match.params.course === course.name)
    const category = categories.find((category) => (props.match.params.category) === category.name) 

    const lsType = props.match.params.ls_type 

    return(
        <div>
          { course ? (
            <React.Fragment>
              <AppBar position="relative">
                  <Toolbar>
                    <Typography variant="h6" className={ classes.title }  color="inherit" noWrap>
                      {course.name+' '+category.name}
                    </Typography>
                    <IconButton edge="start" color="inherit" aria-label="home" onClick={ (e) => {
                      e.preventDefault()
                      props.history.push( ( props.history.location.pathname+''.includes('/ls') ? '/course/'+course.name+'/ls/'+lsType :'/course/'+course.name  ))
                      } }>
                      <Typography gutterBottom variant="body1" >
                        Course Home 
                      </Typography>
                    </IconButton>
                  </Toolbar>
              </AppBar>
              <Card className={classes.card}>
                <Container maxWidth="md">
                  <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2" >
                          {category.name}
                      </Typography>
                        { <category.component  {...props}/>}
                      <br/>
                  </CardContent>
                </Container>
              </Card> 
            </React.Fragment>) : (<h1> 404 Error </h1>) 
          }
        </div> 
    )
}
