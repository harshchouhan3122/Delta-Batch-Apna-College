// Javascript Part - 7


// this keyword -> used to use data of current object

const student = {
    name: "harsh",
    age : 26,

    math:15,
    phy:18,
    chem:20,

    getAvg(){
        return ((this.math+this.phy+this.chem)/3).toFixed(2)
    }
}

console.log(student.getAvg())



// try catch
console.log('Statement 1')
console.log('Statement 2')
// let a
try {
    console.log(a)
}
// catch {
//     console.log("error occured")
// }
catch(errorr) {
    console.log("error occured")
    console.log(errorr)
}
console.log('Statement 3')
console.log('Statement 4')


// Arror Function
const sum = (a,b) => {return a+b;}
console.log(sum(2,3))
console.log(sum(2,8))


// Optional Paranthesis for the single argument
const cube = n => {return n**3}
console.log(cube(5))
console.log(cube(3))

// Implicit Return
const square = n => (n**2)
const square2 = n => n**2
console.log(square(5))
console.log(square(3))
console.log(square2(3))