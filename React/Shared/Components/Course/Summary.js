import React, {useState, useEffect} from 'react'
import { Typography, 
    Paper, 
    makeStyles, 
    Button,
    List,
    ListItem,
    Divider,
    Container} from '@material-ui/core'


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
    handleButton :{
        margin: theme.spacing(4),
        float:'right'
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
    Text : {
        display : 'block'
    }
  }));


const handleSubmit = (e,props,startTime,score) => {
    e.preventDefault()
    score*= 2
    let time = Math.round(((Date.now() - startTime)/1000)/60)
    time = time >= 9 ? 9 : time
    console.log("score"+score)
    console.log("time"+time)

    props.history.push( '/ls/asvs')
}

export default function Summary (props) {
    const classes = useStyles()


    const startTime = Date.now()

    const [java,setJava] = useState(false)

    const handleJava = () => {
        setJava(true)
    }

    const [basics,setBasics] = useState(false)

    const handleBasics = () => {
        setBasics(true)
    }

    const [inter,setInter] = useState(false)

    const handleInter = () => {
        setInter(true)
    }

    const [oops,setOops] = useState(false)

    const handleOops = () => {
        setOops(true)
    }

    const [adv,setAdv] = useState(false)

    const handleAdv = () => {
        setAdv(true)
    }

    return(
        <Container maxWidth='sm'>
            <form  autoComplete="off" noValidate>
                <List >
                    <Paper className={classes.heroButtons}>
                        <ListItem onClick = { handleJava } >
                            <Typography variant='h5' gutterBottom >
                                Java - Summary
                            </Typography>
                        </ListItem> 
                        {  java ? (
                            <React.Fragment>
                                <ListItem>
                                    <Typography variant='body1' gutterBottom>
                                      Java is a high-level programming language developed by Sun Microsystems.
                                      It was originally designed for developing programs for set-top boxes and handheld devices,
                                      but later became a popular choice for creating web applications.
                                    </Typography>
                                </ListItem>
                            </React.Fragment>)
                            : null
                        }
                    </Paper>
                    <Paper className={classes.heroButtons}>
                        <ListItem onClick = { handleBasics }> 
                            <Typography variant='h5'>
                                Java Basics - Summary
                            </Typography>
                        </ListItem> 
                        { basics ? (
                            <React.Fragment>
                                <ListItem>
                                    <Typography variant='body1'>
                                       So, the basic concepts of java are, just like any other programming languages, contional statements, loop statements, variables etc.
                                    </Typography>
                                </ListItem>
                            </React.Fragment> ) : null }
                    </Paper>
                    <Paper className={classes.heroButtons}>
                        <ListItem onClick = { handleInter }>
                            <Typography variant='h5'>
                                Concepts In Java - Summary
                            </Typography>
                        </ListItem> 
                        { inter ? (
                            <React.Fragment>
                                <ListItem>
                                    <Typography variant='body1'>
                                      Popular concepts that are used in java are Classes, Interfaces, Packages thess will get u started in Java.
                                    </Typography>
                                </ListItem>
                            </React.Fragment> ) : null }
                    </Paper>
                    <Paper className={classes.heroButtons}>
                        <ListItem onClick = { handleOops }>
                            <Typography variant='h5'>
                                Object Oriented  Programming With Java 
                            </Typography>
                        </ListItem> 
                        { oops ? (
                            <React.Fragment>
                                <ListItem>
                                    <Typography variant='body1'>
                                       Object oriented concepts are mandatory things you should learn if you wanna use java. It will enable you to work with teams that means you will learn making loosely coupled applications using these concepts
                                    </Typography>
                                </ListItem>
                            </React.Fragment> )
                            : null }
                    </Paper>
                    <Paper className={classes.heroButtons}>
                        <ListItem onClick = { handleAdv }>
                            <Typography variant='h5'>
                                Advanced Java - Summary
                            </Typography>
                        </ListItem> 
                        { adv ? (
                            <React.Fragment>
                                <ListItem>
                                    <Typography variant='body1'>
                                        Concepts like Threads and streams enables you to use Java effectively. With that you could build enterprice applications and applicatoons that runs in network. Also, Networking in java will help you build networking modules such as Gateways.
                                    </Typography>
                                </ListItem>
                            </React.Fragment> )
                            : null
                        }
                    </Paper>
                    <Divider variant="middle" />
                </List>
                <br/>
                <Button variant="contained" color="primary" className={classes.handleButton} onClick={(e)=>{ 
                    let score = 0;
                    
                    java ? score++:score
                    inter ? score++:score
                    oops ? score++:score
                    adv ? score++:score
                    basics ? score++:score

                    handleSubmit(e,props,startTime,score) 
                    }}>
                Next
                </Button>
            </form>
        </Container>
    )
}