export const recipes = (state = [], action: Record<string, string>) => {
  switch (action.type) {
    case 'ADD_NEW_RECIPE':
      return [
        ...state,
        action.recipe,
      ];
    default:
      return state;
  }
};
