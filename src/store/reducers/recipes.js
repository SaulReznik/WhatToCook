export const recipes = ( state = [], action ) => {
    switch (action.type) {
        case 'ADD_NEW_RECIPE':
            return [
                ...state,
                action.recipe
            ];
        default: 
            return state;
    }
}