  
   import express from "express"
   import dotenv from "dotenv"
import connection from "./config/db.config.js"
import userRouter from "./Routers/userRouter.js"
   dotenv.config()

   const app= express()
connection()
app.use(express.json())
app.use("/user" , userRouter)

   app.listen(process.env.PORT)