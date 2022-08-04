import renderPokemon from './renderPokemon.js'
import { clearList } from './searcher.js'

const selector = () => {
  document.addEventListener('click', (e) => {
    if (e.target.matches('.pokemon-searched')) {
      if (e.target.textContent === '') return

      renderPokemon(e.target.textContent)
      clearList()
    }
  })
}

export default selector
