//  JavaScript fundamentals:
// variables,
// if
// if/else,
// nested if/else
// operators,
// boolean logic,
// functions,
// arrays,
// objects,
// loops,
// strings,

// variables,

// var name = "PeterParker";
// let age = 21;
// const isMarried = false;
// var array = ["ajith", "anil"];

// console.log("string type", name, "arraytype", array[0]);

// Three types of deleclaration and its use

// const test = () => {
//   //parent block
//   {
//     //child block
//     let ajith = 123; // can be manuplated can't use in other blocks
//     var ajithVar = 1234; // can be manuplated can use in parents blocks
//     const ajithConst = 12; // can't be manuplated can't use in other blocks
//     console.log(ajithConst);
//   }
//   console.log(ajithVar);
// };
////// end ///////

// if/else,
let a = 1,
  b = 2,
  c = 3;
// single if statement
// if (a > b) {
//   // if the condition is true if statement workes
//   console.log("a is lesser then b");
// }
// /// if else statement
// if (a > b) {
//   // true condition
//   console.log("a is lesser then b");
// } else {
//   // fail condition
//   console.log("a is grater then b");
// }

// /// nested if else statement

// if (a < b) {
//   // checks for true
//   console.log("a is lesser then b");
// } else if (a > c) {
//   // if parent conditions fails
//   console.log("a is grater then b");
// } else {
//   //if non of the above condition passes
//   console.log("not of the statement true ");
// }

//// boolen logics

let x = true,
  y = false;

if (x) {
  // true
  console.log("x is true");
} else {
  //if false
  console.log("y is false");
}
