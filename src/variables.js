// variables are declared using 3 keywords;var,let and const
import {addnumbers} from './functions.js'
var num = 34
var name = "Erick"
var num2 = 45.4

console.log(name,num,num2)

var name2 = "Kenya"
let numb = 34
const dec = 45.2
console.log(name2)
console.log(numb)
console.log(dec)

let my_school ="Emobilis"
console.log("I learnt coding at " + my_school);
let num1 = 26
let num3 = 8
console.log( num1 + num3);
console.log( num1 - num3);
console.log( num1 * num3);
console.log( num1 % num3);
console.log( num1 / num3);
console.log("the sum of "+num1,"and",num3,"is",num1+num3)

const year = new Date().setFullYear(2025,6,18)
console.log("The year is", year)
let counter =10
counter=counter-2
console.log("The counter after increment is ",counter)

let result=addnumbers(5,21)
console.log(result)