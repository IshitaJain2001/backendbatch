import userModel from "../schemas/userSchema"

 export default async function verifypassword(req,res,next){
   const {userName, password}=req.body

   // mongodb query ****

 let user=  await userModel.findOne({userName:userName})


 if(!user){
    return res.json({
        message:"no such user found !"
    })
 }
   bcrypt.compare(password,user.password)



    next()
 }