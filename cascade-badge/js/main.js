//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

function reverseArray(arr){
   
   const reversed = arr.reverse()
   console.log(reversed)
}
reverseArray([1,2,3,4,5,6,7,8,9])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function squareVsCube(a,b){
   if(a.reduce((acc,c) =>acc + c **2, 0) > b.reduce((acc,c)=> acc + c **3,0)){
    console.log(true)
    return true
   }else{
    console.log (false)
    return false
   }
}

squareVsCube([4,4,4],[2,2,2])



//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multipleOfIndex(arr){
    console.log( arr.filter((element,index) => element % index === 0) )

}
multipleOfIndex([0,1,4,5,6])

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sum(arr){
    console.log(arr.reduce((acc,c)=> Number(c+acc,0)))
}
sum([1,2,3,4,5,6])

//wow wtf is happening here
// const s is a function expression, arrow syntax: r holds array(argument), array reduces,a,c is accumulator and current value, plus before a or c makes something them number, and the middle + is the addition and you need a space

const s = r  => r.reduce((a,c)=>+a+ +c)
console.log(s([5,4,3,2,1,6]))