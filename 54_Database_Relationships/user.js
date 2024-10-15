const mongoose = require("mongoose");
const { Schema } = mongoose;

const mongo_URL = "mongodb://127.0.0.1:27017/relationDemo";

async function main() {
    await mongoose.connect(`${mongo_URL}`);
}

main()
    .then(()=> console.log("Connected..."))
    .catch((err)=> console.log(err));


const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String
        }
    ]
});

const User = mongoose.model("User", userSchema);


const clearDB = async () => {
    await mongoose.connection.dropDatabase();
};

const addUsers = async() => {

    await clearDB();

    let user1 = User({
        username: 'harsh@123',
        addresses: [{
            location: "Delhi", city: " Delhi"
        }]
    });
    user1.addresses.push({location: "New Delhi", city:"Delhi"});
    console.log(user1);

    let result = await user1.save();
    console.log("User1 Added to DB....", result);


    let user2 = User({});
    user2.username = "mohan@456";
    user2.addresses.push({location: "Gurugram", city:"Gurugram"});

    await user2.save();
    console.log("User2 Added to DB....");

}

clearDB();

addUsers();


// mongoose.connection.close();