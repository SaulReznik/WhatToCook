import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    productsWrapper: {
        textAlign: 'center',
        '@global': {
            input: {
                '&[type=number]::-webkit-inner-spin-button,  &[type=number]::-webkit-outer-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0
                }
            }
        }
    },
    enterNewProductBtn: {
        fontFamily: ['Lexend Deca', 'sans-serif'],
        border: 'none',
        borderRadius: 5,
        margin: 5,
        padding: 10,
        backgroundColor: '#218c74',
        color: '#ffffff',
        fontSize: '1rem',
        '&:active': {
            backgroundColor: '#218c74',
            border: 'none'
        },
        '&:hover': {
            backgroundColor: '#176251'
        }
    },
    inputsContainer: {
        width: '100%',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1ccc0',
        '& *': {
            height: 40,
            boxSizing: 'border-box'
        },
        '& input': {
            backgroundColor: 'white',
            border: 'none',
            fontFamily: ['Lexend Deca', 'sans-serif']
        },
        '& input::-webkit-outer-spin-button, &input::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none'
        }
    },
    productInput: {
        width: '40%',
        height: 40,
        padding: 5,
        borderRadius: [[5, 0, 0, 5]],
        fontSize: '1rem',
        border: [1, 'solid', '#000000'],
        boxSizing: 'border-box',
        fontFamily: ['Lexend Deca', 'sans-serif']
    },
    amountInput: {
        '-moz-appearance': 'textfield',
        width: 70,
        textAlign: 'center',
        fontSize: '1.5rem',
        border: [[1, 'solid', 'black']],
        borderRadius: [[0, 5, 5, 0]],
        boxSizing: 'border-box',
        height: 40,
        fontFamily: ['Lexend Deca', 'sans-serif'],
        borderLeft: 'none'
    },
    submitBtn: {
        display: 'inline-block',
        marginLeft: 30,
        border: 'none',
        borderRadius: 5,
        backgroundColor: '#218c74',
        fontSize: '1rem',
        color: '#ffffff',
        fontFamily: ['Lexend Deca', 'sans-serif']
    },
    productItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: '100%',
        borderBottom: [1, 'solid', '#ddd'],
        boxSizing: 'border-box',
    },
    deleteBtn: {
        margin: [[0, 20]],
        border: 'none',
        borderRadius: 5,
        fontFamily: ['Lexend Deca', 'sans-serif'],
        fontSize: '1rem',
        backgroundColor: '#b33939',
        color: '#ffffff',
        padding: [10, 20],
        '&:hover': {
            backgroundColor: '#8d2121'
        }
    },
    
});

export default useStyles;
