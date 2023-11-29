"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"


const AddTopic = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const router=useRouter();
   const handleSubmit=async (e)=>{
e.preventDefault();
if (!title || !description) {
  alert("title and description are required");
  return
}
try {
  const res= await fetch("http://localhost:3000/api/topics",{
    method:"POST",
    headers:{
      'Content-type':"application/json"
    },
    body:JSON.stringify({title,description}),
  })
  if (res.ok) {
router.push("/");
  }else{
    throw new Error("Failed to Create a topic")
  }
} catch (error) {
  console.log(error);
}
   }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        
        <input 
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        className='border border-slate-500 text-lg px-4 py-4'
        type="text" 
        placeholder=' Title' />
        <input 
        onChange={(e)=>setDescription(e.target.value)}
        value={description}
        className='border text-lg border-slate-500 px-4 py-4'
        type="text" 
        placeholder=' Description' />
        <button type='submit' className='font-bold mt-2 py-2 px-2 bg-red-400 text-white '>
Add Topic
        </button>
    </form>
  )
}

export default AddTopic