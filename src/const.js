const $ = (value) => document.querySelector(value)
const $All = (value) => document.querySelectorAll(value)

const $form = $('form')

const $pokemonDOM = {
  name: $('#pokemon-name'),
  img: $('#pokemon-img'),
  type1: $('#type-1'),
  type2: $('#type-2'),
  height: $('#height'),
  weight: $('#weight'),
  hp: $All('.hp'),
  atk: $All('.atack'),
  def: $All('.defense'),
  spAtk: $All('.sp-atk'),
  spDef: $All('.sp-def'),
  speed: $All('.speed')
}

const typesColors = {
  bug: '#92C12A',
  dark: '#5A5265',
  dragon: '#036DC3',
  electric: '#F4D339',
  fairy: '#EC90E7',
  fighting: '#CE3E6A',
  fire: '#FE9D53',
  flying: '#8FAADF',
  ghost: '#5169AE',
  grass: '#62BC5A',
  ground: '#D97942',
  ice: '#74CFC0',
  normal: '#929AA2',
  poison: '#AA6AC9',
  psychic: '#F97279',
  rock: '#C6B88C',
  steel: '#5A8EA2',
  water: '#4E91D6'
}

export { typesColors, $pokemonDOM, $form, $, $All }
