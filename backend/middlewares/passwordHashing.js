 import bcrypt from "bcrypt"
 
export default  async function passwordHashing(req, res , next ){
 let {password} = req.body
if(!password){
return res.send("password not received ")
}
let hashedPassword=  await bcrypt.hash(password, 10)

req.body.password= hashedPassword

next()
 }

 // next ()= hanging req 