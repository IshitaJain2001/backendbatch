import mongoose, { Model, Schema } from "mongoose";
import validator from "validator"



const userSchema=   new Schema({
    firstName:{
        type:String,
        required: true 
    },
    lastName:{
        type: String
    },
    userName:{
        type:String,
        unique: true ,
        required: true 
    },
    password:{
        type:String,
        minlength:9,
        required:true,
        validate :{
            validator: validator.isStrongPassword,
            message:"weak password "
        }},
    email:{
        type:String,
        required: true,
        validate :{
            validator : validator.isEmail,
            message:"non email like structure"
         } }
})


 const userModel=  new mongoose.model("USERS",userSchema)

 export default userModel