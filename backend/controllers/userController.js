import userModel from "../schemas/userSchema.js"

 export default async function signup(req, res){
   console.log("---");
   console.log(req.body);
   
   
   let {firstName, lastName,password, userName, email}= req.body 
if(!firstName || !userName || !email){
   return res.status(400).json({
      message:"please enter all details "
   })

}

let user = new userModel({
   firstName, lastName,userName,password,email
})

await user.save()
return res.json({
   message:"new user saved successfully !!"
})

 }


 export   async function login(){

  }