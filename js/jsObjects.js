// Primitive Datatypes: Numbers, Strings, Booleans, Null, and undefined

// JavaScript Objects
// Reference Datatype
// Objects, Arrays

// With primitive datatypes, we manipulate the value itself.
// With reference datatypes, we manipulate the reference.

var myNum = 30
//   myNum
//  -------
//  | 25  |
//  -------

var myArray = [1, 2, 3, 4, 5, 8]
var yourArray = myArray
myArray[0] = 0
console.log(`myArray: ${myArray}, yourArray: ${yourArray}`)
//   myArray
//  -------
//  | ptr  | ----> [1, 2, 3, 4, 5, 8]
//  -------]

//   yourArray
//  -------
//  | ptr  | 
//  -------

var yourNum = myNum

myNum = 50
console.log(`myNum: ${myNum}, yourNum: ${yourNum}`)

// What is a JS Object?

var myCar = {
  make: "Jeep",
  model: "Wrangler",
  year: 2020,
  gas: 12,
  drive: function(miles) {
    console.log("Driving...")
    this.gas -= miles/20
  },
  showStats: function() {
    console.log(`Year, make and model: ${this.year} ${this.make} ${this.model}, Gas: ${this.gas}`)
  }
}

function createCar(make, model) {
  var car = {}
  car.make = make
  car.model = model
}

myCar.showStats()
myCar.drive(100)
myCar.showStats()

var person = {
  height: 66,
  gender: 'male',
  weight: 155,
  name: "Narciso Lobo",
  walk: function() {
    console.log('I\'m taking a walk...')
  }
}

