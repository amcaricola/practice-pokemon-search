import { $ } from './const.js'

const $loader = $('.loader')

const loaderDisplay = (display) => {
  display ? $loader.style.visibility = 'visible' : $loader.style.visibility = 'hidden'
}

export default loaderDisplay
