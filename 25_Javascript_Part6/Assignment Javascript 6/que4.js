// Write a JavaScript function to count the number of vowels in a String argument

function countVowels(str){
    let count = 0
    let vowels = ['a','e','i','o','u']
    for(let i=0; i<str.length; i++){
        if (vowels.includes(str[i].toLowerCase())){
            count += 1
        }
    }
    return count
}

let str = "apnacollege"
str = "Harsh"

console.log(countVowels(str))