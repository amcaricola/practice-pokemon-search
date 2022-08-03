import { $All, $form } from "./const.js";
import petition from "./petition.js";

let $list = $All(".pokemon-searched"),
  url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

const allPokemonNames = async () => {
  let fullPetition = await petition(url);

  let names = fullPetition.results.map((el) => el.name);

  return names;
};

allPokemonNames();

const searcher = async () => {
  let names = await allPokemonNames();

  document.addEventListener("keyup", (e) => {
    if (e.target === $form[0]) {
      if ($form[0].value != "") {
        let newNames = names.filter((el) =>
          el.includes($form[0].value) ? el : null
        );

        //   console.log(newNames);

        let i = 0;
        $list.forEach((el) => {
          el.textContent = newNames[i];
          i++;
        });
      } else {
        $list.forEach((el) => {
          el.textContent = "";
        });
      }
    }
  });
};

export default searcher;
export { $list };
