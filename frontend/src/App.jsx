import React from 'react'
import { useState } from 'react'

export default function App() {
  const [signformDetails, setSignFormDetails] = useState({
    email:"",
    password:"",
    firstName:"",
    lastName:"",
    userName:""
  })

   const [loginformdetails, setLoginForm]= useState({
    email:"",
    password:""
   })

   const [action, setAction]= useState("login")

 async  function onSignSubmitHandler(e){
e.preventDefault()
 if(signformDetails.email.trim()=="" || signformDetails.password.trim()==""|| signformDetails.firstName.trim()=="" || signformDetails.userName.trim()=="" ){
  return alert("please fill in details ")
 }

 else{

 
let res= await fetch("http://localhost:3000/user/signup",{
method:"POST",
headers:{
  "Content-Type":"application/json"
},
body: JSON.stringify(signformDetails),

credentials: "include"
 })

let data= await  res.json()
console.log(data);

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



  <input type="text"  onChange={e=>setSignFormDetails({
          ...signformDetails,
          lastName:e.target.value
        })} placeholder='lastName'/>
        <input type="text" name="" id="" onChange={e=>setSignFormDetails({
          ...signformDetails,
          userName:e.target.value 
        })} placeholder='userName'/>

        <button onClick={onSignSubmitHandler }>submit</button>
      </form>
}
     
    </div>
  )
}
