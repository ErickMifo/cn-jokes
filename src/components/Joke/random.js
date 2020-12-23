import React, {useState, useEffect} from 'react';
import instance from '../../axios/axios';

import { Container } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      width: 550,
      height: 150,
      marginTop: 20,
      marginBottom: 20,
    },
    text: {
      fontSize: 12,
    },
  });
  

function Joke() {
    const classes = useStyles();


    const[joke, setJoke] = useState('')
    const[count, setCount] = useState(1)
    

    useEffect(() => {
        async function getData() {
            const request = await instance.get('/jokes/random')
              setJoke(request.data.value.joke)
        }
      
        getData()
      
    
      }, [count])

  return (
    <Container>
        <h2> Random Joke </h2>
        <Card className={classes.root}>
        <CardContent>
        <Typography className={classes.title}>
            {joke}
         </Typography>
        </CardContent>
        </Card>

        <Button variant="contained" color="primary" onClick={() => {setCount(count+1)}}>
            Next Joke
        </Button>

    </Container>
  );
}

export default Joke;