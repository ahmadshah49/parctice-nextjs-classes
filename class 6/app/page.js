"use client"
import { useState } from "react"
const page = () => {
const [state,setState]=useState({
  userName:'',
  email:'',
  phone:0
})
const onChangehandler=(e)=>{
  setState({
    [e.target.name]:e.target.value
  })
}
  return (
    <>
<input name="userName" type="text" placeholder="Enter Your Name" onChange={onChangehandler}></input>
<br/>
<input name="email" type="email" placeholder="Enter Your Email" onChange={onChangehandler}></input>
<br/>
<input name="phone" type="phone" placeholder="Enter Your Phone Number" onChange={onChangehandler}></input>
<br/>
<hr/>
<p>This is Your Name: {state.userName}</p>
<p>This is Your Email: {state.email}</p>
<p>This is Your Phone: {state.phone}</p>

    </>
  )
}

export default page
