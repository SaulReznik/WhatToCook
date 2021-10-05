import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    '@import': 'url(https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap)',
    app: {
        height: '100vh',
        width: '100%',
        fontFamily: ['Lexend Deca', 'sans-serif'],
        display: 'flex',
        flexDirection: 'row',
        '@global': {
            button: {
                '&:after': {
                    outline: 'none'
                },
                '&:hover': {
                    cursor: 'pointer'
                }
            },
            input: {
                '&:focus': {
                    outline: 'none'
                }
            },
        }
    },
    body: {
        width: '75%',
        padding: 5,
        textAlign: 'center',
        overflow: 'auto',
        boxSizing: 'border-box'
    },
    '@media screen and (max-width: 720px)': {
        app: {
            display: 'grid',
        },
        body: {
            width: '100%'
        }
      },
});

export default useStyles;
