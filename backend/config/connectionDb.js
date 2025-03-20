const mongoose=require("mongoose")

const connectDb=async()=>{
    await mongoose.connect("mongodb+srv://pkatiyar574:Ramji1234@cluster0.kynig5p.mongodb.net/Recipe_App")
    .then(()=>console.log("connected..."))
}

module.exports=connectDb