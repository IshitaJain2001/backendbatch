  // 4 - register, login , updateProfile, Deleteprofile

import { Router } from "express";
import { deleteUser, login, signup, update } from "../controllers/userController.js";

   // async

   const userRouter= Router()
   //post

   userRouter.post("/signup", signup)
      userRouter.post("/login", login)
         userRouter.patch("/updateProfile", update)
            userRouter.delete("/deleteProfile", deleteUser)

  // http://localhost:3000/user/signup

  export default userRouter;