var carousel = document.querySelector('#carousel')
var itemCount = 0
var items = document.querySelector('#items')

items.innerHTML = itemCount

function next() {
  carousel.src = './images/pixel-ninjas-2.png'
}

function prev() {
  carousel.src = './images/stonepunk.png'
}

function increment() {
  itemCount++
  items.innerHTML = itemCount
}

function linux() {
  alert('This game is supported on Linux.')
}