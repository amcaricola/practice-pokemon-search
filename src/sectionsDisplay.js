import { $ } from './const.js'

const searcher = $('.searcher')
const displayPokemon = $('.show-pokemon')

const displaySection = (check) => {
  if (check) {
    // console.log('display')
    searcher.style.display = 'none'
    displayPokemon.style.display = 'block'
    return
  }
  // console.log('hidden')
  displayPokemon.style.display = 'none'
  searcher.style.display = 'block'
}

export default displaySection
