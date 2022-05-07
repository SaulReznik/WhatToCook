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
      border: 'none',
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#8d2121',
    },
  },
  btnRecipes: {
    color: '#ffffff',
    border: 'none',
    margin: 5,
    padding: 10,
    fontSize: '1rem',
    fontFamily: ['Lexend Deca', 'sans-serif'],
    borderRadius: 5,
    backgroundColor: '#218c74',
    '&:hover': {
      backgroundColor: '#16604f',
    },
  },
  addRecipe: {
    width: '50%',
    minWidth: 255,
    border: [1, 'solid'],
    borderRadius: 10,
    margin: [15, 'auto', 30],
    padding: 10,
    textAlign: 'start',
    boxShadow: [4, 4, 8, 0, 'rgba(34, 60, 80, 0.2)'],
    '& button': {
      width: '100%',
      margin: 0,
      marginTop: 10,
    },
    '& input': {
      display: 'block',
      width: '100%',
      marginTop: 3,
      marginBottom: 5,
      boxSizing: 'border-box',
      padding: 5,
    },
    '& textarea': {
      marginTop: 3,
      marginBottom: 5,
      width: '100%',
      boxSizing: 'border-box',
    },
  },
  ingredients: {
    '& input': {
      width: '80%',
    },
    '& [type="number"]': {
      width: '20%',
    },
    '& button': {
      float: 'right',
      marginTop: 0,
      marginBottom: 5,
      border: 'none',
      borderRadius: 5,
      backgroundColor: '#218c74',
      color: '#ffffff',
      padding: 5,
      fontFamily: ['Lexend Deca', 'sans-serif'],
      '&:hover': {
        backgroundColor: '#16604f',
      },
    },
  },
  ingredientsContent: {
    display: 'flex',
  },
  recipeList: {
    textAlign: 'start',
  },
});

export default useStyles;
