import { init } from "./init.esm.js";

function onLoad() {
  console.log("loaded");
  init();
}

document.addEventListener("DOMContentLoaded", onLoad);
