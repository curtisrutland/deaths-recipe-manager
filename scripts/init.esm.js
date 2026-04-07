import { getRecipesList, setRecipesList } from "./storage.esm.js";

const defaultData = [
  {
    id: "1",
    title: "Chili",
    description: "homemade chili",
    ingredientsMarkdown:
      "- 1lb coarse ground beef, ideally 80%/20%\n- 1lb ground pork\n- 1lb ground venison\n    - can substitute an additional lb of ground beef\n- 8oz tomato sauce\n- 16oz cooked pinto beans\n    - if canned, rinse thoroughly, discard canning liquid\n- onion (to taste)\n- garlic, minced (to taste)\n- chili paste\n    - ancho\n    - guajillo\n    - arbol\n    - habanero\n    - serrano\n- season to taste:\n    - cumin\n    - paprika\n    - salt\n    - pepper\n    - cayenne pepper",
    stepsMarkdown:
      "- create chili paste\n    - deseed and rehydrate dried chilis, reserve water\n    - rinse and slice fresh peppers, deseed if desired\n    - blend together, adding chili water by teaspoon to achieve desired consisstency. best results with magic bullet blender\n- brown all meats together in a large pot\n- once browned, add all additional ingredients and stir\n- add liquid (reserved chili water, stock, etc...) to just cover the ingredients\n- bring to a boil, then simmer for 2-3 hours, covered. Stir regularly, add additional liquid if necessary to prevent scorching.\n- When ready, if necessary, remove lid and continue reducing until desired consistency is reached.",
  },
];

export function init() {
    if(getRecipesList().length === 0) {
        console.log("setting default recipe data");
        setRecipesList(defaultData);
    }
}