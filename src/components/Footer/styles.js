import styled from 'styled-components';

export const Container = styled.footer`
    height: 16vh;
    background-image: linear-gradient(0deg, #bfb2ed, #9480d9);
    width: 100vw;
    color: #FFF;

    

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 35px;

    
    position: absolute;
    left: 0;
    bottom: 0;

    @media(max-width: 595px) {
        display: none;
    }
`;