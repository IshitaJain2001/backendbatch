// // // // // // //  console.log("hello world ");
// // // // // // //  // 0,1 
// // // // // // // //  

// // // // // //  // custom modules 
// // // // // //  // built in modules (fs , http)

// // // // // // // export import - react

// // // // // // // common js 

// // // // // // let {a,b}= require("./index2.js")

// // // // // // a()
// // // // // // b()

// // // // // import { log } from "console"
// // // // // import a from "./index2.js" // relative path 
// // // // // import fs from "fs" // absolute path 
// // // // // // a()

// // // // //  // fs - file system 

// // // // //     // crud - >  

// // // // // // create 

// // // // //  fs.writeFile("text.txt", "hello world fron text file ", ()=>{

// // // // //  }) 
 
// // // // //  // 2 (sync , aaync)


// // // // //  fs.readFile("./text.txt", "utf-8",(err, data)=>{
// // // // // console.log(data);
// // // // // } )

// // // // // fs.appendFile("./text.txt", "updated code ", ()=>{})

// // // // // fs.rename("text.txt", "text2.txt" , ()=>{
    
// // // // // })

// // // // // fs.rmdir //

// // // // // fs.mkdir

// // // // // fs.writeFileSync("text3.txt","utf") // 2 args - file ka naam , content

  
// // // //     // http server 

// // // //      import http from "http"
// // // // // http module 

// // // // // http server // frontende se req mongodb req 

// // // //  let server= http.createServer((a,b)=>{
// // // //     b.end("response delivered ")
// // // //  })


// // // //    //listen 
// // // //    //port number 
// // // //  // callback fn 

    

// // // // server.listen(3000, ()=>{
// // // //     console.log("server started ");
    
// // // // })

// // // // // localhost:3001



// // //    import http from "http"

// // //     const server= http.createServer((req,res)=>{
// // //          const {method, url}= req
// // //          if(method=="GET" && url=="/home") {
// // //          return res.end("get re for home")
// // //          }
// // //          else if (method=="POST" && url=="/form"){
// // //           return res.end("post req received")
// // //          }
// // //          else if(method== "PATCH"){
// // //           return res.end("ptach req received ")
// // //          }

// // //          else if(method=="DELETE"){
// // // return res.end("delete req received!")
// // //          }
// // //     })

// // //     server.listen(3000, ()=>{
// // //       console.log("serevr started !!");
      
// // //     })

// // //       //user method + path (get,post,put/patch,delete )
// // //      // http://localhost:3000/home/about

       
// // // express - node framework 

// // //1. syntax easy - built in 
// // //2 . mongodb connectivity 
// // //3. scalable - optimized 
// // //4. middlewares  

// //  import express from "express";
// //  // express instance - server 

// // const app=  express() // app  //http.createServer 

// // app.listen(3000,()=>{

// // })



//  import express from "express"
// import userRouter from "./Routers/userRouter.js"
// import adminRouter from "./Routers/adminRouter.js"
// import dotenv from "dotenv"
// dotenv.config()
//  const app= express()
//  // routers, controllers , dotenv --- very very very imp

//   app.use("/user", userRouter)
//   app.use("/admin", adminRouter)

//  // middlewares, routes 
   

//  app.listen(process.env.PORT)


//  //crud - create , read , update , delete ***********