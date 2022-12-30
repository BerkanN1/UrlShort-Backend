import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    email:{type:String, required:true},
    passwordHash:String,
});



export const ShortlyAdmin = mongoose.model('admin',adminSchema);