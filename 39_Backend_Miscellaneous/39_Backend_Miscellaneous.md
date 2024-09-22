# Backend Dev - Miscellaneous Topics

## Get & Post Requests
    -> GET
        -> when you want to search something which is not secured (Responses)
        -> Used to get some responses
        -> Data sent in query strings (limited, only string data sent & visible in URL, not sequered)

    
    -> POST
    -> when you want to send some data and access another data (drive link after login)
        -> Used to POST something (for Create/ Write/ Update)
        -> Data sent via request body (any type of data)

    -> Frontend folder -> index.html

    -> Backend folder -> index.js (download express)

    -> Hoppscoth -> check the GET and POST requests are working or not on index.js file

## Handeling GET Request (through query String)
    app.get('/register', (req, res) => {
        let {username, passord} = req.query;
        res.send(`GET Request Sent. Welcome @${username}`);
    });


## Handeling POST Request
    -> Set up POST request route to get some response
    -> Parse POST Request Data
    
    -> app.use(express.urlencoded({ extended:true }));              ////if request has url encoded data
    -> app.use(express.json())      //if request has json data


    app.post('/register', (req, res) => {
        console.log(req.body);     
        let {username, password} = req.body;
    res.send(`POST Request Sent. Welcome @ ${username}`);
    });


## Revisiting JS (OOPS)
    -> Code -> Frontend Folder -> app.js

### OOPS (Object Oriented Programming)
    -> To represent real life entities in Programming

    -> Objects
    -> Classes
    -> Inheritence
    -> Abstraction
    -> Polymorphism
    -> Encapsulation

    -> OOPS is used To Structure our code
        -> Prototype / Blueprint / Classes
        -> New Operator
        -> Constructor
        -> Classes
        -> keywords (extends, super)

### Object Prototypes
    -> Array is stored as Object in Javascript
        -> .pop(), .push() these functions are available for every new defined array 
        -> because they are defined in the prototype
    
    -> Prototypes are the mechnism by which JavaScript objects inherit features from one another
    -> It is like a Single Template Object which is inherited by other Objects without having their own copy (no new reference created/ single memory occupy)

    -> Code -> app.js

    -> Access Prototypes
        -> arr.__proto__(refernce)
        -> Array.__proto__(actual object)
        -> String.__prototype__()

### Factory Function
    -> A functions that creates Objects
    -> used to create objects (previously used / now constructors are using for this)

### New Operator -> Replacement of Factory Functions
    -> used for creating instances of the object (p3, p4 are the instances)
    -> doesn't return anything and starts with Capital Alpha

    -> Constructor
        function Person(name, age){
            this.name = name;
            this.age = age;
        }


    -> Prototype 
        Person.prototype.talk = function (){
            console.log(`My name is : ${this.name}`);
        }

    -> Instances are created using new() keyword
        let p3 = new Person("Virat", 40);
        let p4 = new Person("Anushka", 30);


    -> When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:
        -> Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
        -> Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].
        Note: Properties/objects added to the constructor function's prototype property are therefore accessible to all instances created from the constructor function.
        -> Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).
        -> If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)

### Classes
    -> Starts with Capital Alphabet
    -> Classes are the templates for cretaing objects
    -> Constructor method is a special method of a class for creating and initializing an object instance of  that class

    -> Code -> app.js

    class Person {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        talk(){
            console.log(`My name is : ${this.name}.`);
        }
    }



### Inheritance
    -> Inheriting properties from parent class to child class (subclass)
    -> super and extends keyword

        class Person{
            constructor(name, age){
                console.log("Person class constructor       called")
                this.name = name;
                this.age = age;
            }
            talk(){
                console.log(`Hi, I'm ${this.name}`);
            }

        }

        class Student extends Person{
            constructor(name, age, marks){
                console.log("Student Class Constructor      called")
                super (name, age);
                this.marks = marks;
            }
            greet(){
                return "Hello";
            }
        }   

    -> Method Overriding
        -> method name is same but functioning is different
    