const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

const userRoute = require("./routes/user")
const authRouter = require("./routes/auth")

const app = express();
dotenv.config();


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connection successful")
}).catch((err)=>{
    console.log(err);
})
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRouter);


app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running")
})