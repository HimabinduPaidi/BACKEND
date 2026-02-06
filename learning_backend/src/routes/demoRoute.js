import {Router} from "express";
import { demoFunction, demoHealth } from "../controllers/demoController.js";
const demoRouter = Router();
demoRouter.get("/welcome",demoFunction)
demoRouter.get("/health",demoHealth)
export default demoRouter;