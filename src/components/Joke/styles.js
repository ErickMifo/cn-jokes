import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8vh;
`

export const useStyles = makeStyles((theme) => ({
    root: {
      width: 550,
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
  }));