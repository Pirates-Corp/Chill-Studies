import React, {useState, useEffect} from 'react'
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

 import LearningStyles from '../../../Data/learningStyles'   

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




export default function LS (props) {
    const classes = useStyles()

    let lsTypeParam = props.match.params.ls_type+''

    lsTypeParam = lsTypeParam.substring(1, lsTypeParam.length)

    const ls =  LearningStyles.find((ls) => lsTypeParam === ls.type)

    return(
        <React.Fragment>
            {ls ? (
                <div>
                    <AppBar position="relative">
                        <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Learning Styles
                        </Typography>
                        </Toolbar>
                    </AppBar>    
                    <Container maxWidth="md">
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <List>
                                    <ListItem>
                                        <Typography gutterBottom variant="body2" color='secondary'>
                                            Hello there, to improve your ease of study, we use FLSM mapping techiques to asses your learning style and will give study materials according to that.
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography gutterBottom variant="h4">
                                            {ls.name}
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography gutterBottom variant="body1">
                                            {
                                                ls.type.charAt(0) === 'a' ? (
                                                        'You like activites rathar than boring theories'
                                                    ):(
                                                        'You learn from what you study'
                                                    )
                                            }
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography gutterBottom variant="body1">
                                            {
                                                ls.type.charAt(1) === 's' ? (
                                                        'You think before approching a problem'
                                                    ):(
                                                        'You give preference to you intuitions'
                                                    )
                                            }
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography gutterBottom variant="body1">
                                            {
                                                ls.type.charAt(2) === 'v' ? (
                                                        'You like graphical stuff and illustrations'
                                                    ):(
                                                        'You are good with reading ( verbal )'
                                                    )
                                            }
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography gutterBottom variant="body1">
                                            {
                                                ls.type.charAt(0) === 's' ? (
                                                        'You study sequencially (step by step)'
                                                    ):(
                                                        'You prefer global view about the things'
                                                    )
                                            }
                                        </Typography>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem>
                                        <Typography gutterBottom variant="body1">
                                        In the upcomming chapters you will get the learning materials that matches your interests. Happly Learning !
                                        </Typography>
                                    </ListItem>
                                </List>
                                <Button variant="outlined" color="primary" className={classes.handleButton} onClick={(e)=>{ 
                                    e.preventDefault()
                                    props.history.push( '/ls/'+ls.type) 
                                    }}
                                >
                                    Proceed  !     
                                </Button>
                            </CardContent>
                        </Card>
                    </Container>
                </div> ) : (<h1> 404 Error </h1>)
            }
        </React.Fragment>
    )
}
