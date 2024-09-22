// const stud1 = {
//     name : "Harsh",
//     age: 26,
//     marks: 67
// }
// const stud2 = {
//     name : "Mohit",
//     age: 26,
//     marks: 67
// }
// const stud3 = {
//     name : "Rohit",
//     age: 26,
//     marks: 67
// }
// const stud4 = {
//     name : "Virat",
//     age: 26,
//     marks: 67
// }

// Keys are repeating again and again if we are creating same type og object again and again which is not an efficient way
// It create again n again memory location (different references)

// That'swhy we use OOPs 



let arr = [1, 2, 3];
arr.sayHello = ()=> {console.log("Hello")};

arr.push(5);
console.log(arr)

let arr2 = [1, 2, 3];

arr.push(8);
console.log(arr2)

// we have seen that arr2 doesn't have sayHello() 
// So if you want that every new array should have this function in it , so you have to declare it in Prototype

// So basic properties and important methods are defined in prototypes

// Access Prototypes
arr.__proto__(refernce)
Array.__proto__(actual object)
String.__prototype__()

// Factory Function -> used to create an objects
function PersonMaker(name, age){
    let person = {
        name : name,
        age : age,
        talk(){
            console.log(`My name is ${this.name}.`);
        }
    }
    return person
}

let p1 = PersonMaker("Harsh", 35);
let p2 = PersonMaker("Rohan", 25);

console.log(p1);
p2.talk();
// console.log(p2.talk());


// Constructors -> replaced factory functions
// used for initializing objects
// doesn't return anything and starts with Capital Alpha
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function (){
    console.log(`My name is : ${this.name}`);
}

// when we use new keyword then this constructor function and this prototyped function gets encapsulated (after line - 91)

// p3 and p4 are instances
let p3 = new Person("Virat", 40);
let p4 = new Person("Anushka", 30);



// Classes
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`My name is : ${this.name}`);
    }
}

let p6 = new Person("Rohan", 14);
let p7 = new Person("Mohan", 18);

console.log(p6);
p6.talk();



// Inheritance

class Student{
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    talk(){
        console.log(`Hi, I'm ${this.name}`);
    }
}

class Teacher{
    constructor(name, age, subject){
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    talk(){
        console.log(`Hi, I'm ${this.name}`);
    }
}

// We have observed that properties are repeating in both the classes

// Solve this issue with the inheritance

class Person{
    constructor(name, age){
        console.log("Person class constructor called")
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, I'm ${this.name}`);
    }

}

class Student extends Person{
    constructor(name, age, marks){
        console.log("Student Class Constructor called")
        super (name, age);
        this.marks = marks;
    }
    greet(){
        return "Hello";
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);   //parent class/ subclass's constructor is being called
        this.subject = subject;
    }
}

let stud1 = new Student("Harsh", 24, 98);
console.log(stud1.name)
stud1.talk();