import React, {useState, useEffect} from 'react'
import { Typography, 
    makeStyles, 
    Button,
    CardContent, 
    CardMedia, 
    Card,
    List,
    ListItem,
    CardActionArea,
    CardActions,
    Divider,
   Container } from '@material-ui/core'
   import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';


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
    handleButton :{
      margin: theme.spacing(4),
      float:'right'
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
    let time = ((Date.now() - startTime)/1000)/60

    score*=2
    score = score >= 9 ? 9 : score
    time = time >= 9 ? 9 : time
    time = Math.round(time)
    console.log("score"+score)
    console.log("time"+time)
    props.history.push(  '/course/'+ props.match.params.course +'/summary')
}

export default function Visual (props) {
        const classes = useStyles()

        const startTime = Date.now()

        const [inheritance, setInheritance] = React.useState(true)
        const [single, setSingle] = React.useState(true)
        const [multi, setMulti] = React.useState(true)
        const [hybrid, setHybrid] = React.useState(true)
        const [hierarchical, setHierarchical] = React.useState(true)

        const handleInheritance = () => {
          setInheritance(false)
        }

        const handleSingle = () => {
          setSingle(false)
        }

        const handleMulti = () => {
          setMulti(false)
        }

        const handleHybrid = () => {
          setHybrid(false)
        }

        const handleHierarchical = () => {
          setHierarchical(false)
        }

        return(
        <Container>
        <form  autoComplete="off" noValidate>
            <List >
                <ListItem>
                    <Typography variant='h5'>
                        Inheritance
                    </Typography>
                </ListItem> 
                <ListItem>
                  <Card className={classes.root} raised={inheritance}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        // height="250"
                        image="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Inheritance-types-java.png"
                        title="Inheritance"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Inheritance
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Inheritance is a widely used OOPs concept which is used to implemet abstraction and coupling in our application. Also, it will be used full if we work with a team or a group of people.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.handleButton} >
                      <Button size="small" color={inheritance ? 'secondary':'primary'} onClick={handleInheritance }>
                        <CheckCircleSharpIcon/>
                      </Button>
                    </CardActions>
                  </Card>
                </ListItem> 
                <ListItem>
                  <ListItem>
                    <Card className={classes.root} raised={single}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="500"
                          image="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Single-Inheritance-144x180.png"
                          title="Single Inheritance"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Single Inheritance
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          In single inheritance, one class inherits the properties of another. It enables a derived class to inherit the properties and behavior from a single parent class. This will in turn enable code reusability as well as add new features to the existing code.

                          Here, Class A is your parent class and Class B is your child class which inherits the properties and behavior of the parent class.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.handleButton} >
                      <Button size="small" color={single ? 'secondary':'primary'} onClick={handleSingle }>
                        <CheckCircleSharpIcon/>
                      </Button>
                    </CardActions>
                    </Card>
                  </ListItem>
                  <ListItem>
                    <Card className={classes.root} raised={multi}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="500"
                          image="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Multilevel-Inheritance-204x300.png"
                          title=" Multilevel Inheritance"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Multilevel Inheritance
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            When a class is derived from a class which is also derived from another class, i.e. a class having more than one parent class but at different levels, such type of inheritance is called Multilevel Inheritance.
                            If we talk about the flowchart, class B inherits the properties and behavior of class A and class C inherits the properties of class B. Here A is the parent class for B and class B is the parent class for C. So in this case class C implicitly inherits the properties and methods of class A along with Class B. That’s what is multilevel inheritance.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.handleButton} >
                      <Button size="small" color={multi ? 'secondary':'primary'} onClick={handleMulti }>
                        <CheckCircleSharpIcon/>
                      </Button>
                    </CardActions>
                    </Card>
                  </ListItem>
                </ListItem>
                <ListItem>
                <ListItem>
                    <Card className={classes.root} raised={hybrid}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          // height="500"
                          image="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Hybrid-Inheritance-186x180.png"
                          title="Hybrid Inheritance"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Hybrid Inheritance
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Hybrid inheritance is a combination of multiple inheritance and multilevel inheritance. Since multiple inheritance is not supported in Java as it leads to ambiguity, so this type of inheritance can only be achieved through the use of the interfaces. 
                            If we talk about the flowchart, class A is a parent class for class B and C, whereas Class B and C are the parent class of D which is the only child class
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.handleButton} >
                      <Button size="small" color={hybrid ? 'secondary':'primary'} onClick={handleHybrid }>
                        <CheckCircleSharpIcon/>
                      </Button>
                    </CardActions>
                    </Card>
                  </ListItem>
                  <ListItem >
                    <Card className={classes.root} raised={hierarchical}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          // height="500"
                          image="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Hierarchical-Inheritance-300x178.png"
                          title="Hierarchical  Inheritance"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Hierarchical  Inheritance
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            When a class has more than one child classes (sub classes) o r in other words, more than one child classes have the same parent class, then such kind of inheritance is known as hierarchical.
                            If we talk about the flowchart, Class B and C are the child classes which are inheriting from the parent class i.e Class A.
                            Let’s see the syntax for hierarchical inheritance in Java:
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.handleButton} >
                      <Button size="small" color={hierarchical ? 'secondary':'primary'} onClick={handleHierarchical }>
                        <CheckCircleSharpIcon/>
                      </Button>
                    </CardActions>
                    </Card>
                  </ListItem>
                </ListItem>
                <Divider variant="middle" />
            </List>
            <br/>
            <Button variant="contained" color="primary" className={classes.handleButton}  onClick={(e)=>{ 
                let score = 0;

                inheritance ? score : score++
                single ? score : score++
                multi ? score : score++
                hybrid ? score : score++
                hierarchical ? score : score++

               
                handleSubmit(e,props,startTime,score) 
                }} 

            >
                Next
            </Button>
        </form>
        </Container>
    )
}
