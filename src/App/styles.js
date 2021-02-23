import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    '@import': 'url(https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap)',
    button: {
        '&:after': {
            outline: 'none'
        }
    },
    input: {
        '&:focus': {
            outline: 'none'
        }
    },
    App: {
        height: '100vh',
        width: '100%',
        fontFamily: ['Lexend Deca', 'sans-serif'],
        display: 'flex',
        flexDirection: 'row',
    },
    body: {
        backgroundColor: 'rgb(248, 98, 43)',
        height: '100%',
        width: '75%',
        overflowY: 'auto',
        overflowX: 'auto',
        boxSizing: 'border-box'
    }
});

export default useStyles;