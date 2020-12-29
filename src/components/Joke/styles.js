import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8vh;
    flex: 1 0 auto;
    
`

export const useStyles = makeStyles((theme) => ({
    root: {
      width: '80vw',
      height: 150,
      marginTop: 20,
      marginBottom: 20,
    },
    text: {
      fontSize: 12,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    input: {
      marginRight: 20,
      '@media (max-width:480px)': {
        display: 'flex',
      }
    },
    form: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'column'
    },
    button: {
      marginTop: 20,
      justifyContent: 'center',       
    }
  }));