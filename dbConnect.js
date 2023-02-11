import mongoose from "mongoose";

mongoose.connect("mongodb+srv://nader:nader@cluster0.r5rohpu.mongodb.net/beymoney", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})


const connection = mongoose.connection

connection.on("error", err => console.log(err));

connection.on('connected',() => console.log("connceted to mongoDB successfuly!"));























