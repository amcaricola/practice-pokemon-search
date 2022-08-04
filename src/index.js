import backTosearch from './backToSearch.js'
import renderPokemon from './renderPokemon.js'
import searcher from './searcher.js'
import selector from './selector.js'
import { $form } from './const.js'

document.addEventListener('submit', (e) => {
  e.preventDefault()
  renderPokemon($form[0].value)
})

document.addEventListener('DOMContentLoaded', (e) => {
  searcher()
  selector()
  backTosearch()
})
