import { IInitialState } from "./types";

// TODO: Get rid of intial state
const initialState: IInitialState = {
    products: [
        { name: "Potato", amount: '5' },
        { name: "Butter", amount: "1000", },
        { name: "Salt", amount: "2000" },
        { name: "Egg", amount: "10" },
        { name: "Tomato", amount: '5' },
        { name: "Sour Milk", amount: '5' }
    ],
    recipes: [
        {
            name: 'Mashed potatoes',
            ingredients: [
                {
                    name: 'Potato',
                    amount: '5',
                },
                {
                    name: 'Butter',
                    amount: '30',
                },
                {
                    name: 'Salt',
                    amount: '15'
                }
            ],
            instructions: 'Some Text',
        },
        {
            name: 'Tomato Omlet',
            ingredients: [
                { name: "Tomato", amount: "1", },
                { name: "Egg", amount: "1" },
                { name: "Salt", amount: "10" },
                { name: "Butter", amount: "40" }
            ],
            instructions: "Some text",
        },
        {
            name: 'a',
            ingredients: [
                { name: "Tomato", amount: "1", },
                { name: "Egg", amount: "1" },
                { name: "Salt", amount: "10" },
                { name: "Butter", amount: "40" }
            ],
            instructions: "Some text",
        }
    ]
};

export default initialState;
