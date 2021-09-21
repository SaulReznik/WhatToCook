import { IRecipe } from "store/types";

const addNewRecipe = (recipe: IRecipe) => ({
    type: 'ADD_NEW_RECIPE',
    recipe
});

export default {
    addNewRecipe
}