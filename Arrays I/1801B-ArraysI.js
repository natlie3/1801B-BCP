const chalk = require('chalk');

console.log(chalk.red('------------------------------'));

var firstPerson = 'Mom';
var secondPerson = 'Dad';
var thirdPerson = 'Sister';

var ourParty = [];

// Adding and Removing

// ourParty.push(firstPerson);
// ourParty.push(secondPerson);
// ourParty.push(thirdPerson);

// console.log(ourParty);

// Arrays are just Objects

// var ourArray = {
//   push: function(elem) {
//     if (this['0']) {
//       var foundEmptyIdx = false;
//       var nextIdx = 1;

//       while (foundEmptyIdx === false) {
//         if (!this[nextIdx]) {
//           this[nextIdx] = elem;
//           foundEmptyIdx = true;
//         } else ++nextIdx;
//       }
//     } else {
//       this['0'] = elem;
//     }
//   },
// }

// ourArray.push('eliot');
// ourArray.push('daniel');
// ourArray.push('sharon');

// console.log(ourArray);

// var anyArray = {
//   '0': 'something',
//   '1': 'something',
//   '2': 'something',
// }

// Nothing that special about arrays except for their built in methods that we all love.
// Things like push, pop, slice, etc.
// All of the things well talk about going forward are just objects that make 'promises' to the developer.
// We call promises between a language and a developer a 'contract'.
// The contract with arrays is that they maintain order.

// To really prove they are objects, they do receive string keys in the brackets.

// var stringArray = ['hi', 'bye', 'hello again'];

// console.log(stringArray['1']);
// ^ That works because keys are always strings.

// Why are for loops so commonly used with Arrays?
// Used on strings and arrays all the time, why?
// We were promised with both that - we are given a finite beginning: 0
// And that we have a finite end: length - 1
// If we know exactly the size of any given collection, we can always LOOP through it.

// var stringArray = ['hi', 'bye', 'hello again'];

// for (var i = 0; i < stringArray.length; ++i) {
//   console.log(stringArray[i]);
// }

// Nested Arrays

// var nestedArray = [1, 2, 3, [4, 5, [6]]];

// console.log(nestedArray[3][2][0]);
// nestedArray[3] === [4, 5, [6]];
// [4, 5, [6]] [2] === [6];
// [6] [0] === 6;

// This process can and will go on infinitely.

// Dealing With Nested Arrays
// For Loops are amazingly useful for arrays in general.

var nestedArray = [1, 2, 3, [4, 5, [6]], {}];

// Log everything inside each array.
// for (var i = 0; i < nestedArray.length; ++i) {
//   var currentElement = nestedArray[i];
//   // How do we detect if the element we are inspecting is not a primitive and is instead an array.
//   // Vanilla way to detect an array is:
//   function isAnArray(maybeArray) {
//     return typeof maybeArray === 'object' && typeof maybeArray.length === 'number';
//   }
//   // ES6 - Array.isArray

//   if (Array.isArray(currentElement)) {
//     // Ok, we found an array, but what now?
//     for (var j = 0; j < currentElement.length; ++j) {
//       var currentInnerElement = currentElement[j];
//       // This pattern starting to emerge, can go on forever.
//       if (Array.isArray(currentInnerElement)) {
//         for (var q = 0; q < currentInnerElement.length; ++q) {
//           var currentFinalElement = currentInnerElement[q];

//           console.log(currentFinalElement);
//         }
//       } else console.log(currentInnerElement);
//     }
//   } else console.log(currentElement);
// }
// There seems to be a very obvious pattern here...
// Loop -> find Array -> loop again -> infinity...
// Sneak peek at what recursion solves

// function logAllArray(anArray) {
//   for (var i = 0; i < anArray.length; ++i) {
//     var currentElement = anArray[i];

//     if (Array.isArray(currentElement)) logAllArray(currentElement);
//     else console.log(currentElement);
//   }
// }

// logAllArray(nestedArray);

// Were headed there ^^^ Things will get better!

// For now, lets just run under the presumption that all arrays we deal with will have a max
// depth of 2.

// Grids

// function makeGrid(x, y) {
//   function makeRow() {
//     var row = [];

//     for (var i = 0; i <= x; ++i) {
//       if ((Math.random() * 100) > 98) {
//         row.push('Treasure!');
//       } else row.push(i);
//     }

//     return row;
//   }

//   var grid = [];

//   for (var i = 0; i <= y; ++i) {
//     grid.push(makeRow());
//   }

//   return grid;
// }

// var ourGrid = makeGrid(10, 10);

// function findTreasure(treasureGrid) {
//   var foundTreasure = [];

//   for (var y = 0; y < treasureGrid.length; ++y) {
//     var row = treasureGrid[y];
//     for (var x = 0; x < row.length; ++x) {
//       var point = row[x];
      
//       if (point === 'Treasure!') {
//         foundTreasure.push({ x: x, y: y, value: point });
//       }
//     }
//   }

//   return foundTreasure;
// }

// console.log(findTreasure(ourGrid));

// Lets look at a dangerous thing called PBR (Pass by Reference)

// var row = [1, 2, 3, 4, 5];

// function makeGrid() {
//   var grid = [];

//   for (var i = 1; i <= 5; ++i) {
//     grid.push(row.slice());
//   }

//   return grid;
// }

// var ourGrid = makeGrid();

// ourGrid[2][2] = 'Hi!';

// console.log(ourGrid);

// We just changed EVERY SINGLE ROW, even though - we specifically referenced the 3rd row.
// You're seeing for the first time ever, something that does not exist with primitives.
// When we spoke about primitives we discussed immutability - the value of a primitive cannot be modified.
// Objects, believe in no such thing. You can, and will, modify an objects value.
// What we did here, was we actually modified the value of 'row'. Every single row, is built of 'row'.
// That means theyre ALL LOOKING AT THE SAME MODIFIED OBJECT.

// Grid is secretly this:
// var realGrid = [
//   row,
//   row,
//   row,
//   row,
//   row,
// ];

// A really simple solution to this problem, before we discuss it deeper next week, is the following.
// .slice();
// .slice is a utility function that makes a 'shallow' copy of any data it operates on.

// So what we're now saying is:

// var sliceGrid = [
//   row,
//   row (copy 1),
//   row (copy 2),
//   row (copy 3),
//   row (copy 4),
// ];

// The reason I bring this up tonight is incase during the workshop you run into it!
// If you see a change youre making to an array start to appear everywhere, consider slice.






