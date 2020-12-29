import React, {useState, useEffect} from 'react';
import instance from '../../axios/axios';

import { Container, useStyles } from './styles';


import { FormControl, MenuItem, Select } from '@material-ui/core';
import JokeCard from '../card';


function Multiple() {
    const classes = useStyles();

    const [number, setNumber] = useState(0);
    const [joke, setJoke] = useState([''])

    const handleChange = (event) => {
        setNumber(event.target.value);
      };

    useEffect(() => {
        async function getData() {
            const request = await instance.get(`/jokes/random/${number}?escape=javascript`)
              setJoke(request.data.value)
        }

        getData()
      }, [number])

    return (
        <Container>

<h2> Random Multiple Joke </h2>

<FormControl className={classes.formControl}>
        <Select
          value={number}
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>



{joke !== [''] ? 
    joke.map((item, index) => {
        return(
    <JokeCard content={item.joke} key = {index}/>
    )}) : null
}
    
            
        </Container>
    )
}

export default Multiple