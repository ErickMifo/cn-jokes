import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;

    }

    html {
    position: relative;
    min-height: 100%;
    overflow-x: hidden;
}


    body {
        background: #edebf5;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
        margin: 0 0 16vh;

    }
 

    a  {
    text-decoration: none;
    color: #FFF;
}

    a:hover {
     text-decoration:none; 
     cursor:pointer;  
}
  

`