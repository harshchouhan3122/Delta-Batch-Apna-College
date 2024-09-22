// Javascript Part - 4

// Loops in javascript

// for loop
// forward loop
for(let i=1; i<6 ; i++){
    console.log(i)
}

// backward loop
for(let i=10; i>5 ; i--){
    console.log(i)
}

// infinite loop
// for ( ; ; ){
//     console.log("Hello")
// }


// while loop
// take input from the user in between 1 to 10 agin and again and when user enter the desired num i.e 5 then only go forward

let user

while(user!=5){
    user = parseInt(prompt('Enter num (1-10) : '));
}
console.log("Correct Num!")


// break keyword
for (let i=1; i<4 ; i++){
    for(let j=1; j< 3; j++){
        if (j==2){
            break;

        }
        console.log(i, j)
    }
}

// continue keyword
// Print the num from 1 to 20 which are not the multiples of 3 and 6

for(let i=1; i<= 20; i++){
    if ((i%3==0) || (i%6==0)) {
        continue;
    }
    console.log(i)
}



// Loops in Array
// arrayTraversal.js


// for of Loop
let colors = ['red', 'yellow','green','white']
for(color in colors){
    console.log(color)
}
for(color of colors){
    console.log(color)
}

for(i in colors){
    console.log(colors[i])
}


// Nested for of loop
let array = [["Harsh", "Rohit", 'Dhoni',"Rohan"],['Kavita',"Sonali","shivani"]]
for(list of array){
    for(names of list){
        console.log(names)
    }
}