# Article Summary

## JavaScript Array Methods

### Examples are:

- **Array length**: This property returns the length (size) of an array. e.g `let size = fruits.length; `
- **Array toString()**: This toString() converts an array to a string of (comma separated) array values.e.g `fruits.toString(); `
- **Array pop()**: The pop() method removes the last element from an array. e,g `fruits.pop() `
- **Array push()**: The push() method adds a new element to an array (at the end). e.g. `fruits.push("Kiwi") `
- **Array shift()**: The shift() method removes the first array element and "shifts" all other elements to a lower index. e.g. `fruit.shift(); `
- **Array unshift()**: The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements. e.g. `fruit.unshift("Kiwi"); `
- **Array splice()**: The splice() method adds new items to an array. e.g `fruits.splice(2, 0, "Lemon", "Kiwi"); `

  - The first parameter (2) defines the position where new elements should be added (spliced in).
  - The second parameter (0) defines how many elements should be removed.
  - The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

- **Array slice()**: The slice() method slices out a piece of an array and returns an array with the deleted items.e.g. `fruits.splice(2, 2, "Lemon", "Kiwi"); `
- **Array join()**: The join() method also joins all array elements into a string, but in addition you can specify the separator. e,g. `fruits.join(" \* ") `
- **Array delete()**: Using delete leaves undefined holes in the array. e. g `delete fruits[0]`. Its better to Use pop() or shift() instead.
- **Array concat()**: The concat() method creates a new array by merging (concatenating) existing arrays. e.g `myGirls.concat(myBoys) `, `arr1.concat(arr2, arr3); ` , `arr1.concat("Peter") `. **Note: The concat() method does not change the existing arrays. It always returns a new array.**
- **Array flat()**: Flattening an array is the process of reducing the dimensionality of an array. e.g `const myArr = [[1,2],[3,4],[5,6]]; `,
  `const newArr = myArr.flat(); `

## JavaScript Functions

## JavaScript Reference Functions

## JavaScript Control Flow Statements

    In JavaScript, there are three main types of control flow statements:

- **if/else statements**: The if…else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.
- **switch statements**: Switch statements are used to execute a block of code based on the value of a variable or expression.
- **Loops.**
   - For Loops
   - While Loops : A while loop simply repeats itself while something is true.  **It continues until the condition is false.**
   -  do ... while loop :  The do ... while loop will first execute the code, then continue while the condition remains true.
## JavaScript Functions Basics

- **Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.**

To create a function we can use a function declaration.

```
function showMessage() {
 alert( 'Hello everyone!' );
}
showMessage().
```

### Local, Outer,and Global variables
- Local variables declared inside a function **is only visible inside that function**.
-  The **function has full access to the outer variable**. It can modify it as well.
- Global variables are visible from any function.

### Parameters

-  **Parameters** are arbitrary data passed to a function.
- **An argument** is the value that is passed to the function when it is called (it’s a call time term).

### Default values

- If a function is called, but an argument is not provided, then the corresponding value becomes undefined. e.g ```showMessage(from, text)``` called with ```showMessage("Ann"); ``` l would output ```*Ann*: undefined" ```
- We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =. e.g ```showMessage(from, text = "no text given")```
- To check if parameter is missing use ``` ?? ```

### Return a value

-  When the execution reaches a **return**, the function stops, and the value is returned to the calling code.
- If a function does not return a value, it is the same as if it returns undefined
