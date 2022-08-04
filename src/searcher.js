import { $All, $form } from './const.js'
import petition from './petition.js'

const $list = $All('.pokemon-searched')
const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

const allPokemonNames = async () => {
  const fullPetition = await petition(url)

  const names = fullPetition.results.map((el) => el.name)

  return names
}

allPokemonNames()

const searcher = async () => {
  const names = await allPokemonNames()

  document.addEventListener('keyup', (e) => {
    if (e.target === $form[0]) {
      if ($form[0].value === '') {
        clearList()
        return
      }

      const newNames = names.filter((el) =>
        el.includes($form[0].value) ? el : null
      )

      let i = 0

      $list.forEach((el) => {
        el.textContent = newNames[i]
        i++
      })
    }
  })
}

const clearList = () => {
  $list.forEach((el) => {
    el.textContent = ''
  })
}

export default searcher
export { $list, clearList }
