export interface IProduct {
  name: string;
  amount: string;
}

export type products = IProduct[];

export interface IRecipe {
  name: string;
  ingredients: products;
  instructions: string;
}

export type recipes = IRecipe[];

// TODO: get rid of this type after deleting inital state
export interface IInitialState {
  products: products;
  recipes: recipes;
}

export interface IProductAmountAction {
  amount: string;
  index: number;
}
