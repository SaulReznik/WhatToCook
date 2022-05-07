import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  dropdownBtn: {
    height: 25,
    width: 200,
    textAlign: 'left',
    marginLeft: 5,
    textTransform: 'capitalize',
    backgroundColor: '#b8c6db',
    backgroundImage: 'linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%)',
    border: [1, 'solid'],
    borderRadius: 20,
  },

  dropdownItemContainer: {
    position: 'absolute',
    width: 200,
    marginLeft: 5,
  },

  dropdownItem: {
    height: 'inherit',
    textAlign: 'left',
    zIndex: 50,
    padding: 5,
    backgroundColor: '#ffffff',
    textTransform: 'capitalize',
    '&:hover': {
      cursor: 'pointer',
      fontWeight: 'bold',
      textDecoration: 'underline',
    },
  },
});

export default useStyles;
