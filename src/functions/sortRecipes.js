export default (sortByItem, recipes) => {
    if (sortByItem === 'names') {
        return recipes.sort((a, b) => {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
        });
    }
}