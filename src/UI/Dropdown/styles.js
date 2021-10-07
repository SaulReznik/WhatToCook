import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    dropdownBtn: {
        height: 25,
        width: 200,
        textAlign: "left",
    },
    
    _dropdownItems: {
        position: "absolute",
    },
    
    dropdownItem: {
        height: "inherit",
        paddingLeft: 5, 
        textAlign: "left",
        zIndex: 50,
    }
});

export default useStyles;