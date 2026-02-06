import {mongoose,Schema,model} from "mongoose";
const bookSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
    publishedyear:{
        type:Number,
        required:true,
        min:1000,
        max:new Date().getFullYear()
    },
    pages:{
        min:1,
        type:Number,
        required:true
    },
    genre:{
        type:String,
        trim:true
    }
},{timestamps:true});
const Book = model("Book",bookSchema);
export default Book;