// Build a simple loop, inside a function, that takes an array and
//  prints the value of the array to the console.

let arrayofNumbers = [34, 33, 5, 2, 4];
function printList(arr) {
  let element = '';
  for (let i = 0; i < arr.length; i++) {
    element = arr[i] + ' ';
    console.log(element);
  }
}
printList(arrayofNumbers);
