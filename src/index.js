import renderPokemon from "./renderPokemon.js";
import searcher from "./searcher.js";
import selector from "./selector.js";

document.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPokemon();
});

document.addEventListener("DOMContentLoaded", (e) => {
  searcher();
  selector();
});
