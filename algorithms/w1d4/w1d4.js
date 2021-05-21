// Functions in JavaScript
// What is a function? A series of steps to solve a problem.

// Rules for naming variables/functions
// Cannot begin with a numeric literal
// No hypens
// No spaces

// Template Literal Notation
function greeting(timeOfDay, yourName) {
  console.log(`Good ${timeOfDay} ${yourName}, how are you?`)
}

greeting("morning", "Narciso")

// DRY!!! KEEP YOUR CODE DRY
// DON'T REPEAT YOURSELF

var num = 25

function doubler(inputNum) {
  console.log(inputNum *= 2)
  return inputNum *= 2
}

var result = doubler(5)
// What's the difference between return and console.log?

console.log(num)

var myArr = [1, -3, 5, -8, 0]

function countPositives(arr) {
  var count = 0
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > 0) {
      count++
    }
  }
  return count
}

countPositives(myArr)
