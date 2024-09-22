// Import Mongoose Library
const mongoose = require("mongoose");

// Connect it with DB --> Ctrl+C to quit the connections
// mongoose.connect("mongodb://127.0.0.1:27017/test")

// Database -> Collections(Tables) -> Documents(Rows)


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    // use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
};


main()
    // .then( (res) => {console.log(res)})
    .then( () => {console.log("Connection Successful...")})
    .catch(err => console.log(err));


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

// modelName = collectionName -> generally
// const Employee = mongoose.model("Employee", userSchema);
const User = mongoose.model("User", userSchema);


// INSERT DATA

// Insert Data
const user1 = new User( { name:"Harsh", email:"harsh@email.com", age:21 } );
const user2 = new User( { name:"Rohan", email:"rohan@email.com", age:25 } );

// user1.save().then(console.log("user1 Saved.."))    //.save() also a asynchronous function which returns promise
// user2.save()
    // .then( (res) => {console.log(res)})
    // .catch( err => {console.log(err)})


// Mutiple Insertion 
// User.insertMany([
//         { name: "Tommy", email: "tommy@gmail.com", age: 45},
//         { name: "Mohit", email: "mohit@gmail.com", age: 54},
//         { name: "Lalit", email: "lalit@gmail.com", age: 25}
//     ])
//     .then( (data) => {
//         console.log(data);
//     })
//     .catch( err => console.log(err));


// FIND DATA

// return Array
// User.find( {} ).then( (res) => {
//     console.log(res);
// }).catch( err => {
//     console.log(err);
// })

// User.findOne( {age : {$gt:30} } ).then( (res) => {
//     console.log(res);
// }).catch( err => {
//     console.log(err);
// })

// User.find( {age : {$gt:30} } ).then( (res) => {
//     console.log(res);
//     console.log(res[0]);
// }).catch( err => {
//     console.log(err);
// })

// User.findOne({ name: "Lalit" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findById("667414e5869755b594b22352")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });




// UPDATE DATA
// User.updateOne( {name:"Lalit"}, {age: 40} )
//   .then( (res) => {
//     console.log(res);
//   }).catch( err => {
//     console.log(err);
//   })


// User.updateMany({ age: { $gt: 26 } }, { $inc: { age: 30 } })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     }); 

// User.findOneAndUpdate( {name:"Lalit"}, {age: 35} )
User.findOneAndUpdate( {name:"Lalit"}, {age: 42} , {new: true})
  .then( (res) => {
    console.log(res);
  }).catch( err => {
    console.log(err);
  })


// DELETE DATA
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

//  Model.findOneAndDelete()
//  Model.findByIdAndDelete()



// SCHEMA VALIDATIONS
// refer books.js


// SCHEMA TYPE OPTIONS
