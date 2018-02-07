const chalk = require('chalk');

console.log(chalk.red('------------------------------'));

// Hoisting

// Function Expressions - Wont work
// doSomething();

// var doSomething = function () {
//   console.log('something');
// }

// Function Declarations - Will Work
// doSomething();

// function doSomething () {
//   console.log('something');
// }

// Left Hand vs Right Hand Assignments
// var a = 5;
// Left Hand: var a
// Right Hand: 5

// The left hand side is you asking for memory - you asking for a space to put something LATER.
// The right hand side is you saying, "hey, that place i asked you to save for later (a), can you put this there."

// Javascript needs to know what memory you need and how much - before it attempts to let you put stuff there.

// Javascript goes through your entire file BEFORE RUNNING IT and makes sure to create all the memory that you've asked for. We can think of this like a first pass.

// console.log(a);

// var a = 5;

// Hoisting - Hoisting is the process by which javascript reserves memory for left hand assignments and makes them available before runtime.
// What youre seeing above is that 'a' in fact exists by the time we console.log - what doesn't exist yet - is its value.
// Values are stored at runtime.
// Top to Bottom left to right.
// The above code after the first pass can be thought of as this:

// var a;

// console.log(a);

// a = 5;

// Hoisting is thought of commonly as 'moving our left hand assignments to the top of the file'

// doSomething();
// var doSomething;

// doSomething();

// doSomething = function () {
//   console.log('do something');
// }

// Function expressions dont work with hoisting because theyre a variable assignment. That means that we reserve memory for a future function.
// But until it becomes a function, its undefined, and undefined CANNOT be invoked. For obvious reasons.

// Function Declarations - why do they work?
// There is no right hand assignment to a function declaration. The 'function' keyword is a sneaky sneaky left hand assignment.
// You're secretly asking the javascript engine to not only reserve memory - but also to store in it.


doSomething();

function doSomething() {
  console.log('do something');
}

// Hoisting is somewhat controversial in JS. The general kind of middleground on it - is that you should be cautious about its use.
// You want your code to be as self-documenting as possible, even, potentially, to someone unfamiliar with how fucked up javascript is.
// This does not happen in other languages.
// Hoisting, then, is not self-documenting at all.









