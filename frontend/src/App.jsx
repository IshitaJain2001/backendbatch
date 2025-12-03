import React from 'react'
import { useState } from 'react'

export default function App() {
  const [formDetails, setFormDetails] = useState({
    email:"",
    password:""
  })

 async  function onSubmitHandler(){

  }
  return (
    <div>


      <form action="">
        <input type="text" onChange={e=>setFormDetails({
          ...formDetails,
          email: e.target.value
        })} />
        <input type="text"  onChange={e=>setFormDetails({
          ...formDetails,
          password:e.target.value
        })}/>
        <button onClick={onSubmitHandler }>submit</button>
      </form>
    </div>
  )
}
