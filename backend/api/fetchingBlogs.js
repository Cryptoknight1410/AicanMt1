import mongoose,{Schema} from "mongoose";

const Schemas = new Schema({
        content:String,
        image:String,
        name:String,
        Name:String,
        
});
const document = mongoose.model("blogs", Schemas);
const fetchingBlogs = async (req, res) => {
  try {
    const data = await document.find({});
    console.log(data);
    res.send(data)
  } catch (err) {       
    console.log(err);
  } finally {
    console.log("Its closing");
    mongoose.connection.close;
  }
};

export default fetchingBlogs;
