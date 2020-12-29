import React, {useState, useEffect} from 'react';
import instance from '../../axios/axios';

import { Container } from './styles';


import { Button } from '@material-ui/core';
import JokeCard from '../card';



function Random() {



    const[joke, setJoke] = useState('')
    const[count, setCount] = useState(1)
    

    useEffect(() => {
        async function getData() {
            const request = await instance.get('/jokes/random?escape=javascript')
              setJoke(request.data.value.joke)
        }
      
        getData()
      
    
      }, [count])

  return (
    <Container>
        <h2> Random Joke </h2>
    
    <JokeCard content={joke} />

        <Button variant="contained" color="primary" onClick={() => {setCount(count+1)}}>
            Next Joke
        </Button>

    </Container>
  );
}

export default Random;