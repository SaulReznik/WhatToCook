import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    addRecipeBtn: {
      fontFamily: ['Lexend Deca', 'sans-serif'],
      border: 'none',
      borderRadius: 5,
      margin: 5,
      padding: 10,
      backgroundColor: '#b33939',
      color: '#ffffff',
      fontSize: '1rem',
      '&:active': {
        backgroundColor: 'rgb(255, 0, 0)',
        border: 'none'
      },
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#8d2121',
      },
    }
});

export default useStyles;
