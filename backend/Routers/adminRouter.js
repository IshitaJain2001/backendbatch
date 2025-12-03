import { Router } from "express";
import { getProfile } from "../controllers/adminController.js";


const adminRouter=  Router()
adminRouter.get("/profile", getProfile )
export default adminRouter;