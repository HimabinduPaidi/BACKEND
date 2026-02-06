import Book from "../models/Book.js";
async function createNewBook(req,res){
    try {
       
        const newBook = await Book.create(req.body)
        console.log(newBook);
        const {title} = newBook;
        const existingBook = await Book.findOne({title:title})
        if(existingBook._id){
            throw new Error("Already exists!")
        }
        if(!newBook._id){
            throw new Error("Book has not created in db!")
        }
        res.status(201).json({
            message:"New Book has been created!!",
            newBookId:newBook._id,
            requests: {
                body:req.body,
                params:req.params,
                query:req.query,
                headers:req.headers
            }
        })
    } catch (error) {
        res.status(400).json({
            error:true,
            message:error.message
        })
        
    }
}
export {createNewBook};