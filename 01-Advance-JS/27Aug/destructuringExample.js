// DESTRUCTURING ARRAY

/** ************************************************ */
// Try any part one at a time

// const myArray = ['Asad', 2]
// console.log(myArray[1])
// const [firstName,lastName, age] = myArray
// console.log(firstName)
// console.log(lastName)
// console.log(age)








// const sentence = `${firstName} ${lastName} has ${degrees} Masters degrees.`

// console.log(sentence)
// RESULT:
// Asad
// Ahmed
// 2
// Asad Ahmed has 2 Masters degrees.

// /************************************************** */
// let myArray = ["Asad","Ahmed",2]

// let [firstName, lastName] = myArray

// console.log(firstName)
// console.log(lastName)
// console.log(degrees)

// let sentence = `${firstName} ${lastName} has ${degrees} Masters degrees.`

// console.log(sentence)
// // RESULT:
// // Asad
// // Ahmed
// // degrees is not defined

// /************************************************** */
// DESTRUCTURING OBJECT

// let myObject = {firstName: "Asad", lastName: "Ahmed", degrees: 2}

// console.log(myObject.firstName)
// console.log(myObject.lastName)
// console.log(myObject.degrees)

// let {firstName, lastName, degrees} = myObject

// console.log(firstName)
// console.log(lastName)
// console.log(degrees)

// let sentence = `${firstName} ${lastName} has ${degrees} Masters degrees`

// console.log(sentence)
// Asad
// Ahmed
// 2
// Asad
// Ahmed
// 2
// Asad Ahmed has 2 Masters degrees.

// /************************************************** */

// let myObject = {firstName: "Asad", lastName: "Ahmed", degrees: 2}

// console.log(myObject.firstName)
// console.log(myObject.lastName)
// console.log(myObject.degrees)

// let {firstName, lastName} = myObject

// console.log(firstName)
// console.log(lastName)
// console.log(degrees)

// let sentence = `${firstName} ${lastName} has ${degrees} Masters degrees`

// console.log(sentence)

// function sumAndMultiply(a, b){
//     return [a+b, a*b]
// }
// const [sum, multiply, devision = 'no devision' ] = sumAndMultiply(2, 3)
// console.log(sum)
// const newArray = sumAndMultiply(2, 3)
// console.log(newArray)
// const [sum, multiply, devision] =  sumAndMultiply(2,3)
// console.log(sum)
// console.log(multiply)
// console.log(devision)

// const obj = {
// 	firstName: 'asad',
// 	lastName: 'ikhlas',
// 	firstLevel: {
// 		numberOne: 'AdvanceJS',
// 		secondLevel: {
//             instructor: 'Umair bajwa'
//         },
// 	},
// };

// const {firstLevel: {secondLevel: {instructor}}} = obj;
// console.log("Second LEVEL", instructor)
// console.log("OLD WAY", obj.firstLevel.secondLevel.instructor)
