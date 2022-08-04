import { $ } from './const.js'
import loaderDisplay from './loaderDisplay.js'
import displaySection from './sectionsDisplay.js'

const $button = $('.back-search')

const backTosearch = () => {
  document.addEventListener('click', e => {
    if (e.target === $button) {
      displaySection(false)
      loaderDisplay(false)
    }
  })
}

export default backTosearch
