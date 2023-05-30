const express = require("express");
const app = express();

app.get("/",(req, res)=>{
    res.send("Hello");
});

app.get("/quote",(req,res)=>{
    res.send("Quote");
});

app.listen(5000,()=>{
    console.log("Server started on port no. 5000");
});

