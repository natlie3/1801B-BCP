const chalk = require('chalk');

console.log(chalk.red('------------------------------'));

// Scope

// Top to Bottom -> Left to Right

// someThing is what we might call a root scope.
// Our file - as the root.
var someThing = true;

function doSomething() {
  // When we talk about anotherThing - we're no longer speaking about the 'file'
  // We're speaking about the function doSomething
  // doSomething's local scope
  // anotherThing only exists within this function - the outer world has no concept of it.
  var anotherThing = 'meow';

  return anotherThing;
}

// console.log(doSomething.anotherThing);

// function addFive(n) {
//   var num = 5;
//   return n + num;
// }

// console.log(addFive(3)); // => 8

// Namespace collision.
// Namespace collision is what we call a moment in code when two disparate variables or any instance of data have the same name referring to them.

// var num = 5;

// function addFive() {
//   var n = arguments[0];
//   var num = arguments[1];

//   return n + num;
// }

// console.log(addFive(3, num));

// One Sided Glass Policy
// You can always look outwards towards things on 'outer' scopes. You can never look inwards.

// var num = 5;

// function addFive(n) {
//   return num + n;
// }

// console.log(addFive(3));

// Creating Scope
// The only thing that creates scope is the brackets on a function in ES5.
// In ES6, there is a special thing called 'block scope' that can create scope.

// ES5
function aThing2 () {
  var aThing = 'true';
}

// console.log(aThing);

// let ES6 block scope

// let x = 'not 5';

// if (true) {
//   let x = 5;

//   console.log('innerX: ', x);
// }

// console.log('outerX: ', x);

// const - Immutability
// const cannot be reassigned

// const tinkyWinky = 'purple';
// tinkyWinky = 'yellow';

// console.log(tinkyWinky);



// Log out every element in an array of your choosing.
// Global search syntax.
// What is global?
// What is the environment that is running your code?
// Global is the most extreme possible location for something to exist in any given environment.

// someArray = [1, 2, 3];

// var num = 5;

// function logArray(anArray) {
//   for (var i = 0; i < anArray.length; ++i) {
//     console.log(anArray[i]);
//   }

//   return num;
// }

// logArray(someArray);

// Lets pretend to be the javascript engine.
// Global Scope

// var scopeThing = null;
// function outerScope() {
//   function midScope() {
//     function innerScope() {
//       scopeThing = 5;

//       console.log(scopeThing);
//     }

//     innerScope();
//   }

//   midScope();
// }

// // root scope
// outerScope();

// DONT EVER USE THE GLOBAL SCOPE
// WHICH CAN BE SIMPLIFIED TO: ALWAYS USE VARIABLE DECLARATIONS - WHETHER THEY BE VAR, LET, OR CONST

// Arguments
// Arguments is an array-like object that is special to the body of a function. It gives access to certain special attributes only available to a function CALL.
// The most significant of these to you is of course, the arguments themselves. BUT arguments comes with some other things as well.

// function localScope() {
//   console.log(arguments);
// }

// console.log(localScope(5, 4));

// IIFE's
// Immedietaly Invoked Function Expression
// Theres no way to store this.
// var IIFE = (function () {
//   console.log('Hi im an IIFE!');
//   return 'IIFE';
// })();
// // IIFE's never exist on memory.

// console.log('IIFE: ', IIFE);

// Garbage Collection
// The challenge: When does javascript know it can throw away your variables and functions to free up memory for future variables and functions?
// Javascript as always chose convenience over performance.
// Javascript says as long as ANYTHING REFERENCES ANYTHING from this point of the code to the bottom - it will keep it in memory.
// Otherwise it will throw it out.

// Revealing Module Pattern
// var React = (function() {
//   // ... tons of cool shit we can't understand that generates the following...
//   return {
//     render: function() {
//       // Imagine it using stuff from above in this function.
//       console.log('render cool react stuff');
//     }
//   }
// })();

// console.log(React)

// IIFE's get broken by the arguments object.

var BrokenReact = (function() {
  // ... tons of cool shit we can't understand that generates the following...
  return {
    render: function() {
      // Imagine it using stuff from above in this function.
      console.log('render cool react stuff');
    },
    selfArgs: arguments,
  }
})();

console.log(BrokenReact.selfArgs.callee.toString())

// The arguments object exposes the scope of a function to the outer world.
// This is extremely extremely frowned upon.

// eval

















