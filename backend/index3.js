  
   import express from "express"
   import dotenv from "dotenv"
import connection from "./config/db.config.js"
   dotenv.config()

   const app= express()
connection()


   app.listen(process.env.PORT)