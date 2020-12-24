import styled from 'styled-components';

export const Container = styled.div`
    height: 12vh;
    background-image: linear-gradient(0deg, #bfb2ed, #9480d9);
    width: 100vw;
    color: #FFF;

    display: flex;
    align-items: center;
    justify-content: center;
    
    h1 {
        color: white;
        opacity: 0.8;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }

`;