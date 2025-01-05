# MongoDB - Part 1

# Download 
    - https://www.youtube.com/watch?v=h2x6BmUi5zQ (VIDEO)
    - https://www.mongodb.com/try/download/community (MONGODB)
    - https://www.mongodb.com/try/download/shell (MONGO SHELL)

## The Mongo Shell
    -> Pinned to Starts - mongosh
    -> Download MongoShell and mongoDB from official Website
    -> Can Recognize Javascript Shell 

    - quit, exit, console.clear()
    - show dbs
    - clear

    - test -> temp db created bydefault

    - use -> to use specific db  -> creates db if not exists
    - db -> like pwd (current Database)

## BSON Data
    -> Binary JSON
    -> https://www.mongodb.com/resources/basics/json-and-bson
    -> Data Stored in MongoDB is always in a BSON format
    
    -> JSON
        -> Text Based Data (Parsing Difficult)
        -> Space Inefficient
        -> Human and Machine
        -> UTF-8 encoding
    
    -> BSON
        -> Binary JSON
        -> Space Efficient
        -> More Datatypes
        -> Machine Only
        -> Binary Encoding

## Document and Collection
    -> Document - Mongo Stores data in the form of document (BSON docs)
    -> Collection - MongoDB stores documents in Collections

    -> Database -> Database
    -> Tables -> Collections
    -> Attributes(Tuples/Rows) -> Collections
    -> Key:Value pairs are stored in Document

## Insert in DB (camelCase)
    -> https://www.mongodb.com/docs/manual/crud/
    -> show collections (Show Tables)
    -> db.collection.insertOne()
    -> db.collection.insertMany()

    - show collections
    - db.student.insertOne({name:"Harsh", marks:79}) -> automaticlly primary key alotted by MongoDB
    - db.student.find() -> return Array

    -> Schema not Required

    - db.student.insertMany([{name:"Rohan", marks:79, city:"Delhi"}, {name:"Mohan",marks:45}])

## Find in DB
    -> db.collection.find()

    -> db.collection.find({key:value})      -> return Array (return cursor - reference to original) --> Important
        -> db.collection.find({city:"Delhi"})
        -> db.collection.find({city:"Delhi", marks: 79})
        -> db.collection.find({city:"Delhi", marks: {$gt:75} })
        -> db.collection.find({city: {$in : ["Delhi", "Mumbai"]}, marks: {$gt:75} })

    -> db.collection.findOne({key:value})       -> return object (return Actual Document)

## Query Operators
    -> https://www.mongodb.com/docs/manual/reference/operator/query/

    -> Comparision Operators (as Key:value)
        - $eq
        - $ne
        - $gt
        - $gte
        - $lt
        - $lte
        - $in
        - $nin
            - Matches none of the values specified in an array

    -> Logical
        - $and
        - $not
        - $nor
        - $or
            - db.collection.find( {$or: [ {mark: {$gt:75}}, {city: "Delhi"}] })

## Update in DB
    -> [Link](https://www.mongodb.com/docs/manual/reference/operator/update/)

    -> To update a single document, use db.collection.updateOne(<filter>, <update>, <options>)
        -  db.student.updateOne( {name:"Harsh"}, {$set: {marks:95} } )

    -> To update multiple documents, use db.collection.updateMany()
        - db.student.updateMany( {city:"Delhi"}, {$set: {city:"New Delhi"} } )

    -> To replace a document, use db.collection.replaceOne().
        - db.student.replaceOne( {name:"bob"}, { name:"Harsh", marks:79, state:"Haryana"} )

    -> $addFields, $set, $project, $unset, $replaceRoot, $replaceWith

## Nesting
    -> db.student.findOne({"performance.marks":88})

## Delete in DB
    - db.collection.deleteOne(<filter>, <options>)
    - db.collection.deleteMany(<filter>, <options>)

    -> db.dropDatabase()
    -> db.student.deleteMany( {} )


# MongoDB - Part 2

## Mongoose
    -> Library that creates a connection between MongoDB and NodeJS (Runtime Environment)
    -> It is an ODM (Object Data Modeling) Library.
    
    -> npm init -y
    -> npm i mongoose
    -> code index.js

    -> https://mongoosejs.com/
        -> Read the documentation to learn it with JS
    
    -> NOTE : ctrl+C to quit the connection

    -> connect() -> asynchronous method which return promise

    -> Basic Template to connect db 
        const mongoose = require("mongoose");
        // Database -> Collections(Tables) -> Documents(Rows)
        async function main() {
            await mongoose.connect("mongodb://127.0.0.1:27017/test");
        };


        main().then( () => {console.log("Connection Successful...")}).catch(err => console.log(err));

## Schema
    -> Schema - Defines the Shape of the Document within that collection (Structure of Doc/ Blueprint)

    -> Data Types - String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map, UUID

    const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
    })

