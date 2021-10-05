import { IRecipe } from "store/types";

export default (sortByItem: string, recipes: IRecipe[]) => {
    if (sortByItem === 'names') {
        return recipes.sort((a: IRecipe, b: IRecipe) => {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
        });
    }

    return recipes;
}
