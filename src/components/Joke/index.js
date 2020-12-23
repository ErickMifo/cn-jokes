import React from 'react'
import { Container, TextArea } from './styles';

function Joke() {
  return (
    <Container>
        <h2> Joke </h2>
        <TextArea>
        <p> TextoTexto TextoTexto TextoTexto TextoTexto TextoTexto TextoTexto TextoTexto TextoTexto </p> 
        </TextArea>
        <button> Next joke </button>
    </Container>
  );
}

export default Joke;