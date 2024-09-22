// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2

let num1, num2

num1 = 29
num2 = 799

if (num1%10 == num2%10){
    console.log(`Last digit of ${num1} and ${num2} are same.`)
} else{
    console.log(`Last digit of ${num1} and ${num2} are not same.`)
}