const chalk = require('chalk');

console.log(chalk.red('------------------------------'));

// Problem 1.
// Part 1:
// var planet = 'Planet Earth,';
// outerFunction();

// function outerFunction(){
//   var country = 'United States,';
//   middleFunction();

//   function middleFunction() {
//     var state = 'New York State,';
//     innerFunction();

//     function innerFunction() {
//       var city = 'New York City';
//       innermostFunction();

//       function innermostFunction() {
//         console.log('Fullstack HQ is at', planet, country, state, city)
//       }
//     }
//   }
// }

// Part 2:

// outerFunction('Planet Earth,');

// function outerFunction(planet){
//   middleFunction('United States,');

//   function middleFunction(country) {
//     innerFunction('New York State,');

//     function innerFunction(state) {
//       innermostFunction('New York City');

//       function innermostFunction(city) {
//         console.log('Fullstack HQ is at', planet, country, state, city);
//       }
//     }
//   }
// }

// Problem 2:

// Write a function increment that accepts a number and increments the global variable counter by that amount. The function should also log the current value of the counter after the increment operation.

// Each successive call to increment should progressively change the value held by the counter.

// var counter = 0;

// function increment(num) {
//   counter += num;
//   console.log(`counter is now ${counter}`);
// }

// increment(2);    // counter is now 2
// increment(6);    // counter is now 8
// increment(-1);    // counter is now 7

// Interesting Thoughts to start having... Scope and Closure

// function createCounter() {
//   var counter = 0;

//   return function(num) {
//     counter += num;
//     console.log(`counter is now ${counter}`);
//   }
// }

// var firstCounter = createCounter();

// var secondCounter = createCounter();

// firstCounter(1);
// secondCounter(10);
// firstCounter(1);
// secondCounter(10);
// firstCounter(1);
// secondCounter(10);

// Problem 3:

// var badGuys = function() {

//   var bond = '007';

//   (function oddJob() {

//     var AgentinScope = (bond === '007');

//     var prediction = 'bond is referring to the outer scope.';

//     console.log("Bond in OddJob's scope", AgentinScope, "because " + prediction);
//   })();

//   (function goldFinger(bond) {

//     var AgentinScope = (bond == '007')

//     var prediction = 'bond is not equal to undefined.';

//     console.log("Bond in Gold Finger's scope", AgentinScope, "because " + prediction);
//   })();


//   (function scaramanga(target) {

//   var target = bond;

//     var AgentinScope = (bond == '007')

//     var prediction = 'bond is referring to the outer scope.';

//     console.log("Bond in Scaramanga's scope", AgentinScope, "because " + prediction);
//   })();

//   (function drNo() {
//     var bond = 'Body Double';

//     var AgentinScope = (bond === '007');

//     var prediction = 'Body Double is not equal to 007.';

//     console.log("Bond in  Dr. No's scope", AgentinScope,  "because " + prediction);
//   })();

//   (function Jaws(agent) {
//     var agent = bond;
//     bond = 'Body Double';

//     var AgentinScope = (agent === '007');

//     var prediction = 'agent stored the value of 007 before it was mutated to body double.';

//     console.log("Bond in Jaws' scope", AgentinScope,  "because " + prediction);
//   })();


//   (function elChiffre() {
//     var agent = bond;
//     bond = 'Body Double';

//     var AgentinScope = (agent === '007');

//     var prediction = 'bond was mutated on the last IIFE. Its not Body Double.';

//     console.log("Bond in El Chiffre's scope", AgentinScope,  "because " + prediction);
//   })();

// }

// // Run the function
// badGuys()

// Problem 4:

/*
    Note: For all problems, do not:
        1. Edit the line initializing the test message (eg. the first line below)
        2. Edit any console.log line
*/

// var testOneMessage = "test failing";

// function testOne(testOneMessage) {
//   // Test One Restrictions: Do not declare any new variable with the var keyword
//     // Do not reassign testOneMessage
//   console.log("Test one: ", testOneMessage);
// }

// // Run test one
// testOne("test succeeding");


// var testTwoMessage = "test failing";

// function testTwo() {
//   // Test Two Restrictions: Do not change any code in the body of this function
//   helperFunc();
//   console.log("Test two: ", testTwoMessage)
// }

// function helperFunc() {
//   testTwoMessage = "test succeeding";
// }

// // Run test two
// testTwo()

// var testThreeMessage = "test failing";

// function testThree(testThreeMessagea) {
//   // Test Three Restrictions: Do not change any code in the body of this funciton
//   // Type only a single character
//   if (testThreeMessage) {
//     testThreeMessage = "test succeeding";
//   }

//   function logMessage() {
//     console.log("Test three: ", testThreeMessage || "test failing");
//   }

//   logMessage();
// }

// // Run test test three
// testThree()


// var testFourMessage = "test succeeding";

// function testFour(msg) {
//   // Test Four Restrictions: Delete only a single character anywhere in the body of this function
//   // Do not make any other changes

//   function innerFunc(msg) {
//     msg = msg

//     function doubleInner(ms) {
//       testFourMessage = msg;
//       return testFourMessage;
//     }

//     testFourMessage = doubleInner("test failing")
//   }

//   innerFunc(testFourMessage);

//   msg = testFourMessage;
//   console.log("Test four: ", testFourMessage)
// }

// // Run test four
// testFour("test failing")
