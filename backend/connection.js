import mongoose from "mongoose";


const Connection=(USERNAME,PASSWORD)=>{
    mongoose
  .connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster.d2wmtdc.mongodb.net/AicanMt1`, {
  
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successfull");
  }).catch((err)=>{
        console.log(err);
  });
}

export default Connection;