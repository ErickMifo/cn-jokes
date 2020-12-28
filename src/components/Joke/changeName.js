import React, {useState, useEffect} from 'react';
import instance from '../../axios/axios';

import { Container, useStyles } from './styles';

import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core';


function ChangeName() {
    const classes = useStyles();

    const [joke, setJoke] = useState('');

    const [storefirstName, setStorefirstName] = useState('');
    const [firstName, setFirstName] = useState('');

    const [storelastName, setStorelastName] = useState('');
    const [lastName, setLastName] = useState('');

    const[count, setCount] = useState(1);


    const handleSubmit = (e) => {
        e.preventDefault()
        setFirstName(storefirstName)
        setLastName(storelastName)
    }

    useEffect(() => {
        async function getData() {
            const request = await instance.get(`jokes/random?escape=javascript&firstName=${firstName}&lastName=${lastName}`)
              setJoke(request.data.value.joke)
        }

        getData()
      }, [firstName, lastName, count])

    return (

    <Container>
        <h2> Joke with name Changed </h2>

        <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
            
            <div>

                <TextField 
                inputProps={{ "data-testid": "input-firstName" }}
                className={classes.input}
                onChange={(e) => {setStorefirstName(e.target.value)}} 
                id="standard-basic" 
                label="First Name" />

                <TextField 
                inputProps={{ "data-testid": "input-lastName"}}
                onChange={(e) => {setStorelastName(e.target.value)}} 
                id="standard-basic" 
                label="Last Name" />
                
            </div>

                <Button 
                data-testid="btn"
                type="submit" 
                className={classes.button} 
                variant="contained"> 
                    Confirm 
                </Button>

        </form>

{firstName || lastName !== '' ?

<>
        <Card className={classes.root}>
        <CardContent>
        <Typography
        className={classes.title}>
            {joke}
         </Typography>
        </CardContent>
        </Card>

        <Button variant="contained" color="primary" onClick={() => {setCount(count+1)}}>
            Next Joke
        </Button>
</>
            :
        null
}

    </Container>

    )
}

export default ChangeName