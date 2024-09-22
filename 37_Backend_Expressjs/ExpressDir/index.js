const express = require("express");
const app = express();

// console.dir(app);

const port = 3000;   //Port -> logical endpoint of network

// Creating Web Server which listen to some request and respond accordingly
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
// Its continuously listening from that port  -> to stop Ctrl+C

// Check it first -> "https://github.com/hoppscotch/hoppscotch/discussions/2051"
// app.use((req, res)=>{
//     console.log('Request Recieved.');

//     // res.send({
//     //     name:"apple",
//     //     color: "red"
//     // });

//     let code = "<h1>Fruits</h1 <ul><li>apple</li><li>mango</li></ul>"
//     res.send(code);
// })

// It will send same response everytime
// Now Check the routing

app.get('/', (req, res)=>{
    res.send("You contacted root path");
});

// app.get('/apple', (req, res)=>{
//     res.send({name:"apple", color:"red"});
// });

// app.get('/mango', (req, res)=>{
//     res.send({name:"mango", color:"yellow"});
// });

app.get('/orange', (req, res)=>{
    res.send({name:"orange", color:"orange"});
});

// // Same as else condition
// app.get('*', (req, res)=>{
//     res.send("Path not exists.");
// });

// path parameters
app.get("/:username/:id", (req, res)=>{
    console.log(req.params);
    
    let {username, id} = req.params;
    res.send(`Hello ${username}, your id is : ${id}`)
});

// Query String
app.get('/search', (req, res)=>{
    let {q} = req.query;
    if(!q){
        res.send(`Nothing Searched`);
    }
    res.send(`${q}`);
})

// Same as else condition (write it at the end)
app.get('*', (req, res)=>{
    res.send("Path not exists.");
});