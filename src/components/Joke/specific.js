import React, {useState, useEffect} from 'react';
import instance from '../../axios/axios';

import { Container, useStyles } from './styles';

import { Button, TextField } from '@material-ui/core';
import JokeCard from '../card';

function Specific() {
  const classes = useStyles();



  const [joke, setJoke] = useState('')
  const [storeid, setStoreid] = useState('')
  const [id, setId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setId(storeid)
  }

    useEffect(() => {
        async function getData() {

            const requestJoke = await instance.get(`jokes/${id}?escape=javascript`)
              setJoke(requestJoke.data.value.joke)

        }

        getData()
      }, [id])
      
    return (
        <Container>
 
      <h2>Specific Joke</h2>

    <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">

      <TextField 
      label='Number higher than 0'
      autoComplete='off' 
      onChange={(e) => {setStoreid(e.target.value)}}
      className={classes.input} 
      id="standard-basic" />

      <Button type="submit" className={classes.button} variant="contained"> Confirm </Button>

    </form>

    {id === '' ? null 
    
    :

         <JokeCard content={joke === undefined ? `No quote with id = ${id}` :  joke} />
     

    }

    
        </Container>
    )
}

export default Specific