import { $All, $form } from "./const.js";
import renderPokemon from "./renderPokemon.js";
import { $list } from "./searcher.js";

const selector = () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".pokemon-searched")) {
      if (e.target.textContent === "") return;

      $form[0].value = e.target.textContent;
      renderPokemon();
      $list.forEach((el) => {
        el.textContent = "";
      });
    }
  });
};

export default selector;
