import express from "express";
import { registerUser, loginUser ,logOut, getUserById, refreshAccessToken, getMyProfile, updateUserDetails} from "../controllers/UserController.js";
import { validate } from "../middlewares/validate.js";
import { createUserSchema } from "../validators/user.Validators.js";
import { verifyAccessToken } from "../middlewares/auth.js";

const userRouter = express.Router();
// http://localhost:8000/users
userRouter.post("/register", validate(createUserSchema), registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", verifyAccessToken, logOut);
userRouter.get("/me", verifyAccessToken, getMyProfile)
userRouter.get("/:id", getUserById)
userRouter.put("/:id", updateUserDetails)

export default userRouter;