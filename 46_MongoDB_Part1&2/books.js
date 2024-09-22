const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
    // use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
};


main()
    // .then( (res) => {console.log(res)})
    .then( () => {console.log("Connection Successful...")})
    .catch(err => console.log(err));


const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,      //NOT NULL
        maxLength: 20        // max Characters in string <=s 20
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        default: 1,          //Default price = 0
        // min: 1               // Min Price should be 1
        min: [1, "Price is too low for Amazon."]   //Custom Errors              // Min Price should be 1
    },
    category: {
        type: String,
        enum: ["fiction, comedy"]       //Other Category Books will not save
    }
});

// Create Model
const Book = mongoose.model("Book", bookSchema);

// Book.insertMany([
//         { title: "Modern History", author: "Harsh", price: 400},
//         { title: "Advance Physics", author: "Rohan", price: 500},
//         { title: "mathematics", author: "Lalit", price: 600},
//     ])
//     .then( (data) => {
//         console.log(data);
//     })
//     .catch( err => console.log(err));


let book1 = new Book({
    // title: "",           //Required Fiels can not be NULL
    title: " ",
    author: "Unknown2",
    price: 500
    // price: "500"         //Its acceptable -> It can be parse into Integer 
})

book1
    .save()
    .then( (res) => {
        console.log(res);
    })
    .catch( (err) => {
        console.log(err);
    });

Book.findByIdAndUpdate(
    "66751b6a84b4618b66005f1e",
    {price: -100},
    { runValidators: true}
).then( res => console.log(res)).catch(err => console.log(err.errors.price.properties.message));   // _message: 'Validation failed'


