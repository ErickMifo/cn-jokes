import React, {useState, useEffect} from 'react';
import instance from '../../axios/axios';

import { Container, useStyles } from './styles';

import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core';

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

        <Card className={classes.root}>
        <CardContent>
        <Typography className={classes.title}>
          {joke === undefined ? `No quote with id = ${id}` :  joke}
         </Typography>
        </CardContent>
        </Card>




    
        </Container>
    )
}

export default Specific