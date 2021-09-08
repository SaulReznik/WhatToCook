import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  filterSortContainer: {
    width: '100%',
    border: ['1px', 'solid', 'black'],
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 5
  },
  filterSortItem: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
  },
  
  '@media (max-width: 720px)': {
    filterSortItem: {
      flexFlow: 'column'
    }
  }
});

export default useStyles;
