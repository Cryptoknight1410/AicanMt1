import express from "express";
import mongoose, { Schema } from "mongoose";

const PORT = 5000;
const app = express();
app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
mongoose
  .connect("mongodb+srv://khushisanghvi940:1410@cluster.d2wmtdc.mongodb.net/AtlasMt1", {
  
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successfull");
  }).catch((err)=>{
        console.log(err);
  });


const blogs =Schema({
  Name:String,
  content:String,
  image:String,
})

app.get("/blogs",(req,res)=>{
    // res.send("Hello Everyone");
    res.send(req.params);
})