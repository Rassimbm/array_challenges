console.log("page loaded...");

// 1. Always Hungry
// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alwaysHungry(arr) {
    for(var i = 0; i < arr.length; i++)
    console.log(arr[i]);
    if(arr[i] == "food"){
        console.log("Yummy");
    } 
    if(arr[i] !== "food") console.log("I'm hungry")
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

// 2. High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);

        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// 3. Better than average
// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    var avgNum = sum / arr.length;
    var count = 0
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > avgNum){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

// 4.Array Reverse
// Write a function that will reverse the values an array and return them.
function reverse(arr) {
    var reversedArr = [];
    for(var i = arr.length - 1; i >= 0; i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

// 5.Write a function that will return an array of Fibonacci numbers up to a given length n.
function fibonacciArray(n) {
    var fibArr = [0, 1];
    while(fibArr.length < n){
        var nextFibNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        fibArr.push(nextFibNum);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); 

