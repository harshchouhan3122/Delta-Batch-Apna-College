const mongoose = require ("mongoose");
const { Schema } = mongoose;

let MongoDB_URL = "mongodb://127.0.0.1:27017/relationDemo";

async function main(){
    await mongoose.connect(`${MongoDB_URL}`);
}

main()
    .then(() => {console.log("Connection Successfull....");})
    .catch((err) => {console.log(err)});

const userSchema = new Schema({
    username: String,
    email: String
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async() => {
    // let user1 = new User({
    //     username: "Rahul Kumar",
    //     email: "rahul@gmail.com"
    // });
    let user1 = await User.findOne({email: "rahul@gmail.com"})
    // console.log(user1);

    // let post1 = new Post({
    //     content: "Hello World!",
    //     likes: 7
    // });
    // post1.user = user1;

    let post2 = new Post({
        content: "Bye Bye!",
        likes: 25,
    });
    post2.user = user1;

    // console.log(post2);

    // await user1.save();
    // await post1.save();
    await post2.save();
}

addData().then(()=>{console.log("Data Saved Successfullly..")})
    .catch((err) => {console.log("Error Ocuured!")});

// const del = async() => {
//     await Post.findByIdAndDelete("");
//     await User.findByIdAndDelete("");
// };
// del();

const getdata = async() => {
    let result = await Post.findOne({}).populate("user", "username");
    console.log(result);
};

getdata();