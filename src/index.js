const express = require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const mongoose = require("mongoose");

app.use(express.json());

app.use("/users",userRouter);

app.use("/note",noteRouter);


app.get("/",(req, res)=>{
    res.send("Hello");
});

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(5000,()=>{
        console.log("Server started on port no. 5000");
    });
})
.catch((error)=>{
    console.log(error);
})




