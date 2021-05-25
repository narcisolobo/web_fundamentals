// The JavaScript Math Library

// Math.floor, Math.ceil, Math.random

var floor = Math.floor(1.56)
var ceiling = Math.ceil(1.56)
var random = Math.floor(Math.random() * 8) + 1

console.log(`Floor: ${floor}, Ceiling: ${ceiling}, Random: ${random}`)

function d6() {
  var roll = Math.ceil(Math.random() * 6);
  return roll;
}

for (var i = 1; i <= 10000; i++){
  var isGreaterThanSix = false
  var playerRoll = d6();
  if (playerRoll > 6) {
    isGreaterThanSix = true
  }
  // console.log(`The player rolled: ${playerRoll}`);
}

console.log(isGreaterThanSix)