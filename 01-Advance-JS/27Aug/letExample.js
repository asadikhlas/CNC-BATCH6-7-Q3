// LET

// Excellent article on LET, CONST, Variable
// https://andy-carter.com/blog/variable-scope-in-modern-javascript

/** ************************************************ */
// Try any part one at a time

// var ===> function-scope
//let, const ===> block-scope

// var someVar = 'asad ikhlas'
// let newVar = 'abc'

// var someVar = "asad ikhlas"
// let newVar = "abc"

// function someFunc(){
//   console.log(newVar)
// }
// someFunc()

// var greeter = "hey hi";

// // console.clear()
// // console.log(greeter)

// let newVar = "asad"
// var times = 4;
// if (times > 3) {
// 	let newVar = 'ikhlas';
// 	console.log('INSIDE IF BLOCK', newVar);
// }

// console.log('OUTSIDE IF BLOCK', newVar);

// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//      let hello = "say Hello instead";
//      console.log(hello);// "say Hello instead"
//  }

// var x = 10;
// console.log('FIRST CONSOLE', x);
// {
// 	var x = 2;
// 	console.log('SECOND', x);
// }
// console.log('THIRD', x);

/** ************************************************ */

// let myname = "asad"

// console.log(myname)  //Result: asad

// function getName() {
// 	let myname = 'Ahmed';
// 	console.log(myname)
// }
// getName();

// console.log(myname)  //Result: asad

/** ************************************************ */

// let myname          // Declare variable
// myname = 'asad';   // Initialize variable
// console.log('LET VALUE', myname) // result: asad

/** ************************************************ */

// let myname          // Declare variable
// console.log(myname) // result: Undefined
// myname = 'asad';   // Initialize variable

/** ************************************************ */

// myname = 'asad';   // Initialize variable
// console.log(myname) // result: ERROR: myname is not defined
// let myname          // Declare variable

/** ************************************************ */

// myname = 'asad';   // Initialize variable
// let myname          // Declare variable
// console.log(myname)// result: ERROR: myname is not defined

// {
// 	let newVar = 'abdul';
// 	let someVar = 'wasay';
// 	console.log('LET CONSOLE',newVar)
// 	console.log('SECOND VAR', someVar)
// }