## Models (Class -> Object)
    -> It is a class with which we construct documents.

    - const <modelname> = mongoose.model("<collectionName>", <collectionSchema>);
        - generally modelName = collectionName

    const User = mongoose.model("User", userSchema);

    -> NOTE: then mongosh create collections as users (User -> users, Product -> products)
        - Always write collectionName as Singular

## Insert in Mongoose
    -> // Insert Data
        const user1 = new User( { name:"Harsh",         email:"harsh@email.com", age:21 } );
        const user2 = new User( { name:"Rohan",         email:"rohan@email.com", age:25 } );

        user1.save()
        user2.save()

    .load index.js -> Store data

    -> Insert Multiple Data
        User.insertMany([
            { name: "Tommy", email: "tommy@gmail.com",  age: 45},
            { name: "Mohit", email: "mohit@gmail.com",  age: 54},
            { name: "Lalit", email: "lalit@gmail.com",  age: 25}
        ])
        .then( (data) => {
            console.log(data);
        })
        .catch( err => console.log(err));

###    -> NOTE : OPERATION BUFFERING
        -> Mongoose uses Operation Buffering
        -> Mongoose lets you start using your models immediately, without waiting for the mongoose to establish a connection to MongoDB.

## Find in Mongoose
    -> Model.find()   -> Returns a Query Object (thenable) -> Its not a promise but we can use .then() with it

    -> Parameters
        - filter, projection, update, options
        - Model.findById()

    User.find( {} ).then( (res) => {
        console.log(res);
    }).catch( err => {
        console.log(err);
    })

    User.findOne( {age : {$gt:30} } ).then( (res) => {
        console.log(res);
    }).catch( err => {
        console.log(err);
    })

    User.findById("667414e5869755b594b22352")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });


## Update in Mongoose
    -> Model.updateOne() -> first one will be update which matches with the given filter
    -> Model.updateMany()

    -> Both the methods will Return Querry Object

    User.updateOne( {name:"Lalit"}, {age: 40} )
      .then( (res) => {
        console.log(res);
      }).catch( err => {
        console.log(err);
      })


    User.updateMany({ age: { $gt: 26 } }, { $inc: { age: 30 } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }); 


### FindAndUpdate in Mangoose
    -> Model.findOneAndUpdate()

    User.findOneAndUpdate( {name:"Lalit"}, {age: 42} , {new: true})
      .then( (res) => {
        console.log(res);
      }).catch( err => {
        console.log(err);
      })


    -> Model.findByIdAndUpdate()


## Delete in Mongoose
    -> Model.deleteOne()
    -> Model.deleteMany()
    -> Model.findOneAndDelete()
    -> Model.findByIdAndDelete()

    User.deleteOne( {name: "Rohan"} )
      .then( (res) => {
        console.log(res)
      })
      .catch( (err) => {
        console.log(err)
      })

    User.deleteMany( {name: "Harsh"} )
      .then( (res) => {
        console.log(res)
      })
      .catch( (err) => {
        console.log(err)
      })


## Schema Validation
    -> Some rules for Schema
    -> https://mongoosejs.com/docs/schematypes.html

    -> SQL - colName, dataType, constraints

    -> books.js
        const bookSchema = mongoose.Schema({
            title: {
                type: String,
                required: true      //NOT NULL
            },
            author: {
                type: String
            },
            price: {
                type: Number
            }
        });

        -> Visit books.js


## SchemaType Options
    -> required, default, select, validate, get, set, alias, immutable, transform

    -> Constraints according to the Datatype
        -> Visit - https://mongoosejs.com/docs/schematypes.html
        -> String - lowercase, uppercase, trim, match, maxLength, minLength, enum (value not other than that), populate
        -> Number - min, max, enum, populate
        -> Date - min, max, expires
        -> Store Array -> type:[String]

## Validation in Update & Errors
    -> Rules defined in the Schema Validation are Applicable only for the Insertion Operation and not works for Updating Data
    
    -> options -> {runValidators: true}

### Custom Error Messages
    const bookSchema = mongoose.Schema({
        title: {
            type: String,
            required: true,      //NOT NULL
            maxLength: 20        // max Characters in string <=s    20
        },
        author: {
            type: String
        },
        price: {
            type: Number,
            default: 1,          //Default price = 0
            // min: 1               // Min Price should be 1
            min: [1, "Price is too low for Amazon."]   //Custom     Errors              // Min Price should be 1
        },
        category: {
            type: String,
            enum: ["fiction, comedy"]       //Other Category    Books will not save
        }
    });

### Access the error message
    Book.findByIdAndUpdate(
        "66751b6a84b4618b66005f1e",
        {price: -100},
        { runValidators: true}
    ).then( res => console.log(res)).catch(err => console.log(err.errors.price.properties.message));   // _message: 'Validation failed'

