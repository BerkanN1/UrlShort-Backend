
import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    longUrl: {
        type:String,
        required:true,
    },
    shortUrl:String,
    urlId:String,
    clicks:{
        type: Number,
        required: true,
        default:0
    },
    createdAt: Date,
    createdBy: String,
    deadline:Date,
    tag:String
})

export const Url = mongoose.model('Url', urlSchema)

