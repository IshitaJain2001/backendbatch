 // express
 import express from "express"
import userRouter from "./Routers/userRouter.js"
import dotenv from "dotenv"
dotenv.config()
 //instance (server)

 const app= express()
app.use(express.json())
 // routers ka set up 

 app.use("/user", userRouter)

 app.listen(process.env.PORT)
