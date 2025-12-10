import { Router } from "express";
import signup from "../controllers/userController.js";
import passwordHashing from "../middlewares/passwordHashing.js";

const userRouter=  Router()
userRouter.post("/signup",passwordHashing, signup)




export default userRouter;