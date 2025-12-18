import { Router } from "express";
import signup from "../controllers/userController.js";
import passwordHashing from "../middlewares/passwordHashing.js";
import { login } from "../controllers/userController.js";
const userRouter=  Router()
userRouter.post("/signup",passwordHashing, signup)
userRouter.post("/login", login )



export default userRouter;