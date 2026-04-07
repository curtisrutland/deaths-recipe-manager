import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { getRecipeById } from "./storage.esm.js";

function onLoad() {
  const recipeId = getRecipeId();
  const recipe = getRecipeById(recipeId);
  if (recipe) {
    setValues(recipe.title, recipe.description, recipe.ingredientsMarkdown, recipe.stepsMarkdown);
    const link = document.getElementById("editLink");
    link.setAttribute("href", `${link.getAttribute("href")}?id=${recipeId}`);
  } else {
    setValues("Error", "Couldn't find recipe", "", "");
  }
}

function getRecipeId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") ?? "1";
}

function setValues(title, desc, ingredients, steps) {
  const titleEl = document.getElementById("title");
  const descriptionEl = document.getElementById("description");
  const ingredientsEl = document.getElementById("ingredients");
  const stepsEl = document.getElementById("steps");

  titleEl.innerText = title;
  descriptionEl.innerText = desc;
  ingredientsEl.innerHTML = DOMPurify.sanitize(marked.parse(ingredients));
  stepsEl.innerHTML = DOMPurify.sanitize(marked.parse(steps));
}

document.addEventListener("DOMContentLoaded", onLoad);
