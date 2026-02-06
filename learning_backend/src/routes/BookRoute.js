import {Router} from "express";
import { createNewBook } from "../controllers/BookController.js";
const BookRouter = Router();
BookRouter.post("/",createNewBook);
export default BookRouter;