  
   import express from "express"
   import dotenv from "dotenv"
import connection from "./config/db.config.js"
import userRouter from "./Routers/userRouter.js"
import cors from "cors"
   dotenv.config()

   const app= express()
   connection()
   app.use(express.json())
   app.use(cors({
origin: "http://localhost:5173",
  credentials: true
   }))


app.use("/user" , userRouter)

   app.listen(process.env.PORT)