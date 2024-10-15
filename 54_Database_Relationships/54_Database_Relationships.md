# 54 Database Relationships

## SQL Relationships (via Foreign key)
    - One to one
        - Country name (Table 1)   ->    PM name (Table 2)

    - One to many
        - Users (Table 1)   ->    Social Media Accounts (Insta/Fb/Thread) (Table 2)

    - Many to Many
        - Student (Table 1)   ->    Subjects (Table 2)



## MongoDB Relationships (via Foreign key)

### One to Few (<1000)  -> Embeded one inside the another
    - Address of a user's address (1 users cann have 3 to 4 add.)
    - Store the child document inside parent
    
    - Example
    {
        _id: ....,
        username: "user@123",
        addresses: [
            {location: location1},
            {location: location1},
        ]
    }

        - here user is parent and address is Child.

#### Implementation of One to Few Relationship
    const mongoose = require("mongoose");
    const { Schema } = mongoose;
    
    const mongo_URL = "mongodb://127.0.0.1:27017/   relationDemo";
    
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
    
    addUsers();
    
    mongoose.connection.close()


### One to Many (approx 1000 data)  -> use array of ObjId references
    - Store a reference to the child document inside the parent

    - In terminal we can see the whole object along with data but in the mongosh we can see that its get reference from the other schema and store only object id.

    - Create customer.js

        const customerSchema = new Schema({
            name: String,
            orders: [
                { 
                    type: Schema.Types.ObjectId,
                    ref: "Order"
                }
            ]
        });
        const Customer = mongoose.model("Customer", customerSchema);

        const addCustomers = async() => {
            // await clearDB();
            await addOrders();

            let cust1 = new Customer({
                name: "Rahul Sharama",
            });

            let order1 = await Order.findOne({ item:"Chips" });
            let order2 = await Order.findOne({ item:"Chocolate" });

            cust1.orders.push(order1);
            cust1.orders.push(order2);

            let res = await cust1.save();
            console.log(res);

        };


#### Implementation of One to Many Relationship (USING POPULATE)
    - Insertmany([{ //describe here }])
    - https://mongoosejs.com/docs/populate.html

    - Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s).
        - Replacing the object id with the actual Data

    const findCustomers = async() => {
        await addCustomers();
    
        let result = await Customer.find({});   //Here only ObjectId are visible
        console.log(result);
    };
    findCustomers();
    
    - Using Populate
        let result = await Customer.find({}).populate("orders");   //Here only ObjectId are visible

        console.log(result[0]);

#### Referance is like a foreign key in the MongoDB as SQL.

### One to Squillions / Part of one to Many
    - Examples -> Ouora, Instagram, Facebook
    - Store Ref of parent into child (opposite of the previous approach)
        - We are not storing details of posts inside user, instead of this we are going to store the user detail with the post 

    - Create posts.js

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
            console.log(user1);

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

        addData().then(()=>{console.log("Data Saved   Successfullly..")})
            .catch((err) => {console.log("Error Ocuured!")});

        // const del = async() => {
        //     await Post.findByIdAndDelete("");
        //     await User.findByIdAndDelete("");
        // };
        // del();

        const getdata = async() => {
            let result = await Post.findOne({}).populate        ("user", "username");
            console.log(result);
        };
        getdata();



### Reading Docs
    - 6 Rules of Thumb for the MongoDB Schema Design
        - https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design

    Database denormalization rules of thumb: Your guide through the rainbow
    Here are some “rules of thumb” to guide you through these innumerable (but not infinite) choices:

    One: Favor embedding unless there is a compelling reason not to. (Approach 1)

    Two: Needing to access an object on its own is a compelling reason not to embed it.

    Three: Arrays should not grow without bound. If there are more than a couple of hundred documents on the “many” side, don’t embed them; if there are more than a few thousand documents on the “many” side, don’t use an array of ObjectID references. High-cardinality arrays are a compelling reason not to embed.

    Four: Don’t be afraid of application-level joins: If you index correctly and use the projection specifier, then application-level joins are barely more expensive than server-side joins in a relational database.

    Five: Consider the read-to-write ratio with denormalization. A field that will mostly be read and only seldom updated is a good candidate for denormalization. If you denormalize a field that is updated frequently then the extra work of finding and updating all the instances of redundant data is likely to overwhelm the savings that you get from denormalization.

    Six: As always with MongoDB, how you model your data depends entirely on your particular application’s data access patterns. You want to structure your data to match the ways that your application queries and updates it.


#### Two Way referencing
    If you want to get a little bit fancier, you can combine two techniques and include both styles of reference in your schema, having both references from the “one” side to the “many” side and references from the “many” side to the “one” side.

    For an example, let’s go back to that task-tracking system. There’s a “people” collection holding Person documents, a “tasks” collection holding Task documents, and a One-to-N relationship from Person to Task. The application will need to track all of the Tasks owned by a Person, so we will need to reference Person to Task.

    With the array of references to Task documents, a single Person document might look like this:

    db.person.findOne()
    {
        _id: ObjectID("AAF1"),
        name: "Kate Monster",
        tasks [     // array of references to Task documents
            ObjectID("ADF9"), 
            ObjectID("AE02"),
            ObjectID("AE73") 
            // etc
        ]
    }
    
    On the other hand, in some other contexts this application will display a list of Tasks (for example, all of the Tasks in a multi-person Project) and it will need to quickly find which Person is responsible for each Task. You can optimize data retrieval for this purpose by putting an additional reference to the Person in the Task document.

    db.tasks.findOne()
    {
        _id: ObjectID("ADF9"), 
        description: "Write lesson plan",
        due_date:  ISODate("2014-04-01"),
        owner: ObjectID("AAF1")     // Reference to Person document
    }

    This design has all of the advantages and disadvantages of the “One-to-Many” schema, but with some additions. Putting in the extra "owner" reference into the Task document means that its quick and easy to find the task’s owner, but it also means that if you need to reassign the task to another person, you need to perform two updates instead of just one. Specifically, you’ll have to update both the reference from the Person to the Task document, and the reference from the Task to the Person. (And to the relational database gurus who are reading this, you’re right; using this schema design over a normalized database model means that it is no longer possible to reassign a Task to a new Person with a single atomic update. This is OK for our task-tracking system; you need to consider if this works with your particular use case.)