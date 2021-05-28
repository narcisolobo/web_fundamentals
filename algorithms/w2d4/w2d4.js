// Nested arrays and nested for loops



// for(var i = 0; i < my2DArray.length; i++) {
//   for(var j = 0; j < my2DArray[i].length; j++) {
//     console.log(my2DArray[i][j])
//   }
// }

// Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

function isPresent2d(arr2d, value){
  var isPresent = false
  for(var i = 0; i < arr2d.length; i++) {
    for(var j = 0; j < arr2d[i].length; j++) {
      if(arr2d[i][j] === value){
        isPresent = true
        return isPresent
      }
    }
  }
  return isPresent
}

var my2DArray = [[1, 2, 3], [4, 5, 6]]
console.log(isPresent2d(my2DArray, 7))