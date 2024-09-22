// Write a program to find the largest of 3 numbers.

let num1, num2, num3

num1 = -98
num2 = 15
num3 = 28

let largestNum

if (num1 >= num2){
    if (num1 >= num3){
        largestNum = num1
    }
    else{
        largestNum = num3
    }
}
else{
    if (num2 >= num3){
        largestNum = num2
    }
    else{
        largestNum = num3
    }
}

console.log(`Greatest number from ${num1}, ${num2} and ${num3} is ${largestNum}.`)