import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';


import { Container, useStyles } from './styles';

function Home() {
    const classes = useStyles()
    return(
        <Container>
            
        <Link to={'/random'}>
            <Button className={classes.button} variant="outlined">
                Random Joke
            </Button>
        </Link>

        <Link to={'/multiple'}>
            <Button className={classes.button}  variant="outlined" color="primary">
                Multiple Random Jokes
            </Button>
        </Link>

        <Link to={'/changeName'}>
            <Button variant="outlined" color="secondary">
                Joke with Name Changed
            </Button>
        </Link>
        
        </Container>
    )
}

export default Home