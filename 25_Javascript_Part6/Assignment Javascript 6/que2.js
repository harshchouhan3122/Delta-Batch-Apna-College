// Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

function uniqueCharacter(str){
    let res = []
    let res2 = ""
    for(let i=0; i<str.length; i++){
        if (!res.includes(str[i])){
            res.push(str[i])
            res2 += str[i]
        }
    }
    return res2
}


//function to get String with all unique elements
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
        //if current character is not added, then add it in
        //Otherwise it is a duplicate.
        ans += currChar;
        }
    }
    return ans;
}


let str = "abcdabcdefgggh"

let unique1 = uniqueCharacter(str)
let unique2 = getUnique(str)

console.log(str)

console.log(unique1)
console.log(unique2)


