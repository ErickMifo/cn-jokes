import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 16vh;
`

export const useStyles = makeStyles({
    button: {
      marginRight: 20,
    },
  });