const student ={
    name:"harsh",
    marks:45,
    prop: this,             //global scope

    getName: function(){
        console.log(this)   //this -> calling object
        return this.name
    },

    getMarks: () => {
        console.log(this)   //this -> this of parents's scope -> window is the object 
        return this.marks
    },

    getInfo1: function(){
        setTimeout(()=>console.log(this), 2000)     //Window Object Call -> if you wanna use inbuilt function use 'this' with arrow function
    },
    getInfo2: function(){
        setTimeout( function (){
            console.log(this)           
        }, 2000)
    },
}


// console.log(student)
// console.log("__________")

// console.log(student.getName())
// console.log("__________")

// console.log(student.getMarks())
// console.log("__________")


console.log(student.getInfo1())
console.log(student.getInfo2())
