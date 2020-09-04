// Primitive values 
// Non-primitive values (object references)

// The fundamental difference between primitives and non-primitives
//  is that primitives are immutable and non-primitives are mutable.

// var string = 'This is a string.';
// string[1] = 'H'
// console.log(string) // 'This is a string.'

// let a = 10
// a = 15
// let b = 'Hi'
// let c = a
// c = c + 10
// console.log(a)
// console.log(c)

// var number1 = 5;
// var number2 = 5;
// number1 === number 2; // true
// var string1 = 'This is a string.';
// var string2 = 'This is a string.';
// string1 === string2; // true

// var arr = [ 'one', 'two', 'three', 'four', 'five' ];
// arr[1] = 'TWO';

// var obj1 = { 'cat': 'playful' };
// var obj2 = { 'cat': 'playful' };
// obj1 === obj2;  // false
// var arr1 = [ 1, 2, 3, 4, 5 ];
// var arr2 = [ 1, 2, 3, 4, 5 ];
// arr1 === arr2;  // false

// var obj3 = { 'car' : 'purple' }
// var obj4 = obj3;
// obj3 === obj4;  // true

// let string = 'this is a string' // ['t','h','i'. . .]
// let newString = string.replace('h','H')
// string[1] = 'H'
// console.log("RESULT STRING", string)
// console.log("NEW RESULT", newString)

// Premitive data type
// const a = 10 // 10 save in javascript memory
// const b = 10 // 10 save in javascript memory
// console.log("RESULT", a === b)

// Non premitive data type
// const objOne = {a:1} //<01:02>
// const objTwo = {a:1} //<02:03>
// console.log("SECOND RESULT", objOne === objTwo)


// const obj = {firstName: 'asad', lastName: 'ikhlas'} //<01:02>
// obj.firstName = 'umair'
// console.log("NON PREMTIVE DATA TYPE", obj)

// //Premtive
// const string = 'asad' //passed by value 'asad'
// string = 'umair'
// console.log("PREMTIVE DATA TYPE", string)

// const a = {firstName: 'asad',lastName: 'ikhlas'} //<some address>
// const b = a
// a.firstName = "umair"
// console.log("SECOND VAR", b)
// console.log("FIRST VAR",a)  
