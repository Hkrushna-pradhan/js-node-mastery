const express = require("express");

const app = express();

console.dir(app);

let port = 8080;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res)=>{
    res.send("hello i am root Hk nodemon check");
});

app.get("/:username/:id", (req, res)=>{
    let {username, id} = req.params;
    res.send(`hello ${username} and your id is ${id}`);
});

app.get("/search", (req , res)=>{
    let {q} = req.query;
    console.log(req.query);
    res.send(`<h1>search result for ${q}</h1>`);
})

// app.get("/apple", (req, res)=>{
//     res.send("You contacted apple path");
// });

// app.get("/orange" , (req, res)=>{
//     res.send("You contacted orange path");
// });

app.use((req,res)=>{
    res.send("this path does not exit");
});

// app.use((req, res)=>{
//     // console.log(req);
//     console.log("request recieved");
//     let code ="<h1>Fruits</h1> <li>apple</li><li>Banana</li>"
//     res.send(code);
// });