// Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

function logestName(country){
    let ans=""
    
    for(let i=0; i<country.length; i++){
        if (country[i].length > ans.length){
            ans = country[i]
        }
    }

    return ans
}

let country = ["Australia", "Germany", "United States of America"]
// let country = ["Australia", "Germany","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "United States of America"]

console.log(logestName(country))