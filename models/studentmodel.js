import mongoose from "mongoose";

const studentschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const student = mongoose.model('student',studentschema)

export default student;