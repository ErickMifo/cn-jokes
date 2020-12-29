import React from 'react';

import { useStyles } from '../Joke/styles';

import {  Card, CardContent, Typography } from '@material-ui/core';

function JokeCard({ content })  {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardContent >
        <Typography  className={classes.title}>
            {content}
        </Typography>
        </CardContent>
        </Card>
    )
}

export default JokeCard;

