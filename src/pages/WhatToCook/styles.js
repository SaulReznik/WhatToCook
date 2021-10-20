import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  filterSortContainer: {
    padding: [10, 0],
    width: '100%',
    border: ['1px', 'solid', 'black'],
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  filterSortItem: {
    display: 'flex',
    flexFlow: 'row'
  }
});

export default useStyles;