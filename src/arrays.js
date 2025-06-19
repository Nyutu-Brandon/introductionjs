const fruits = ["apples","bananas","oranges"];
const scores = [12,23,14,76,98];
const mixedbag = ["kenya",89,true,null]
console.log("my favorite fruit is " + fruits[0]);
fruits[1]= "watermelon";
console.log(`my favorite fruit is ${fruits[1]}`)
fruits.push("mango");
console.log(fruits);
const lastfruit = fruits.pop();
console.log(lastfruit);
console.log(fruits);

console.log("Foreach...... ")
scores.forEach((score ,index)=>{
    console.log(`Item at index ${index} is ${score}`)
})
// map() method creates a new array by transforming every array
const numbers = [1,2,3,4,5];
console.log("map....")
const double = numbers.map(number => number*2)
console.log(double)
console.log(numbers)

// create a new array with only element that pass a test
const numbers2 = [3,4,7,17,24,32,18];
console.log("filter....")
const even = numbers2.filter(number => number%2===-0)
console.log(even)
console.log(numbers2)