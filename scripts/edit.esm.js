import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { deleteRecipeById, getRecipeById, addRecipe } from "./storage.esm.js";

let titleEl, descEl, ingredientsEl, stepsEl, formEl;

function onLoad() {
  loadEls();
  bindListeners();
  const recipeId = getRecipeId();
  const recipe = getRecipeById(recipeId);
  if (recipe) {
    setInitialValues(recipe);
  }
}

function loadEls() {
  titleEl = document.getElementById("title");
  descEl = document.getElementById("description");
  ingredientsEl = document.getElementById("ingredients");
  stepsEl = document.getElementById("steps");
  formEl = document.getElementById("recipe-form");
}

function bindListeners() {
  formEl.addEventListener("submit", handleFormSubmit);
  titleEl.addEventListener("input", setPreviewValues);
  descEl.addEventListener("input", setPreviewValues);
  ingredientsEl.addEventListener("input", setPreviewValues);
  stepsEl.addEventListener("input", setPreviewValues);
}

function handleFormSubmit(e) {
  e.stopPropagation();
  e.preventDefault();
  const data = new FormData(e.target);
  const recipe = {
    id: data.get("id"),
    title: data.get("title"),
    description: data.get("description"),
    ingredientsMarkdown: data.get("ingredients"),
    stepsMarkdown: data.get("steps"),
  };
  deleteRecipeById(recipe.id);
  addRecipe(recipe);
  navigation.navigate("/pages/list.html");
}

function setInitialValues({ id, title, description, ingredientsMarkdown, stepsMarkdown }) {
  const titleEl = document.getElementById("title");
  const descriptionEl = document.getElementById("description");
  const ingredientsEl = document.getElementById("ingredients");
  const stepsEl = document.getElementById("steps");
  const idEl = document.getElementById("id");

  titleEl.value = title;
  descriptionEl.value = description;
  ingredientsEl.value = ingredientsMarkdown;
  stepsEl.value = stepsMarkdown;
  idEl.value = id;

  setPreviewValues();
}

function getRecipeId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") ?? "1";
}

function setPreviewValues() {
  console.log("on text change");
  document.getElementById("titlePrev").innerText = titleEl.value;
  document.getElementById("descriptionPrev").innerText = descEl.value;
  document.getElementById("ingredientsPrev").innerHTML = parse(ingredientsEl.value);
  document.getElementById("stepsPrev").innerHTML = parse(stepsEl.value);
}

function parse(val) {
  return DOMPurify.sanitize(marked.parse(val));
}

document.addEventListener("DOMContentLoaded", onLoad);
