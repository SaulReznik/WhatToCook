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
        }
    },
    inputsContainer: {
        width: '100%',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(255, 175, 1)',
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
        padding: 5,
        borderRadius: [[5, 0, 0, 5]],
        fontSize: '1rem',
        border: 'none',
        boxSizing: 'border-box',
        height: 40,
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
        fontFamily: ['Lexend Deca', 'sans-serif']
    },
    submitBtn: {
        display: 'inline-block',
        marginLeft: 30,
        border: 'none',
        borderRadius: 5,
        backgroundColor: 'rgb(233, 33, 33)',
        fontFamily: ['Lexend Deca', 'sans-serif']
    },
    productItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: '100%',
        margin: [[5, 0]],
        backgroundColor: 'rgb(0, 117, 102)',
        boxSizing: 'border-box'
    },
    deleteBtn: {
        margin: [[0, 20]],
        height: 30,
        border: 'none',
        borderRadius: 5,
        fontFamily: ['Lexend Deca', 'sans-serif']
    }
});

export default useStyles;