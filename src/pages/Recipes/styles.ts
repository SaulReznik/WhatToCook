import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    addRecipeBtn: {
      fontSize: '25',
      fontFamily: ['Lexend Deca', 'sans-serif'],
      border: 'none',
      borderRadius: 10,
      margin: 5,
      padding: 10,
      backgroundColor: 'rgb(233, 33, 33)',
      '&:active': {
        backgroundColor: 'rgb(255, 0, 0)',
        border: 'none'
      },
      '&:hover': {
        cursor: 'pointer'
      }
    }
});

export default useStyles;