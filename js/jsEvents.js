var header = document.querySelector('#header')
var body = document.querySelector('body')

function headerChangeColor(element) {
  console.log(element)
  header.style.backgroundColor = element.value
}

console.dir(this)

function doAlert() {
  alert('You clicked the button.')
}

function trackMouse(event){
  console.log(event.clientX, event.clientY)
  body.style.backgroundColor = (`rgb(${event.clientX}, ${event.clientY}, 0)`)
}