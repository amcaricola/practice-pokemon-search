import petition from './petition.js'
import { $pokemonDOM, typesColors, $form } from './const.js'
import displaySection from './sectionsDisplay.js'
import loaderDisplay from './loaderDisplay.js'

// peticion de todos los pokemones

const search = async (searchText) => {
  loaderDisplay(true)

  let name
  searchText === '' ? name = 'pikachu' : name = searchText
  const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`

  const search = await petition(url)

  return search
}

const renderPokemon = async (pokemonName) => {
  try {
    const {
      name,
      img,
      type1,
      type2,
      height,
      weight,
      hp,
      atk,
      def,
      spAtk,
      spDef,
      speed
    } = $pokemonDOM

    const pokemon = await search(pokemonName)

    // console.log(pokemon)

    name.textContent = `N°${pokemon.id} - ${pokemon.name}`

    img.src = pokemon.sprites.other['official-artwork'].front_default

    type1.textContent = pokemon.types[0].type.name.toUpperCase()
    type1.style.backgroundColor = typesColors[pokemon.types[0].type.name]

    if (pokemon.types[1]) {
      type2.textContent = pokemon.types[1].type.name.toUpperCase()
      type2.style.backgroundColor = typesColors[pokemon.types[1].type.name]
      type2.style.visibility = 'visible'
    } else {
      type2.style.visibility = 'hidden'
    }

    height.textContent = ` ${pokemon.height / 10} M`
    weight.textContent = ` ${pokemon.weight} Kg`

    hp[0].textContent = pokemon.stats[0].base_stat
    hp[1].style.width = `${percent(pokemon.stats[0].base_stat)}%`

    atk[0].textContent = pokemon.stats[1].base_stat
    atk[1].style.width = `${percent(pokemon.stats[1].base_stat)}%`

    def[0].textContent = pokemon.stats[2].base_stat
    def[1].style.width = `${percent(pokemon.stats[2].base_stat)}%`

    spAtk[0].textContent = pokemon.stats[3].base_stat
    spAtk[1].style.width = `${percent(pokemon.stats[3].base_stat)}%`

    spDef[0].textContent = pokemon.stats[4].base_stat
    spDef[1].style.width = `${percent(pokemon.stats[4].base_stat)}%`

    speed[0].textContent = pokemon.stats[5].base_stat
    speed[1].style.width = `${percent(pokemon.stats[5].base_stat)}%`

    $form[0].value = ''
  } catch (err) {
    console.log(err)
  } finally {
    setTimeout(() => {
      displaySection(true)
    }, 500)
  }
}

const percent = (value) => {
  return (value * 100) / 255
}

export default renderPokemon
