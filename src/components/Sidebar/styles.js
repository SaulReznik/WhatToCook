import { createUseStyle, createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    sidebar: {
        height: '100%',
        width: '25%',
        backgroundColor: 'rgb(250, 140, 100)',
        textAlign: 'center',
        '@global': {
            a: {
                color: 'inherit',
                textDecoration: 'none'
            }
        }
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
        height: 50,
        border: [[1, 'solid', 'black']]
    }
});

export default useStyles;