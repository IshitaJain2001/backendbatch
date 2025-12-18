 import bcrypt from "bcrypt"
 import validator from "validator"
export default  async function passwordHashing(req, res , next ){
    console.log("req in middleware received ");
    console.log(req.body);
    
 let {password} = req.body

let isStrong= validator.isStrongPassword(password)
if(!isStrong){
    return res.json({
        message:"please eneter a strong password"
    })
}

if(password.length<9){
    return res.json({
        message:"password length should at least be 9"
    })
}
if(!password){
return res.send("password not received ")
}
let hashedPassword=  await bcrypt.hash(password, 10)

req.body.password= hashedPassword

next()
 }

 // next ()= hanging req 