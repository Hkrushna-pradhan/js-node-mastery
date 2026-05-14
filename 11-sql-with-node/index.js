const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const path = require("path");
const app = express();

const methodOverride = require("method-override");



const port = 8080;

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Hkp@9938"
});

let getRandomUser = ()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
};




app.get("/", (req, res)=>{
    let q= `SELECT count(*) from user`;
    try{
    connection.query(q,(err, result)=>{
    if(err) throw err;
    let count =result[0]["count(*)"];
    res.render("home.ejs",{count});
})
} catch(err){
    console.log(err);
    res.send("some error in database");
}
});

app.get("/user",(req,res)=>{
     let q= `SELECT * from user`;
    try{
    connection.query(q,(err, users)=>{
    if(err) throw err;
    res.render("showUsers.ejs", {users});
})
} catch(err){
    console.log(err);
    res.send("some error in database");
}
})

app.get("/user/:id/edit", (req,res)=>{
    let {id}= req.params;
    let q= `SELECT * from user where id = '${id}'`;
    try{
    connection.query(q,(err, result)=>{
    if(err) throw err;
    let user = result[0];
    res.render("edit.ejs", {user});
})
} catch(err){
    console.log(err);
    res.send("some error in database");
}
});


//UPDATE ROUTE

app.patch("/user/:id",(req,res)=>{
    let {id}= req.params;
    let {password: formPassword , username: newUsername} = req.body;
    let q= `SELECT * FROM user WHERE id = '${id}'`;
    try{
    connection.query(q,(err, result)=>{
    if(err) throw err;
    let user = result[0];
    if(formPassword != user.password){
        res.send("WRONG Password");
    }
    else{
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id='${id}' `;
        connection.query(q2, (err, result)=>{
            if(err) throw err;
            res.redirect("/user");
        });
    }
});
} catch(err){
    console.log(err);
    res.send("some error in database");
}
});


//ADD NEW USER
app.post("/user",(req,res)=>{
    let {username, password, email} = req.body
    let id =faker.string.uuid();
    let q = `INSERT INTO user (id, username, email, password) VALUES ("${id}", "${username}", "${email}", "${password}");`;
    try{
    connection.query(q,(err, result)=>{
    if(err) throw err;
    res.redirect("/user");
})
} catch(err){
    console.log(err);
    res.send("some error in database");
}
});

//Delete Post
app.post("/user/delete/:id",(req,res)=>{
    let {id} = req.params;
    res.render("delete.ejs", {id});
});
app.delete("/user/:id", (req,res)=>{
    let {id} = req.params;
    let {email: formEmail, password:formPassword} = req.body;
    let q= `SELECT * FROM user WHERE id = '${id}'`;
    try{
    connection.query(q,(err, result)=>{
    if(err) throw err;
    let user = result[0];
    if(formPassword != user.password || formEmail != user.email ){
        res.send("Invalid email and password");
    }
    else{
        let q2 = `DELETE FROM user WHERE id='${id}' `;
        connection.query(q2, (err, result)=>{
            if(err) throw err;
            res.redirect("/user");
        });
    }
});
} catch(err){
    console.log(err);
    res.send("some error in database");
}
});



app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});




// try{
//     connection.query(q,[data],(err, result)=>{
//     if(err) throw err;
//     console.log(result);
// })
// } catch(err){
//     console.log(err);
// }
// connection.end();