export const STORAGE_KEY = 'recipes.list';

export function getRecipeById(id) {
    const list = getRecipesList();
    const result = list.find(item => item.id == id);
    return result;
}

export function getRecipesList() {
    const data = localStorage.getItem(STORAGE_KEY);
    if(data == null) return [];
    return JSON.parse(data);
}

export function setRecipesList(list) {
    const data = JSON.stringify(list);
    localStorage.setItem(STORAGE_KEY, data);
}

export function addRecipe(recipe) {
    const list = getRecipesList();
    list.push(recipe);
    setRecipesList(list);
}

export function deleteRecipeById(id) {
    const list = getRecipesList();
    const newList = list.filter(r => r.id != id);
    setRecipesList(newList);
}