console.log("while loop....")

let counter = 0
while (counter <= 10){
    console.log(`while loop  ${counter}`)
    counter++
}
let counter2 = 50
while (counter2 >= 0){
    console.log(`while loop  ${counter2}`)
    counter2-= +5
}
// for....of loop
console.log("for...of loop....(iterating through an array)")

const fruits = ["apple","banana","orange","mango","grapes"]
for (const fruit of fruits){
    console.log(fruit)
}
console.log("for...of loop....(iterating through a string)")
const myname = "Brandon"
for (const index of myname){
    console.log(index)
}

console.log("for...in loop....(iterating through object properties)")
const person = {
    firstname:"Brandon",
    age:25,
    city:"London"
}
for (const key in person){
    if(Object.hasOwnProperty.call(person, key)){
        console.log(`Person key ${key}, value ${person[key]}`)
    }
}
console.log("for...in loop....(iterating through object properties)")
const fighter = {
    fightname:"Ilia",
    country:"USA",
    category:"Lightweight"
}
for (const key in fighter){
    if(Object.hasOwnProperty.call(fighter, key)){
        console.log(`fighter key ${key}, value ${fighter[key]}`)
    }
}
