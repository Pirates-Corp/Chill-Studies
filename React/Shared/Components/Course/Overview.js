import React, {useState, useEffect} from 'react'
import { Typography, 
    Paper, 
    makeStyles, 
    Button,
    List,
    ListItem,
    Divider,
    Container} from '@material-ui/core'
import axios from 'axios'    


const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    link : {
      textDecoration : 'none',
    },
    handleButton :{
        margin: theme.spacing(4),
        float:'right'
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
    Text : {
        display : 'block'
    }
  }));


const handleSubmit = async (e,props,startTime,score) => {
    e.preventDefault()
    score*= 2
    let time = Math.round(((Date.now() - startTime)/1000)/60)
    time = time >= 9 ? 9 : time


    const authToken = sessionStorage.getItem('auth')

    try {
        const res = await axios.patch('http://127.0.0.1:8000/api/v1/student/ml/post/'+authToken,
        {
          "ABC" : score,
          "ABC_T" :  time
        })
    
        if(res.status === 200) {
          console.log('Successfully Pushed Activity Data')
        }
        
        else {
          alert("Problem While Pushing");
        }
      } catch(err ){
        alert(err)
      }

    console.log("score"+score)
    console.log("time"+time)

    props.history.push( '/course/'+ props.match.params.course +'/definitons')
}

export default function Overview (props) {
    const classes = useStyles()


    const startTime = Date.now()

    const [intro,setIntro] = useState(false)

    const handleIntro = () => {
        setIntro(true)
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
                        <ListItem onClick = { handleIntro } >
                            <Typography variant='h5' gutterBottom >
                                Introduction
                            </Typography>
                        </ListItem> 
                        {  intro ? (
                            <React.Fragment>
                                <ListItem>
                                    <Typography variant='body1' gutterBottom>
                                        In this section we learn the basic & fundamental things about Java
                                    </Typography>
                                </ListItem>
                            </React.Fragment>)
                            : null
                        }
                    </Paper>
                    <Paper className={classes.heroButtons}>
                        <ListItem onClick = { handleBasics }> 
                            <Typography variant='h5'>
                                Basics
                            </Typography>
                        </ListItem> 
                        { basics ? (
                            <React.Fragment>
                                <ListItem>
                                    <Typography variant='body1'>
                                       Basic programming concepts like contditional statements and loop statements and variables and thier syntax will be covered here.
                                    </Typography>
                                </ListItem>
                            </React.Fragment> ) : null }
                    </Paper>
                    <Paper className={classes.heroButtons}>
                        <ListItem onClick = { handleInter }>
                            <Typography variant='h5'>
                                Intermediatory 
                            </Typography>
                        </ListItem> 
                        { inter ? (
                            <React.Fragment>
                                <ListItem>
                                    <Typography variant='body1'>
                                       concepts like packages classes functions access modifiers will be covered here.
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
                                       Object Oriented concepts like inheritence and abstracting will be covered here.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant='body1'>
                                        Java Interface concepts also will take importance phase in this chapter
                                    </Typography>
                                </ListItem>
                            </React.Fragment> )
                            : null }
                    </Paper>
                    <Paper className={classes.heroButtons}>
                        <ListItem onClick = { handleAdv }>
                            <Typography variant='h5'>
                                Advanced Java
                            </Typography>
                        </ListItem> 
                        { adv ? (
                            <React.Fragment>
                                <ListItem>
                                    <Typography variant='body1'>
                                        Advanced java concepts like threads and streams and lamda kinda things will take dominance here. 
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant='body1'>
                                        Networking in java also is an important concept to learn.
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
                    
                    intro ? score++:score
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