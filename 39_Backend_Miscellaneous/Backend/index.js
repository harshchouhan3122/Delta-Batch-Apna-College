const express = require("express");
const app = express();

const port = 3000;

app.listen(port , ()=> {
    console.log("Server Started");
});


app.use(express.urlencoded({ extended:true }));     //if request has url data
app.use(express.json())           //if request is in the json format

app.get('/register', (req, res) => {
    let {username, passord} = req.query;
    res.send(`GET Request Sent. Welcome @${username}`);
});

app.post('/register', (req, res) => {
    // console.log(req.body);      //undefined
    // console.log(req.body);      //after writing line num 11
    let {username, password} = req.body;
    res.send(`POST Request Sent. Welcome @ ${username}`);
});
