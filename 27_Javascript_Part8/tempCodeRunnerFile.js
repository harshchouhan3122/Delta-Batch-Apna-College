const student = {
    name : "harsh",
    class : 9,
    subjects : ['hindi', 'english', 'physics', 'chemistry'],
    username : 'harsh123',
    password : 'abc123'
}

// If we want only username and pass of the student then destructuring is used
let {username, password} = student;     // variable name should be same in this case
console.log(username, password)

// Using Destructuring
// let {username : user, password: pass} = student     // If we wanna store data in another variable
// console.log(user, pass)

// console.log(user, pass, city)

let {username : user, password: pass, city="Mumbai"} = student     // If we wanna store data in another variable
console.log(user, pass, city)