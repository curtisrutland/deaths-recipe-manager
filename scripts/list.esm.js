import { getRecipesList, getRecipeById, deleteRecipeById } from "./storage.esm.js";

function onLoad() {
  const recipeList = getRecipesList();
  displayRecipeList(recipeList);
}

function displayRecipeList(recipes) {
  const list = document.getElementById("list");
  for (const recipe of recipes) {
    const el = cloneTemplate();
    el.querySelector(".recipe-title").innerText = recipe.title;
    el.querySelector(".recipe-description").innerText = recipe.description;
    const link = el.querySelector(".recipe-link");
    link.setAttribute("href", `${link.getAttribute("href")}?id=${recipe.id}`);
    list.append(el);
    const button = el.querySelector(".delete");
    button.dataset.recipeId = recipe.id;
    button.addEventListener("click", handleButtonClick);
  }
}

function clearList() {
    document.getElementById("list").innerHTML = "";
}

function cloneTemplate() {
  const templateEl = document.getElementById("template");
  const copy = templateEl.cloneNode(true);
  copy.removeAttribute("id");
  copy.setAttribute("style", "");
  return copy;
}

function handleButtonClick(e) {
  e.preventDefault();
  const recipeId = e.target.dataset.recipeId;
  const title = getRecipeById(recipeId).title;
  if (confirm(`Are you sure you want to delete the recipe titled "${title}"?`)) {
    deleteRecipeById(recipeId);
    clearList();
    displayRecipeList(getRecipesList());
  }
}

document.addEventListener("DOMContentLoaded", onLoad);
