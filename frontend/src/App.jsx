import React from 'react'
import { useState } from 'react'

export default function App() {
  const [signformDetails, setSignFormDetails] = useState({
    email:"",
    password:"",
    firstName:""
  })

   const [loginformdetails, setLoginForm]= useState({
    email:"",
    password:""
   })

   const [action, setAction]= useState("login")

 async  function onSignSubmitHandler(){
 // api integration 

 // restful api

 if(signformDetails.email.trim()=="" || signformDetails.password.trim()==""|| signformDetails.firstName.trim()==""){
  return alert("please fill in details ")
 }

 else{

 
let res= await fetch("http://localhost:3000/user/signup",{
// method - 
// req.body
// json 
// credentials cookies 

method:"POST",
body: JSON.stringify(signformDetails),
headers:{
  "Content-Type":"/application/json"
},
credentials: "include"
 })
  }}

  
 async  function onLoginSubmitHandler(){

  }


  return (
    <div>
<button onClick={()=>setAction("signup")}>signup</button>
<button onClick={()=>setAction("login")}>login</button>

{
  action=== "login"?
  <form>
<input type="text" name="" id="" placeholder='email' onChange={e=>setLoginForm({
  ...loginformdetails,
  email : e.target.value
})}/>
<input type="password" name="" id="" placeholder='password' onChange={e=>setLoginForm({
  ...loginformdetails,
  password:e.target.value
})}/>
<button onClick={onLoginSubmitHandler}>login</button>
  </form>
  
  : <form action="">
        <input type="text" onChange={e=>setSignFormDetails({
          ...signformDetails,
          email: e.target.value
        })} placeholder='email' />
        <input type="text"  onChange={e=>setSignFormDetails({
          ...signformDetails,
          password:e.target.value
        })} placeholder='password'/>
        <input type="text" name="" id="" onChange={e=>setSignFormDetails({
          ...signformDetails,
          firstName:e.target.value 
        })} placeholder='firstName'/>
        <button onClick={onSignSubmitHandler }>submit</button>
      </form>
}
     
    </div>
  )
}
