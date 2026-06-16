import mongoose from "mongoose";

const db = async() =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/LMS')
        console.log("database connected.");
        
    }catch(error){
        console.log(error.message);
        
    }
}

export default db();