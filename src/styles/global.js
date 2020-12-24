import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        background: #edebf5;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }
 

    a  {
    text-decoration: none;
}

    a:hover {
     text-decoration:none; 
     cursor:pointer;  
}
  

`