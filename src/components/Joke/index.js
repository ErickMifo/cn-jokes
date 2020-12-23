import React from 'react'
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

  return (
    <Container>
        <h2> Joke </h2>
        <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.title}>
         TextoTexto TextoTexto TextoTexto  extoTexto TextoTexto TextoTexto TTextoTexto TextoTexto TextoTexto TextoTexto TextoTexto 
         </Typography>
        </CardContent>
        </Card>

        <Button variant="contained" color="primary">
        Primary
        </Button>

    </Container>
  );
}

export default Joke;