import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    popupWrapper: {
        height: '100vh',
        width: '100vw',
        top: 0,
        left: 0,
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    popupContainer: {
        height: 500,
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    }
});

export default useStyles;