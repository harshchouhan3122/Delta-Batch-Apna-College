// Array Traversal -> Loops in Array

let colors = ['red', 'yellow','green','white']

// Print the items of the array
for(let i=0; i<colors.length; i++){
    console.log(i+1,":",colors[i])
}


// Update the colors array -> Append the index number along with colors name
for(let i=0; i<colors.length; i++){
    colors[i] = [i,colors[i]]
}
console.log(colors)



// Loops in nested array
// Print the items of the 2D Array

let array = [["Harsh", "Rohit", 'Dhoni',"Rohan"],['Kavita',"Sonali","shivani"]]
for(let i=0; i<array.length; i++){
    for(let j=0; j<array[i].length; j++){
        console.log(array[i][j])
    }
}
