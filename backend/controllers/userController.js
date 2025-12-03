 import bcrypt from "bcrypt";
 const users=[]


 export async function signup(req,res){
const {name, email, password, username}= req.body
 //bcrypt ** 

//  vxhdv => hacking 

const hashedPassword=await  bcrypt.hash(password, 10)
const user= {
    name, email, password:hashedPassword, username
}
users.push(user);

res.send(users)
 }






  export async function login(req,res){

let {email, password}= req.body


 // email, password 

 if(!email.trim() || !password.trim()){
   return res.send("email and password both are required ")
 }       


// email -> invalid credentials

// let emailFound= users.find((user)=> user.email == email)
let emailFound= users.find((u)=>u.email==email)
console.log(emailFound);

 if(emailFound){
    // return res.send(emailFound)

 let isVerified=  await bcrypt.compare(password, emailFound.password)

 if(isVerified){
    return res.send(`user loggedin successfully , welcome ${emailFound.name}`)
 }
 else{
    return res.send("incorrect password ")
 }
 }
 else{
    return res.send("incorrect email ")
 }
// email shi h pr password glt h - // invalid credentials 

// email password 
 }



  export async function update(req,res){

 }
  export async function deleteUser(req,res){

 }

 