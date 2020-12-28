import React, {useState, useEffect} from 'react';
import instance from '../../axios/axios';


import { Container, DataContainer } from './styles';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';



function Home() {

    const [numofjokes,setNumofjokes] = useState(0)
    const [categories, setCategories] = useState([])

    
    useEffect(() => {

        async function getData() {
    const requestCategories = await instance.get(`categories`)
    setCategories(requestCategories.data.value)

    const requestNum = await instance.get(`jokes/count`)
    setNumofjokes(requestNum.data.value)

    }

    getData()

    }, [])



    return(
<>
        <DataContainer>
    
        <h2> There are {numofjokes} jokes.</h2>

<div>

        <h2>Categories:</h2>

    {categories.map((item, index) => {


  
  return(

    <h3 key = {index}> {item} </h3>

    )})}

</div>

    </DataContainer>

        <Container>



            
        <Link to={'/random'}>
            <Button  variant="outlined">
                Random Joke
            </Button>
        </Link>

        <Link to={'/multiple'}>
            <Button   variant="outlined" color="primary">
                Multiple Random Jokes
            </Button>
        </Link>

        <Link to={'/changeName'}>
            <Button  variant="outlined" color="secondary">
                Joke with Name Changed
            </Button>
        </Link>

        <Link to={'/specific'}>
            <Button variant="outlined">
                Specfic Joke
            </Button>
        </Link>
        
        </Container>
</>
    )
}

export default Home