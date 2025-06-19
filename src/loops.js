console.log("counting number from 0 to 5")

for (let i =5; i<=15; i+=2){
    console.log(i)
}

console.log("counting number from 10 to 0")
for (let x = 10; x>=0; x-=1){
    console.log(x)
}

console.log("For loop for an array")
const mycolors = ["red","green","blue","yellow"];
for ( let j = 0; j<mycolors.length; j++){
    console.log(`color at index ${j}:${mycolors[j]}`)
}
// create an array of numbers of random numbers
const myarray= [-8,4,9,23,42];
myarray.reverse()
console.log(myarray)

const mynumbers = [-7,9,2,-4,2,1,45,23];
for (let i = 0; i<mynumbers.length; i++){
    for (let j = 0; j<mynumbers.length-1 -i;j++){
        if (mynumbers[j]>mynumbers[j+1]){
            // swap values
            const tempval = mynumbers[j]
            mynumbers[j]=mynumbers[j+1]
            mynumbers[j+1]=tempval
        }
    }
}
console.log(mynumbers)

