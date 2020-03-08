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
   const q1 = (document.getElementById('q1').value).toLowerCase(),
   q2 = document.getElementById('q2').value.toLowerCase(),
   q3 = document.getElementById('q3').value.toLowerCase(),
   q4 = document.getElementById('q4').value.toLowerCase(),
   q5 = document.getElementById('q5').value.toLowerCase()

   let score = 0

   if(q1.includes('java virtual machine')) score++
   if(q2.includes('import')) score++
   if(q3.includes('3')) score++
   if(q4.includes('java runtime environment')) score++
   if(q5.includes('java development kit')) score++

   score*=20

   console.log((Date.now() - startTime)/1000)
   console.log(score)

 }

export default function JavaClass1 (props) {
    const classes = useStyles()

    const startTime = Date.now()

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
              <Container maxWidth="md">
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" >
                        Acitivity
                    </Typography>
                    <br/>
                    <form  autoComplete="off" noValidate>
                    <List >
                      <ListItem>
                        <ListItemIcon>
                          <ArrowForwardIosRoundedIcon />
                        </ListItemIcon>
                        <ListItem >
                          <Typography variant='subtitle1'>
                            Lets see if you can find the abbreviation for JVM
                          </Typography>
                        </ListItem>
                        <ListItem>  <TextField id="q1" label="Answer"/> </ListItem>
                      </ListItem> 
                      <ListItem>
                        <ListItemIcon>
                          <ArrowForwardIosRoundedIcon />
                        </ListItemIcon>
                        <ListItem >
                          <Typography variant='subtitle1'>
                            Can you find the keyword used to include java packages ?
                          </Typography>
                        </ListItem>
                        <ListItem><TextField id="q2" label="Answer"/></ListItem>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ArrowForwardIosRoundedIcon />
                        </ListItemIcon>
                        <ListItem >
                          <Typography variant='subtitle1'>
                            what could be the value of 'a++' if 'a=2' ? 
                          </Typography> 
                        </ListItem>
                        <ListItem><TextField id="q3" label="Answer"/></ListItem>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ArrowForwardIosRoundedIcon />
                        </ListItemIcon>
                        <ListItem >
                          <Typography variant='subtitle1'>
                          Lets see if you can find the abbreviation for JRE
                          </Typography>
                        </ListItem>
                        <ListItem><TextField id="q4" label="Answer"/></ListItem>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ArrowForwardIosRoundedIcon />
                        </ListItemIcon>
                        <ListItem >
                          <Typography variant='subtitle1'>
                            Lets see if you can find the abbreviation for JDK
                          </Typography>
                        </ListItem>
                        <ListItem><TextField id="q5" label="Answer"/></ListItem>
                      </ListItem>
                      <Divider variant="middle" />
                    </List>
                      <br/>
                      <Button variant="contained" color="primary" className={classes.heroButtons} onClick={(e)=>{ handleSubmit(e,props,startTime) }}>
                        Submit
                      </Button>
                      <Button variant="contained" color="seondary" className={classes.heroButtons} onClick={(e)=>{ handleSkip(e,props) } }>
                        Skip
                      </Button>
                    </form>
                </CardContent>
              </Container>
            </Card>
        </div>
    )
}
