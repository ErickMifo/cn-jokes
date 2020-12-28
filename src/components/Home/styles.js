import styled from 'styled-components';



export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 12vh;

    @media(max-width: 800px) {
        flex-direction: column;
        align-items: center;

        button{ 
            margin-bottom: 20px;
        }
    }
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 12vh;
    
    @media(max-width: 425px) {
        margin-top: 4vh;
        padding: 16px;

        h2{
            margin-right: 12px;
        }

    }
`
