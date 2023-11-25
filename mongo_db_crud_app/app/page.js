
"use client"
import { useState,useEffect } from 'react'
export default function Home() {
  const [data,setData]=useState([])
  const fetchUsers=async()=>{
    const response=await fetch("http://localhost:3000/api/");
    const result=await response.json();
    console.log("result",result);
    setData(result.data);
  }
  useEffect(() => {
   fetchUsers()
  }, [])
  
  return (
  <>
  jakfhl
  {data?.map((item,index)=>{
    return(
      <div key={index}>
      <h1>{item.name}</h1>
      <h1>{item.email}</h1>
    <h1>  {item.phone}</h1>
      </div>
    )
  })}
  </>
  )
}
