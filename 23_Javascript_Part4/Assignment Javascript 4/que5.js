/*
Find the largest number in an array with only positive numbers
*/

let arr = [2, 5, 10, 4, 2, 7, 1, 9];

let largest = -1

for(num of arr){
    if (num>largest){
        largest = num
    }
}

console.log(largest)


