export default (filter, products, recipes) => {
    if (filter === "all") {
        return recipes;
    } else if (filter === "available products") {
        //Creating object where the keys will be the names of products
        //And the values are the product objects
        const productsObj = products.reduce((currObj, item) => {
            currObj[item.name] = item;
            return currObj;
        }, {});

        //Here we will filter all our recipes by available products
        const result = recipes.filter((recipe) => {
            let result = true; //true until proven false

            //Loop over ingredients of each recipe
            recipe.ingredients.forEach(item => {
                //Checking is ingredient exist in products or not
                const lookup = productsObj[item.name] || false;
                //After that checking our ingredient has enough amount of items or not
                const quantityEnough = lookup
                    ? parseInt(lookup.amount) >= parseInt(item.amount)
                    : false;
                //If in the end it ends up with false it means that we don't have enogh ingredients
                if (!quantityEnough) {
                    result = false;
                    return;
                }
            })
            return result;
        });
        return result
    }
}