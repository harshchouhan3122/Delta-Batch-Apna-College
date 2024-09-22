// function return the concatination of all the strings in an array

function concatItem(array){
    let res = ""
    for(item of array){
        // res = res + " " + item
        res = res + item + " "
    }
    // return res.slice(1)
    return res.slice(0,-1)
}

let array = ["Rohan", "is", "a", "good", "boy"]
console.log(concatItem(array))