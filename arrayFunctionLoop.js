// Build a simple loop, inside a function, that takes an array and
//  prints the value of the array to the console.

function printList(arr) {
   for (let i = 0; i < arr.length; i++) {
     let element = arr[i];
   } 
   return element;
}

let arrayofNumbers = [34, 44, 2, 56, 49, 7, 3, 6, 9];
console.log(`The items in the array are: ${printList(arrayofNumbers)}`);

