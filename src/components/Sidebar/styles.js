import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    sidebar: {
        width: '25%',
        padding: 5,
        backgroundColor: '#33d9b2',
        zIndex: '1',
        textAlign: 'center',
        '@global': {
            a: {
                color: 'inherit',
                textDecoration: 'none'
            }
        }
    },
    '@media screen and (max-width: 720px)': {
        sidebar: {
            width: '100%',
            height: 'max-content',
            padding: [15, 0],
        },
      },
    links: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    linkContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: [1, 'solid', 'black'],
        padding: [10, 0],
        margin: 3
    }
});

export default useStyles;
