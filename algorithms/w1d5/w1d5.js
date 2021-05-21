// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// fruit2 = fruit1;
    
// console.log(fruit2 + " and " + fruit1);

var fruit1 = "apples";
var fruit2 = "oranges";

[fruit1, fruit2] = [fruit2, fruit1]

// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

// While Loops
// Sentry, where it starts, where it ends, how it changes

var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

// For the algo there are two levels of difficulty:
// 1: Create a new array
// 2: Reverse the array in-place

function reverse(arr) {
  for (let i = 0; i < Math.floor(arr.length/2); i++){
    var temp = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp
    console.log(arr)
  }
  return arr
}

reverse(['a', 'b', 'c', 'd', 'e'])