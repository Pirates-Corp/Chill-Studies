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
    Box,
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

  const handleSubmit = (e,props,startTime,score) => {
    e.preventDefault()
    score*= 2
    let time = Math.round(((Date.now() - startTime)/1000)/60)
    time = time >= 9 ? 9 : time
    console.log("score"+score)
    console.log("time"+time)

    props.history.push( '/ls/asvs')
}



export default function Style (props) {
    const classes = useStyles()

    const ls =  LearningStyles.find((ls) => props.match.params.ls_type === ls.type)

    return(
        <div>
            <AppBar position="relative">
                <Toolbar>
                  <Typography variant="h6" color="inherit" noWrap>
                      { ls.type.toUpperCase() }
                  </Typography>
                </Toolbar>
            </AppBar>    
            <Container maxWidth="md">
                <Box justifyContent="center" alignItems="center">
                    <List >
                        <ListItem>
                            <Card>
                                <CardContent>
                                    {ls.type.charAt(0)}
                                </CardContent>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card>
                                <CardContent>
                                {ls.type.charAt(1)}
                                </CardContent>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card>
                                <CardContent>
                                {ls.type.charAt(2)}
                                </CardContent>
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card>
                                <CardContent>
                                {ls.type.charAt(3)}
                                </CardContent>
                            </Card>
                        </ListItem>
                    </List>
                </Box>
            </Container>
        </div>
    )
}
